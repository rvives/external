package externalapp.pas
uses gw.xml.ws.annotation.WsiExportable

@Export
@WsiExportable

final class PASPersonalAutoPolicySummary {

  var _policyNumber: String as policyNumber
  var _policyType: String as policyType
  var _effectiveStartDate: Date as effectiveStartDate
  var _effectiveEndDate: Date as effectiveEndDate
  var _primaryInsured: String as primaryInsured
  var _streetLine1: String as streetLine1
  var _city: String as city
  var _state: String as state
  var _postalCode: String as postalCode

}
