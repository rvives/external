package externalapp.webservice

uses gw.api.server.AvailabilityLevel
uses gw.api.util.StringUtil
uses gw.xml.ws.annotation.WsiAvailability
uses gw.xml.ws.annotation.WsiWebService

@WsiWebService
@WsiAvailability(AvailabilityLevel.MAINTENANCE)
class BankVerificationAPI {

  function verifyAccount(senderRefID : String, payload : String, accNum : String) : String {
    var ackCode = StringUtil.substring(accNum, 0, 3)
    print(" *** Bank Account Verification" +
          "\n   Acknowledgment code: " + ackCode )
    return ackCode
  }
}