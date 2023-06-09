package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/document/DocumentDetailsEditDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DocumentDetailsEditDVExpressions {
  @javax.annotation.Generated("config/web/pcf/document/DocumentDetailsEditDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DocumentDetailsEditDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at DocumentDetailsEditDV.pcf: line 12, column 78
    function def_onEnter_0 (def :  pcf.DocumentDetailsEditInputSet) : void {
      def.onEnter(documentDetailsApplicationHelper)
    }
    
    // 'def' attribute on InputSetRef at DocumentDetailsEditDV.pcf: line 12, column 78
    function def_refreshVariables_1 (def :  pcf.DocumentDetailsEditInputSet) : void {
      def.refreshVariables(documentDetailsApplicationHelper)
    }
    
    property get documentDetailsApplicationHelper () : gw.document.DocumentDetailsApplicationHelper {
      return getRequireValue("documentDetailsApplicationHelper", 0) as gw.document.DocumentDetailsApplicationHelper
    }
    
    property set documentDetailsApplicationHelper ($arg :  gw.document.DocumentDetailsApplicationHelper) {
      setRequireValue("documentDetailsApplicationHelper", 0, $arg)
    }
    
    
  }
  
  
}