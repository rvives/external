package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/LegalReportRequestPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LegalReportRequestPageExpressions {
  @javax.annotation.Generated("config/web/pcf/training/LegalReportRequestPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends LegalReportRequestPageExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=MessageID_Cell) at LegalReportRequestPage.pcf: line 20, column 49
    function valueRoot_5 () : java.lang.Object {
      return currentRequest
    }
    
    // 'value' attribute on TextCell (id=ContactInfo_Cell) at LegalReportRequestPage.pcf: line 28, column 51
    function value_10 () : java.lang.String {
      return currentRequest.ContactInfo
    }
    
    // 'value' attribute on BooleanRadioCell (id=Processed_Cell) at LegalReportRequestPage.pcf: line 33, column 49
    function value_13 () : java.lang.Boolean {
      return currentRequest.Processed
    }
    
    // 'value' attribute on TextCell (id=MessageID_Cell) at LegalReportRequestPage.pcf: line 20, column 49
    function value_4 () : java.lang.String {
      return currentRequest.MessageID
    }
    
    // 'value' attribute on TextCell (id=ContactID_Cell) at LegalReportRequestPage.pcf: line 24, column 49
    function value_7 () : java.lang.String {
      return currentRequest.ContactID
    }
    
    property get currentRequest () : LegalReportRequest {
      return getIteratedValue(1) as LegalReportRequest
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/training/LegalReportRequestPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LegalReportRequestPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // Page (id=LegalReportRequestPage) at LegalReportRequestPage.pcf: line 7, column 47
    static function parent_17 () : pcf.api.Destination {
      return pcf.ABContacts.createDestination()
    }
    
    // 'value' attribute on TextCell (id=MessageID_Cell) at LegalReportRequestPage.pcf: line 20, column 49
    function sortValue_0 (currentRequest :  LegalReportRequest) : java.lang.Object {
      return currentRequest.MessageID
    }
    
    // 'value' attribute on TextCell (id=ContactID_Cell) at LegalReportRequestPage.pcf: line 24, column 49
    function sortValue_1 (currentRequest :  LegalReportRequest) : java.lang.Object {
      return currentRequest.ContactID
    }
    
    // 'value' attribute on TextCell (id=ContactInfo_Cell) at LegalReportRequestPage.pcf: line 28, column 51
    function sortValue_2 (currentRequest :  LegalReportRequest) : java.lang.Object {
      return currentRequest.ContactInfo
    }
    
    // 'value' attribute on BooleanRadioCell (id=Processed_Cell) at LegalReportRequestPage.pcf: line 33, column 49
    function sortValue_3 (currentRequest :  LegalReportRequest) : java.lang.Object {
      return currentRequest.Processed
    }
    
    // 'value' attribute on RowIterator at LegalReportRequestPage.pcf: line 15, column 82
    function value_16 () : gw.api.database.IQueryBeanResult<LegalReportRequest> {
      return allLegalReportRequests()
    }
    
    override property get CurrentLocation () : pcf.LegalReportRequestPage {
      return super.CurrentLocation as pcf.LegalReportRequestPage
    }
    
    function allLegalReportRequests() : gw.api.database.IQueryBeanResult<entity.LegalReportRequest> {
      var queryObj = gw.api.database.Query.make(LegalReportRequest)
      return queryObj.select()
    }
    
    function whenProcessed (aRequest : LegalReportRequest) : String {
      if (aRequest.Processed) {
        return aRequest.UpdateTime.toString()
      } else {
        return "n/a"
      }
      
    }
    
    
  }
  
  
}