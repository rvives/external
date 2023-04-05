package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TabBarExpressions {
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactsTabMenuItemExpressionsImpl extends TabBarExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on Tab (id=ContactsTab) at ABContacts.pcf: line 15, column 21
    function action_0 () : void {
      pcf.ABContactSearch.go()
    }
    
    // 'location' attribute on Tab (id=ContactsTab) at ABContacts.pcf: line 19, column 21
    function action_2 () : void {
      pcf.MergeContacts.go()
    }
    
    // 'location' attribute on Tab (id=ContactsTab) at ABContacts.pcf: line 23, column 21
    function action_4 () : void {
      pcf.PendingChanges.go()
    }
    
    // 'location' attribute on Tab (id=ContactsTab) at ABContacts.pcf: line 27, column 21
    function action_7 () : void {
      pcf.LegalReportRequestPage.go()
    }
    
    // 'location' attribute on Tab (id=ContactsTab) at ABContacts.pcf: line 15, column 21
    function action_dest_1 () : pcf.api.Destination {
      return pcf.ABContactSearch.createDestination()
    }
    
    // 'location' attribute on Tab (id=ContactsTab) at ABContacts.pcf: line 19, column 21
    function action_dest_3 () : pcf.api.Destination {
      return pcf.MergeContacts.createDestination()
    }
    
    // 'location' attribute on Tab (id=ContactsTab) at ABContacts.pcf: line 23, column 21
    function action_dest_5 () : pcf.api.Destination {
      return pcf.PendingChanges.createDestination()
    }
    
    // 'location' attribute on Tab (id=ContactsTab) at ABContacts.pcf: line 27, column 21
    function action_dest_8 () : pcf.api.Destination {
      return pcf.LegalReportRequestPage.createDestination()
    }
    
    // 'label' attribute on Tab (id=ContactsTab) at ABContacts.pcf: line 23, column 21
    function label_6 () : java.lang.Object {
      return DisplayKey.get("Web.Contacts.PendingChanges", gw.api.desktop.DesktopCounts.getDesktopCounts().PendingContactChanges)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends TabBarExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=locales) at TabBar.pcf: line 59, column 29
    function action_22 () : void {
      gw.api.admin.BaseAdminUtil.setCurrentUsersLocale(locale)
    }
    
    // 'available' attribute on MenuItem (id=locales) at TabBar.pcf: line 59, column 29
    function available_21 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.getCurrentUserLocale() != locale
    }
    
    // 'checked' attribute on MenuItem (id=locales) at TabBar.pcf: line 59, column 29
    function checked_24 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.getCurrentLocaleType() == locale
    }
    
    // 'label' attribute on MenuItem (id=locales) at TabBar.pcf: line 59, column 29
    function label_23 () : java.lang.Object {
      return gw.api.util.LocaleUtil.getLocaleLabel(locale)
    }
    
    property get locale () : typekey.LocaleType {
      return getIteratedValue(1) as typekey.LocaleType
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TabBarExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=langs) at TabBar.pcf: line 41, column 29
    function action_16 () : void {
      gw.api.admin.BaseAdminUtil.setCurrentUsersLanguage(lang)
    }
    
    // 'available' attribute on MenuItem (id=langs) at TabBar.pcf: line 41, column 29
    function available_15 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.getCurrentUserLanguage() != lang
    }
    
    // 'checked' attribute on MenuItem (id=langs) at TabBar.pcf: line 41, column 29
    function checked_18 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.getCurrentLanguageType() == lang
    }
    
    // 'label' attribute on MenuItem (id=langs) at TabBar.pcf: line 41, column 29
    function label_17 () : java.lang.Object {
      return gw.api.util.LocaleUtil.getLanguageLabel(lang)
    }
    
    property get lang () : typekey.LanguageType {
      return getIteratedValue(1) as typekey.LanguageType
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TabBarExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Tab (id=ContactsTab) at TabBar.pcf: line 13, column 44
    function action_10 () : void {
      ABContacts.go()
    }
    
    // 'action' attribute on Tab (id=AdminTab) at TabBar.pcf: line 19, column 33
    function action_13 () : void {
      AdminForward.go()
    }
    
    // 'action' attribute on TabBarLink (id=HelpTabBarLink) at TabBar.pcf: line 67, column 24
    function action_28 () : void {
      Help.push()
    }
    
    // 'action' attribute on TabBarLink (id=PrefsTabBarLink) at TabBar.pcf: line 75, column 61
    function action_30 () : void {
      UserPreferencesWorksheet.goInWorkspace()
    }
    
    // 'action' attribute on HiddenLink (id=ProfilerHiddenLink) at TabBar.pcf: line 93, column 26
    function action_34 () : void {
      ProfilerPopup.push()
    }
    
    // 'action' attribute on HiddenLink (id=InternalToolsHiddenLink) at TabBar.pcf: line 97, column 26
    function action_36 () : void {
      InternalTools.go()
    }
    
    // 'action' attribute on Tab (id=ContactsTab) at TabBar.pcf: line 13, column 44
    function action_dest_11 () : pcf.api.Destination {
      return pcf.ABContacts.createDestination()
    }
    
    // 'action' attribute on Tab (id=AdminTab) at TabBar.pcf: line 19, column 33
    function action_dest_14 () : pcf.api.Destination {
      return pcf.AdminForward.createDestination()
    }
    
    // 'action' attribute on TabBarLink (id=HelpTabBarLink) at TabBar.pcf: line 67, column 24
    function action_dest_29 () : pcf.api.Destination {
      return pcf.Help.createDestination()
    }
    
    // 'action' attribute on TabBarLink (id=PrefsTabBarLink) at TabBar.pcf: line 75, column 61
    function action_dest_31 () : pcf.api.Destination {
      return pcf.UserPreferencesWorksheet.createDestination()
    }
    
    // 'action' attribute on HiddenLink (id=ProfilerHiddenLink) at TabBar.pcf: line 93, column 26
    function action_dest_35 () : pcf.api.Destination {
      return pcf.ProfilerPopup.createDestination()
    }
    
    // 'action' attribute on HiddenLink (id=InternalToolsHiddenLink) at TabBar.pcf: line 97, column 26
    function action_dest_37 () : pcf.api.Destination {
      return pcf.InternalTools.createDestination()
    }
    
    // 'label' attribute on TabBarLogout (id=LogoutTabBarLink) at TabBar.pcf: line 89, column 21
    function label_33 () : java.lang.Object {
      return DisplayKey.get("Web.TabBar.Logout", entity.User.util.CurrentUser)
    }
    
    // 'systemAlertBar' attribute on TabBar (id=TabBar) at TabBar.pcf: line 7, column 39
    function systemAlertBar_onEnter_38 (def :  pcf.SystemAlertBar) : void {
      def.onEnter()
    }
    
    // 'systemAlertBar' attribute on TabBar (id=TabBar) at TabBar.pcf: line 7, column 39
    function systemAlertBar_refreshVariables_39 (def :  pcf.SystemAlertBar) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on MenuItemIterator at TabBar.pcf: line 33, column 46
    function value_19 () : typekey.LanguageType[] {
      return gw.api.util.LocaleUtil.getAllLanguages()?.toTypedArray()
    }
    
    // 'value' attribute on MenuItemIterator at TabBar.pcf: line 51, column 44
    function value_25 () : typekey.LocaleType[] {
      return gw.api.util.LocaleUtil.getAllLocales()?.toTypedArray()
    }
    
    // 'visible' attribute on Tab (id=AdminTab) at TabBar.pcf: line 19, column 33
    function visible_12 () : java.lang.Boolean {
      return perm.User.view
    }
    
    // 'visible' attribute on MenuItem (id=languageSwitcher) at TabBar.pcf: line 29, column 62
    function visible_20 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.canSwitchLanguage()
    }
    
    // 'visible' attribute on MenuItem (id=localeSwitcher) at TabBar.pcf: line 47, column 60
    function visible_26 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.canSwitchLocale()
    }
    
    // 'visible' attribute on TabBarLink (id=LanguageTabBarLink) at TabBar.pcf: line 25, column 104
    function visible_27 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.canSwitchLanguage() || gw.api.util.LocaleUtil.canSwitchLocale()
    }
    
    // 'visible' attribute on TabBarLink (id=ReloadPCFTabBarLink) at TabBar.pcf: line 84, column 57
    function visible_32 () : java.lang.Boolean {
      return gw.api.tools.InternalTools.isEnabled()
    }
    
    // 'visible' attribute on Tab (id=ContactsTab) at TabBar.pcf: line 13, column 44
    function visible_9 () : java.lang.Boolean {
      return perm.ABContact.viewsearch
    }
    
    
  }
  
  
}