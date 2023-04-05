package externalapp.pas
uses gw.xml.ws.annotation.WsiExportable

@Export
@WsiExportable
final class PASHomeownersPolicySummary {

  var _policyNumber: String as policyNumber
  var _policyType: String as policyType
  var _effectiveFrom: Date as effectiveFrom
  var _effectiveTo: Date as effectiveTo
  var _insuredName: String as insuredName
  var _streetLine1: String as streetLine1
  var _city: String as city
  var _state: String as state
  var _postalCode: String as postalCode

}
