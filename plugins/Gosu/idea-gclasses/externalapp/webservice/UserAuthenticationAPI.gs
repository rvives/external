package externalapp.webservice

uses gw.api.database.Query
uses gw.api.database.Relop
uses gw.api.server.AvailabilityLevel
uses gw.api.system.ABLoggerCategory
uses gw.xml.ws.annotation.WsiAvailability
uses gw.xml.ws.annotation.WsiWebService

/* This web service is used in the Integration
 * "Authentication" lab.
 */
@WsiWebService
@WsiAvailability(AvailabilityLevel.MAINTENANCE)
class UserAuthenticationAPI {
  private static var _logger = ABLoggerCategory.INTEGRATION

  function authenticate ( userName : String, password : String ) : boolean {
    _logger.info("UserAuthenticationAPI.authenticate: Received request for authentication of " + userName + ", " + password)

    // Does the user exist in the ExampleApp database?
    var queryObj = Query.make(Credential)
    queryObj.compare (Credential#UserName, Relop.Equals, userName)
    var resultsObj = queryObj.select()
    if (resultsObj.Count != 1) {
      _logger.info("UserAuthenticationAPI: There is no known user by that name. Authentication fails.")
      return false
      
    } else {   
       
      // Return true if the provided password is "guidewire"
      if (password != "guidewire") {
        _logger.info("UserAuthenticationAPI: Password does not match user name.")
      } else {
        _logger.info("UserAuthenticationAPI: Authentication succeeds!")
      }
      return (password == "guidewire")
    }
  } // end authenticate

}
