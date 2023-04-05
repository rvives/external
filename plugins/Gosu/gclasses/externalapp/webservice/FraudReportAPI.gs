package externalapp.webservice

uses gw.api.server.AvailabilityLevel
uses gw.api.system.ABLoggerCategory
uses gw.xml.XmlElement
uses gw.xml.ws.annotation.WsiAvailability
uses gw.xml.ws.annotation.WsiWebService

/* This web service is used in the Sending Messages lesson. It's the
 * web service for the labs.
*/
@WsiWebService
@WsiAvailability(AvailabilityLevel.MAINTENANCE)
class FraudReportAPI {
  private static var _logger = ABLoggerCategory.AB

  function checkForFraudReport (payload : String ) : int {

    _logger.info("\n FraudReportAPI.checkForFraudReport():  Received request for fraud report. Payload: \n" + payload)

    var returnValue = 0
    var taxID = ""
    var taxCode = ""
    var contactName = ""
    var senderRefID = ""

    // Payload check
    var xml = XmlElement.parse(payload)
    taxID = xml.$Children.firstWhere(\el -> el.$QName.LocalPart == "TaxID").$Text
    contactName = xml.$Children.firstWhere(\el -> el.$QName.LocalPart == "Name").$Text
    senderRefID = xml.$Children.firstWhere(\el -> el.$QName.LocalPart == "SenderRefID").$Text

    // Possible return values and their meanings:
    //  1 - Request processed, no fraud report found
    //  2 - Request processed, fraud report found!
    //  4 - Request is improperly formatted XML
    //  5 - Request could not be processed (database unavailable)
    //  default - Request could not be processed (Code invalid)
    if ((taxID == null) or (contactName == null) or (senderRefID == null)) {
      returnValue = 4
    } else {
      taxCode = String.valueOf(taxID.charAt(0))
      switch (taxCode) {
        case "1":
          returnValue = 1
          break
        case "2":
          returnValue = 2
          break
        case "4":
          returnValue = 4
          break
        case "5":
          returnValue = 5
          break
        default:
          returnValue = 0
          break
      }
    }
    // end format checking

    _logger.info("\n FraudReportAPI.checkForFraudReport():  Fraud request processed. \n Returning value: " + returnValue)
    return returnValue
  }

}
