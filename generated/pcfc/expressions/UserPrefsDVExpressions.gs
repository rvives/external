package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/user/UserPrefsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserPrefsDVExpressions {
  @javax.annotation.Generated("config/web/pcf/user/UserPrefsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserPrefsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at UserPrefsDV.pcf: line 23, column 46
    function def_onEnter_13 (def :  pcf.UserPreferencesInputSet) : void {
      def.onEnter(User)
    }
    
    // 'def' attribute on InputSetRef at UserPrefsDV.pcf: line 23, column 46
    function def_refreshVariables_14 (def :  pcf.UserPreferencesInputSet) : void {
      def.refreshVariables(User)
    }
    
    // 'value' attribute on ConfirmPasswordInput (id=Password_Input) at UserPrefsDV.pcf: line 21, column 43
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      User.Credential.Password = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on ConfirmPasswordInput (id=Password_Input) at UserPrefsDV.pcf: line 21, column 43
    function valueRoot_2 () : java.lang.Object {
      return User.Credential
    }
    
    // 'value' attribute on ConfirmPasswordInput (id=Password_Input) at UserPrefsDV.pcf: line 21, column 43
    function value_0 () : java.lang.String {
      return User.Credential.Password
    }
    
    // 'value' attribute on ConfirmPasswordInput (id=Password_Input) at UserPrefsDV.pcf: line 21, column 43
    function value_3 () : java.lang.Object {
      return User.Credential.Password
    }
    
    property get User () : User {
      return getRequireValue("User", 0) as User
    }
    
    property set User ($arg :  User) {
      setRequireValue("User", 0, $arg)
    }
    
    property get UserSettings () : UserSettings {
      return getRequireValue("UserSettings", 0) as UserSettings
    }
    
    property set UserSettings ($arg :  UserSettings) {
      setRequireValue("UserSettings", 0, $arg)
    }
    
    
  }
  
  
}