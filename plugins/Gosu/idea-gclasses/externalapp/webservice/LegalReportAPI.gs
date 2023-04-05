package externalapp.webservice

uses gw.api.server.AvailabilityLevel
uses gw.api.system.ABLoggerCategory
uses gw.transaction.Transaction
uses gw.xml.ws.annotation.WsiAvailability
uses gw.xml.ws.annotation.WsiWebService

/* This web service is used in the Messaging lessons. It's the
 * example of transport via web service.
*/
@WsiWebService
@WsiAvailability(AvailabilityLevel.MAINTENANCE)
class LegalReportAPI {
  private static var _logger = ABLoggerCategory.AB

  function submitReportRequest( payload : String ) : void {
    _logger.info("LegalReportAPI.submitReportRequest: Received request for legal report with payload: \n " + payload)

    Transaction.runWithNewBundle( \ bundle -> {
      var aReportRequest = new LegalReportRequest()
      aReportRequest.ContactID = payload.split(",")[0]
      aReportRequest.ContactInfo = payload.split(",")[1]
      aReportRequest.MessageID = payload.split(",")[2]
      aReportRequest.Processed = false
    })

    _logger.info("LegalReportAPI.submitReportRequest: Report request submitted (an instance of LegalReportRequest created).")
  }

}
