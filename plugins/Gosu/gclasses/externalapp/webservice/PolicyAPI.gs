package externalapp.webservice

uses gw.api.database.DBDateRange
uses gw.api.database.Relop
uses gw.api.server.AvailabilityLevel
uses gw.api.system.ABLoggerCategory
uses gw.xml.ws.annotation.WsiAvailability
uses gw.xml.ws.annotation.WsiPermissions
uses gw.xml.ws.annotation.WsiWebService
uses externalapp.pas.PASHomeownersPolicySummary
uses externalapp.pas.PASPersonalAutoPolicySummary
uses gw.api.database.Query

@WsiWebService
@WsiAvailability(AvailabilityLevel.MAINTENANCE)
class PolicyAPI {

//                             ==================================
//                             ====    HOMEOWNERS - SEARCH   ====
//                             ================================== 
private static var _logger = ABLoggerCategory.INTEGRATION
  function searchForHomeownersPolicies ( criteria : String ) : PASHomeownersPolicySummary[] {

    var currentField : String
    var currentValue : String
    var queryObj = Query.make(PASPolicy)
    queryObj.compare(PASPolicy#PolicyType, Relop.Equals, "Homeowner's") // In PAS, policy type is 'Homeowner's'
    _logger.info("PolicyAPI.searchForHomeownersPolicies: Received request for homeowners policy search. Criteria: " + criteria)
    if (criteria.NotBlank) {

      // Parse search criteria
      var searchCriteria = criteria.split(";")

      // Dynamically build query based on search criteria. (If a search field does not match
      // a known search field, then the criteria is ignored.)
      for (currentCriteria in searchCriteria) {
        currentField = currentCriteria.split(",")[0]
        currentValue = currentCriteria.split(",")[1]

        // For education purposes, the sample search uses only the policy number,
        // insured name, and loss date as search crtieria
        switch (currentField) {
          case "PolicyNumber":
            queryObj.compare(PASPolicy#PolicyNumber, Relop.Equals, currentValue)
            break
          case "InsuredName":
            queryObj.compare(PASPolicy#PolicyHolder, Relop.Equals, currentValue)
            break
          case "LossDate":
            queryObj.compare(PASPolicy#EffectiveFrom, new DBDateRange(null, currentValue.toDate(), true))
            queryObj.compare(PASPolicy#EffectiveTo, new DBDateRange(currentValue.toDate(), null, true))
            break
          default:
            break
        }
      }
    }
    var resultsObj = queryObj.withLogSQL(true).select()
    if (resultsObj.Count > 0) {
        var searchResults = new PASHomeownersPolicySummary[resultsObj.Count]

        // convert search results into serializable objects

        for (current in resultsObj index i) {

          var newSummary = new PASHomeownersPolicySummary()
          newSummary.policyNumber = current.PolicyNumber
          newSummary.policyType = current.PolicyType
          newSummary.effectiveFrom = current.EffectiveFrom
          newSummary.effectiveTo = current.EffectiveTo
          newSummary.insuredName = current.PolicyHolder
          newSummary.streetLine1 = current.PrimaryAddress.StreetLine1
          newSummary.city = current.PrimaryAddress.City
          newSummary.state = current.PrimaryAddress.State
          newSummary.postalCode = current.PrimaryAddress.PostalCode
          searchResults[i] = newSummary
        }
        return searchResults
    }
    return null
  }

//                             ====================================
//                             ====    HOMEOWNERS - RETRIEVE   ====
//                             ====================================

  function retrieveHomeownersPolicy ( policyNumber : String, lossDate : java.util.Date ) : String {

    if (policyNumber.NotBlank) {
      _logger.info("PolicyAPI.retrieveHomeownersPolicy: Received request for homeowners policy retrieval. Policy number: " + policyNumber)

      // search for policy
      var queryObj = Query.make(PASPolicy)
      queryObj.compare (PASPolicy#PolicyType, Relop.Equals, "Homeowner's")
      queryObj.compare (PASPolicy#PolicyNumber, Relop.Equals, policyNumber)
      if (lossDate != null) {
        queryObj.compare("EffectiveFrom", new DBDateRange (null, lossDate, true))
        queryObj.compare("EffectiveTo", new DBDateRange (lossDate, null, true))
      }
      var resultsObj = queryObj.select().AtMostOneRow

      var xml = new externalapp.model.pashomeownerspolicymodel.PASPolicy(resultsObj)

      return xml.asUTFString()
    }
    return null

  }

//                                 =====================================
//                                 ====    PERSONAL AUTO - SEARCH   ====
//                                 =====================================

  function searchForPersonalAutoPolicies ( policyNumber : String , policyHolderName : String,
                                   lossDate : Date ) : PASPersonalAutoPolicySummary[] {

// searchForAutoPolicies ( PolicyNumber , PolicyType , PolicyHolderName , LossDate )
    _logger.info("PolicyAPI.searchForPersonalAutoPolicies: Received request for personal auto policy search. Criteria --> PolicyNumber: "
        + policyNumber + ", PolicyHolderName: " + policyHolderName + ", ,LossDate: " + lossDate)

    // parse search criteria
    var queryObj = Query.make(PASPolicy)
    queryObj.compare (PASPolicy#PolicyType, Relop.Equals, "Personal Auto")
    if (policyNumber != null) queryObj.compare (PASPolicy#PolicyNumber, Relop.Equals, policyNumber)
    if (policyHolderName != null) queryObj.compare (PASPolicy#PolicyHolder, Relop.Equals, policyHolderName)
    if (lossDate != null) {      
      queryObj.compare(PASPolicy#EffectiveFrom, new DBDateRange (null, lossDate, true))
      queryObj.compare(PASPolicy#EffectiveTo, new DBDateRange (lossDate, null, true))
    }

    var resultsObj = queryObj.withLogSQL(true).select()
    if (resultsObj.Count > 0) {
      // convert search results into serializable objects
      var searchResults = new PASPersonalAutoPolicySummary[resultsObj.Count]

      for (current in resultsObj index i) {

        var newSummary = new PASPersonalAutoPolicySummary()
        newSummary.policyNumber       = current.PolicyNumber
        newSummary.policyType         = current.PolicyType
        newSummary.effectiveStartDate = current.EffectiveFrom
        newSummary.effectiveEndDate   = current.EffectiveTo
        newSummary.primaryInsured     = current.PolicyHolder
        newSummary.streetLine1        = current.PrimaryAddress.StreetLine1
        newSummary.city               = current.PrimaryAddress.City
        newSummary.state              = current.PrimaryAddress.State
        newSummary.postalCode         = current.PrimaryAddress.PostalCode

        searchResults[i] = newSummary
      }

      return searchResults
    }
    return null

  }

//                                 =======================================
//                                 ====    PERSONAL AUTO - RETRIEVE   ====
//                                 =======================================

  function retrievePersonalAutoPolicy ( policyNumber : String, lossDate : java.util.Date ) : String {

    _logger.info("PolicyAPI.retrievePersonalAutoPolicy: Received request for personal auto policy retrieval. Policy number: " + policyNumber)
    
    // search for policy
    var queryObj = Query.make(PASPolicy)
    queryObj.compare (PASPolicy#PolicyType, Relop.Equals, "Personal Auto")
    queryObj.compare (PASPolicy#PolicyNumber, Relop.Equals, policyNumber)
    if (lossDate != null) {
      queryObj.compare("EffectiveFrom", new DBDateRange (null, lossDate, true))
      queryObj.compare("EffectiveTo", new DBDateRange (lossDate, null, true))
    }
    var resultsObj = queryObj.select().AtMostOneRow
    
    var xml = new externalapp.model.paspersonalautopolicymodel.PASPolicy(resultsObj)
   
    return xml.asUTFString()
  }

}
