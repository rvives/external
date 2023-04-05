package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/ABContactDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABContactDetailScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/ABContactDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABContactDetailScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=showInactiveServiceButton) at ABContactDetailScreen.pcf: line 334, column 74
    function action_104 () : void {
      showInactiveService = !showInactiveService
    }
    
    // 'action' attribute on ToolbarButton (id=EditVendorServices) at ABContactDetailScreen.pcf: line 339, column 45
    function action_107 () : void {
      SelectServicesPopup.push(contact)
    }
    
    // 'action' attribute on ToolbarButton (id=ABContactDetailScreen_DeleteButton) at ABContactDetailScreen.pcf: line 81, column 80
    function action_13 () : void {
      gw.api.web.contact.ABContactUtil.deleteContact(contact, CurrentLocation)
    }
    
    // 'action' attribute on MenuItem (id=IndicateExistence) at ABContactDetailScreen.pcf: line 159, column 112
    function action_38 () : void {
      IndicateExistenceDocumentWorksheet.goInWorkspace(contact)
    }
    
    // 'action' attribute on MenuItem (id=AttachDocument) at ABContactDetailScreen.pcf: line 166, column 72
    function action_42 () : void {
      AttachDocumentWorksheet.goInWorkspace(contact)
    }
    
    // 'action' attribute on ToolbarButton (id=RefreshAsyncContent) at ABContactDetailScreen.pcf: line 184, column 100
    function action_50 () : void {
      
    }
    
    // 'action' attribute on ToolbarButton (id=EditVendorServices) at ABContactDetailScreen.pcf: line 339, column 45
    function action_dest_108 () : pcf.api.Destination {
      return pcf.SelectServicesPopup.createDestination(contact)
    }
    
    // 'action' attribute on MenuItem (id=IndicateExistence) at ABContactDetailScreen.pcf: line 159, column 112
    function action_dest_39 () : pcf.api.Destination {
      return pcf.IndicateExistenceDocumentWorksheet.createDestination(contact)
    }
    
    // 'action' attribute on MenuItem (id=AttachDocument) at ABContactDetailScreen.pcf: line 166, column 72
    function action_dest_43 () : pcf.api.Destination {
      return pcf.AttachDocumentWorksheet.createDestination(contact)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=RemoveDocuments) at ABContactDetailScreen.pcf: line 177, column 64
    function allCheckedRowsAction_47 (CheckedValues :  entity.Document[], CheckedValuesErrors :  java.util.Map) : void {
      contact.unlinkDocumentsForUI(CheckedValues)
    }
    
    // 'available' attribute on MenuItem (id=IndicateExistence) at ABContactDetailScreen.pcf: line 159, column 112
    function available_37 () : java.lang.Boolean {
      return metadataActionsEnabled
    }
    
    // 'available' attribute on MenuItem (id=AttachDocument) at ABContactDetailScreen.pcf: line 166, column 72
    function available_40 () : java.lang.Boolean {
      return contentActionsAvailable and metadataActionsEnabled
    }
    
    // 'available' attribute on ToolbarButton (id=RefreshAsyncContent) at ABContactDetailScreen.pcf: line 184, column 100
    function available_48 () : java.lang.Boolean {
      return contentActionsAvailable
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 328, column 28
    function def_onEnter_109 (def :  pcf.VendorServicesLV) : void {
      def.onEnter(contact, contactDetailsVendorHelper, showInactiveService)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 347, column 44
    function def_onEnter_117 (def :  pcf.RelatedContactsLV) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 366, column 48
    function def_onEnter_119 (def :  pcf.ReviewSummaryPanelSet) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 374, column 43
    function def_onEnter_123 (def :  pcf.ContactHistoryLV) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 64, column 34
    function def_onEnter_15 (def :  pcf.ContactBasicsDV_ABCompany) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 64, column 34
    function def_onEnter_17 (def :  pcf.ContactBasicsDV_ABPerson) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 64, column 34
    function def_onEnter_19 (def :  pcf.ContactBasicsDV_ABPlace) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 64, column 34
    function def_onEnter_21 (def :  pcf.ContactBasicsDV_default) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 328, column 28
    function def_refreshVariables_110 (def :  pcf.VendorServicesLV) : void {
      def.refreshVariables(contact, contactDetailsVendorHelper, showInactiveService)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 347, column 44
    function def_refreshVariables_118 (def :  pcf.RelatedContactsLV) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 366, column 48
    function def_refreshVariables_120 (def :  pcf.ReviewSummaryPanelSet) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 374, column 43
    function def_refreshVariables_124 (def :  pcf.ContactHistoryLV) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 64, column 34
    function def_refreshVariables_16 (def :  pcf.ContactBasicsDV_ABCompany) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 64, column 34
    function def_refreshVariables_18 (def :  pcf.ContactBasicsDV_ABPerson) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 64, column 34
    function def_refreshVariables_20 (def :  pcf.ContactBasicsDV_ABPlace) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 64, column 34
    function def_refreshVariables_22 (def :  pcf.ContactBasicsDV_default) : void {
      def.refreshVariables(contact)
    }
    
    // 'initialValue' attribute on Variable at ABContactDetailScreen.pcf: line 22, column 49
    function initialValue_0 () : gw.web.ContactDetailsVendorHelper {
      return new gw.web.ContactDetailsVendorHelper(contact)
    }
    
    // 'initialValue' attribute on Variable at ABContactDetailScreen.pcf: line 26, column 52
    function initialValue_1 () : gw.web.ContactDocumentsActionsHelper {
      return new gw.web.ContactDocumentsActionsHelper(contact)
    }
    
    // 'initialValue' attribute on Variable at ABContactDetailScreen.pcf: line 34, column 23
    function initialValue_2 () : boolean {
      return contactDocumentsHelper.DocumentContentServerAvailable
    }
    
    // 'initialValue' attribute on Variable at ABContactDetailScreen.pcf: line 39, column 23
    function initialValue_3 () : boolean {
      return contactDocumentsHelper.isDocumentContentActionsAvailable()
    }
    
    // 'initialValue' attribute on Variable at ABContactDetailScreen.pcf: line 44, column 23
    function initialValue_4 () : boolean {
      return contactDocumentsHelper.isDocumentMetadataActionsAvailable()
    }
    
    // EditButtons at ABContactDetailScreen.pcf: line 71, column 114
    function label_10 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'label' attribute on ToolbarButton (id=showInactiveServiceButton) at ABContactDetailScreen.pcf: line 334, column 74
    function label_105 () : java.lang.Object {
      return showInactiveService ? DisplayKey.get("Web.ContactDetail.Services.HideInactive") : DisplayKey.get("Web.ContactDetail.Services.ShowInactive")
    }
    
    // 'mode' attribute on PanelRef at ABContactDetailScreen.pcf: line 64, column 34
    function mode_23 () : java.lang.Object {
      return contact.Subtype
    }
    
    // 'pickValue' attribute on EditButtons at ABContactDetailScreen.pcf: line 71, column 114
    function pickValue_8 () : ABContact {
      return canPick ? contact : null
    }
    
    // 'selectOnEnter' attribute on Card (id=DocumentsCard) at ABContactDetailScreen.pcf: line 125, column 69
    function selectOnEnter_101 () : java.lang.Boolean {
      return selectDocumentsCardByDefault
    }
    
    // 'visible' attribute on Card (id=DocumentsCard) at ABContactDetailScreen.pcf: line 125, column 69
    function visible_100 () : java.lang.Boolean {
      return contactDocumentsHelper.ShowDocumentsTabForContact
    }
    
    // 'visible' attribute on Verbatim (id=ServicesActionsDissabledMessage) at ABContactDetailScreen.pcf: line 324, column 112
    function visible_102 () : java.lang.Boolean {
      return contactDetailsVendorHelper.isShowServicesUnavailableWarning(CurrentLocation.InEditMode)
    }
    
    // 'visible' attribute on ToolbarButton (id=showInactiveServiceButton) at ABContactDetailScreen.pcf: line 334, column 74
    function visible_103 () : java.lang.Boolean {
      return contactDetailsVendorHelper.hasInactiveService()
    }
    
    // 'visible' attribute on ToolbarButton (id=EditVendorServices) at ABContactDetailScreen.pcf: line 339, column 45
    function visible_106 () : java.lang.Boolean {
      return contact.isVendor()
    }
    
    // 'visible' attribute on Card (id=VendorServicesCard) at ABContactDetailScreen.pcf: line 318, column 74
    function visible_111 () : java.lang.Boolean {
      return contactDetailsVendorHelper.VendorServicesCardIsVisible
    }
    
    // 'visible' attribute on ToolbarButton (id=ABContactDetailScreen_DeleteButton) at ABContactDetailScreen.pcf: line 81, column 80
    function visible_12 () : java.lang.Boolean {
      return perm.ABContact.delete(contact) && !isReadOnly
    }
    
    // 'visible' attribute on Card (id=ReviewSummariesCard) at ABContactDetailScreen.pcf: line 364, column 111
    function visible_121 () : java.lang.Boolean {
      return perm.ReviewSummary.list && gw.api.contact.ABReviewUtil.haveReviewSummaries(contact)
    }
    
    // 'visible' attribute on Toolbar (id=ContactBasicsDV_tb) at ABContactDetailScreen.pcf: line 66, column 44
    function visible_14 () : java.lang.Boolean {
      return !contact.isRetired()
    }
    
    // 'visible' attribute on Card (id=AddressesCard) at ABContactDetailScreen.pcf: line 88, column 45
    function visible_33 () : java.lang.Boolean {
      return !(contact typeis ABPlace)
    }
    
    // 'visible' attribute on Verbatim (id=ContentSourceDisabledWarning) at ABContactDetailScreen.pcf: line 131, column 72
    function visible_34 () : java.lang.Boolean {
      return not contactDocumentsHelper.ContentSourceEnabled
    }
    
    // 'visible' attribute on Verbatim (id=ContentSourceUnavailableWarning) at ABContactDetailScreen.pcf: line 137, column 100
    function visible_35 () : java.lang.Boolean {
      return contactDocumentsHelper.ContentSourceEnabled and not contentActionsEnabled
    }
    
    // 'visible' attribute on Verbatim (id=MetadataSourceUnavailableWarning) at ABContactDetailScreen.pcf: line 145, column 132
    function visible_36 () : java.lang.Boolean {
      return contactDocumentsHelper.MetadataSourceEnabled and not contactDocumentsHelper.DocumentMetadataServerAvailable
    }
    
    // 'visible' attribute on MenuItem (id=AttachDocument) at ABContactDetailScreen.pcf: line 166, column 72
    function visible_41 () : java.lang.Boolean {
      return contactDocumentsHelper.ContentSourceEnabled
    }
    
    // 'visible' attribute on ToolbarButton (id=AddDocuments) at ABContactDetailScreen.pcf: line 153, column 62
    function visible_44 () : java.lang.Boolean {
      return perm.Document.create and !isReadOnly
    }
    
    // 'visible' attribute on CheckedValuesToolbarButton (id=RemoveDocuments) at ABContactDetailScreen.pcf: line 177, column 64
    function visible_46 () : java.lang.Boolean {
      return perm.System.docdelete and !isReadOnly
    }
    
    // 'visible' attribute on ToolbarButton (id=RefreshAsyncContent) at ABContactDetailScreen.pcf: line 184, column 100
    function visible_49 () : java.lang.Boolean {
      return contactDocumentsHelper.isShowAsynchronousRefreshAction(contact.Documents)
    }
    
    // 'visible' attribute on AlertBar (id=ContactDeletedAlert) at ABContactDetailScreen.pcf: line 49, column 38
    function visible_5 () : java.lang.Boolean {
      return contact.isRetired()
    }
    
    // 'visible' attribute on AlertBar (id=LossOfServicesWarning) at ABContactDetailScreen.pcf: line 53, column 71
    function visible_6 () : java.lang.Boolean {
      return contactDetailsVendorHelper.ShowLossOfServicesWarning
    }
    
    // 'visible' attribute on AlertBar (id=LossOfDocumentsWarning) at ABContactDetailScreen.pcf: line 57, column 98
    function visible_7 () : java.lang.Boolean {
      return contactDocumentsHelper.isShowLossOfDocumentsWarning(CurrentLocation.InEditMode)
    }
    
    // 'editVisible' attribute on EditButtons at ABContactDetailScreen.pcf: line 71, column 114
    function visible_9 () : java.lang.Boolean {
      return !isReadOnly
    }
    
    property get canPick () : Boolean {
      return getRequireValue("canPick", 0) as Boolean
    }
    
    property set canPick ($arg :  Boolean) {
      setRequireValue("canPick", 0, $arg)
    }
    
    property get contact () : ABContact {
      return getRequireValue("contact", 0) as ABContact
    }
    
    property set contact ($arg :  ABContact) {
      setRequireValue("contact", 0, $arg)
    }
    
    property get contactDetailsVendorHelper () : gw.web.ContactDetailsVendorHelper {
      return getVariableValue("contactDetailsVendorHelper", 0) as gw.web.ContactDetailsVendorHelper
    }
    
    property set contactDetailsVendorHelper ($arg :  gw.web.ContactDetailsVendorHelper) {
      setVariableValue("contactDetailsVendorHelper", 0, $arg)
    }
    
    property get contactDocumentsHelper () : gw.web.ContactDocumentsActionsHelper {
      return getVariableValue("contactDocumentsHelper", 0) as gw.web.ContactDocumentsActionsHelper
    }
    
    property set contactDocumentsHelper ($arg :  gw.web.ContactDocumentsActionsHelper) {
      setVariableValue("contactDocumentsHelper", 0, $arg)
    }
    
    property get contentActionsAvailable () : boolean {
      return getVariableValue("contentActionsAvailable", 0) as java.lang.Boolean
    }
    
    property set contentActionsAvailable ($arg :  boolean) {
      setVariableValue("contentActionsAvailable", 0, $arg)
    }
    
    property get contentActionsEnabled () : boolean {
      return getVariableValue("contentActionsEnabled", 0) as java.lang.Boolean
    }
    
    property set contentActionsEnabled ($arg :  boolean) {
      setVariableValue("contentActionsEnabled", 0, $arg)
    }
    
    property get isReadOnly () : boolean {
      return getRequireValue("isReadOnly", 0) as java.lang.Boolean
    }
    
    property set isReadOnly ($arg :  boolean) {
      setRequireValue("isReadOnly", 0, $arg)
    }
    
    property get metadataActionsEnabled () : boolean {
      return getVariableValue("metadataActionsEnabled", 0) as java.lang.Boolean
    }
    
    property set metadataActionsEnabled ($arg :  boolean) {
      setVariableValue("metadataActionsEnabled", 0, $arg)
    }
    
    property get selectDocumentsCardByDefault () : boolean {
      return getRequireValue("selectDocumentsCardByDefault", 0) as java.lang.Boolean
    }
    
    property set selectDocumentsCardByDefault ($arg :  boolean) {
      setRequireValue("selectDocumentsCardByDefault", 0, $arg)
    }
    
    property get showInactiveService () : boolean {
      return getVariableValue("showInactiveService", 0) as java.lang.Boolean
    }
    
    property set showInactiveService ($arg :  boolean) {
      setVariableValue("showInactiveService", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contacts/ABContactDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactDocumentsLVExpressionsImpl extends ABContactDetailScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at ABContactDetailScreen.pcf: line 204, column 78
    function filters_52 () : gw.api.filters.IFilter[] {
      return filterSet.ContactDocumentsFilters.FilterOptions
    }
    
    // 'initialValue' attribute on Variable at ABContactDetailScreen.pcf: line 191, column 64
    function initialValue_51 () : gw.ab.document.ContactDocumentsFilterSet {
      return new gw.ab.document.ContactDocumentsFilterSet()
    }
    
    // 'sortBy' attribute on LinkCell (id=Name) at ABContactDetailScreen.pcf: line 221, column 33
    function sortValue_53 (document :  entity.Document) : java.lang.Object {
      return document.Name
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at ABContactDetailScreen.pcf: line 278, column 53
    function sortValue_54 (document :  entity.Document) : java.lang.Object {
      return document.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ABContactDetailScreen.pcf: line 283, column 59
    function sortValue_55 (document :  entity.Document) : java.lang.Object {
      return document.Status
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at ABContactDetailScreen.pcf: line 288, column 44
    function sortValue_56 (document :  entity.Document) : java.lang.Object {
      return document.Author
    }
    
    // 'value' attribute on DateCell (id=DateModified_Cell) at ABContactDetailScreen.pcf: line 296, column 50
    function sortValue_57 (document :  entity.Document) : java.lang.Object {
      return document.DateModified
    }
    
    // 'sortBy' attribute on LinkCell (id=HiddenDocument) at ABContactDetailScreen.pcf: line 303, column 90
    function sortValue_58 (document :  entity.Document) : java.lang.Object {
      return document.Obsolete
    }
    
    // 'value' attribute on RowIterator (id=DocumentsLinkIterator) at ABContactDetailScreen.pcf: line 199, column 45
    function value_99 () : entity.Document[] {
      return contact.Documents
    }
    
    // 'visible' attribute on LinkCell (id=HiddenDocument) at ABContactDetailScreen.pcf: line 303, column 90
    function visible_59 () : java.lang.Boolean {
      return contact.Documents.hasMatch(\ doc -> doc.Obsolete == true)
    }
    
    property get filterSet () : gw.ab.document.ContactDocumentsFilterSet {
      return getVariableValue("filterSet", 1) as gw.ab.document.ContactDocumentsFilterSet
    }
    
    property set filterSet ($arg :  gw.ab.document.ContactDocumentsFilterSet) {
      setVariableValue("filterSet", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contacts/ABContactDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ContactDocumentsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=NameLink) at ABContactDetailScreen.pcf: line 228, column 92
    function action_63 () : void {
      document.downloadContent()
    }
    
    // 'action' attribute on Link (id=ViewPropertiesLink) at ABContactDetailScreen.pcf: line 240, column 111
    function action_67 () : void {
      DocumentPropertiesPopup.push(document, contact)
    }
    
    // 'action' attribute on Link (id=DownloadLink) at ABContactDetailScreen.pcf: line 249, column 98
    function action_71 () : void {
      document.downloadContent()
    }
    
    // 'action' attribute on Link (id=UploadLink) at ABContactDetailScreen.pcf: line 257, column 112
    function action_75 () : void {
      UploadDocumentContentPopup.push(document)
    }
    
    // 'action' attribute on Link (id=ContactDocumentsLV_DeleteLink) at ABContactDetailScreen.pcf: line 266, column 109
    function action_80 () : void {
      contact.unlinkDocumentForUI(document)
    }
    
    // 'action' attribute on Link (id=ViewPropertiesLink) at ABContactDetailScreen.pcf: line 240, column 111
    function action_dest_68 () : pcf.api.Destination {
      return pcf.DocumentPropertiesPopup.createDestination(document, contact)
    }
    
    // 'action' attribute on Link (id=UploadLink) at ABContactDetailScreen.pcf: line 257, column 112
    function action_dest_76 () : pcf.api.Destination {
      return pcf.UploadDocumentContentPopup.createDestination(document)
    }
    
    // 'available' attribute on Link (id=NameLink) at ABContactDetailScreen.pcf: line 228, column 92
    function available_62 () : java.lang.Boolean {
      return contactDocumentsHelper.isViewDocumentContentAvailable(document, contentActionsAvailable)
    }
    
    // 'available' attribute on Link (id=ViewPropertiesLink) at ABContactDetailScreen.pcf: line 240, column 111
    function available_66 () : java.lang.Boolean {
      return metadataActionsEnabled
    }
    
    // 'available' attribute on Link (id=DownloadLink) at ABContactDetailScreen.pcf: line 249, column 98
    function available_69 () : java.lang.Boolean {
      return contactDocumentsHelper.isDownloadDocumentContentAvailable(document, contentActionsAvailable)
    }
    
    // 'available' attribute on Link (id=UploadLink) at ABContactDetailScreen.pcf: line 257, column 112
    function available_73 () : java.lang.Boolean {
      return contactDocumentsHelper.isUploadDocumentContentAvailable(document, metadataActionsEnabled, contentActionsAvailable)
    }
    
    // 'available' attribute on Link (id=ContactDocumentsLV_DeleteLink) at ABContactDetailScreen.pcf: line 266, column 109
    function available_78 () : java.lang.Boolean {
      return contactDocumentsHelper.isRemoveDocumentLinkAvailable(document, metadataActionsEnabled)
    }
    
    // 'condition' attribute on ToolbarFlag at ABContactDetailScreen.pcf: line 208, column 43
    function condition_60 () : java.lang.Boolean {
      return perm.Document.delete(document) and document.Status != DocumentStatusType.TC_FINAL and document.PendingDocUID == null 
    }
    
    // 'icon' attribute on BooleanRadioCell (id=Icon_Cell) at ABContactDetailScreen.pcf: line 216, column 40
    function icon_61 () : java.lang.String {
      return document.Icon
    }
    
    // 'icon' attribute on Link (id=ContactDocumentsLV_DeleteLink) at ABContactDetailScreen.pcf: line 266, column 109
    function icon_82 () : java.lang.String {
      return "document_remove" 
    }
    
    // 'label' attribute on Link (id=NameLink) at ABContactDetailScreen.pcf: line 228, column 92
    function label_64 () : java.lang.Object {
      return document.Name
    }
    
    // 'label' attribute on Link (id=ContactDocumentsLV_ActionsDisabled) at ABContactDetailScreen.pcf: line 271, column 80
    function label_84 () : java.lang.Object {
      return contactDocumentsHelper.AsynchronousActionsMessage
    }
    
    // 'tooltip' attribute on Link (id=NameLink) at ABContactDetailScreen.pcf: line 228, column 92
    function tooltip_65 () : java.lang.String {
      return contactDocumentsHelper.ViewDocumentContentTooltip(document)
    }
    
    // 'tooltip' attribute on Link (id=DownloadLink) at ABContactDetailScreen.pcf: line 249, column 98
    function tooltip_72 () : java.lang.String {
      return contactDocumentsHelper.DownloadDocumentContentTooltip(document)
    }
    
    // 'tooltip' attribute on Link (id=UploadLink) at ABContactDetailScreen.pcf: line 257, column 112
    function tooltip_77 () : java.lang.String {
      return contactDocumentsHelper.UploadDocumentContentTooltip(document)
    }
    
    // 'tooltip' attribute on Link (id=ContactDocumentsLV_DeleteLink) at ABContactDetailScreen.pcf: line 266, column 109
    function tooltip_81 () : java.lang.String {
      return contactDocumentsHelper.RemoveDocumentLinkTooltip(document)
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at ABContactDetailScreen.pcf: line 278, column 53
    function valueRoot_86 () : java.lang.Object {
      return document
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at ABContactDetailScreen.pcf: line 278, column 53
    function value_85 () : typekey.DocumentType {
      return document.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ABContactDetailScreen.pcf: line 283, column 59
    function value_88 () : typekey.DocumentStatusType {
      return document.Status
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at ABContactDetailScreen.pcf: line 288, column 44
    function value_91 () : java.lang.String {
      return document.Author
    }
    
    // 'value' attribute on DateCell (id=DateModified_Cell) at ABContactDetailScreen.pcf: line 296, column 50
    function value_94 () : java.util.Date {
      return document.DateModified
    }
    
    // 'visible' attribute on Link (id=DownloadLink) at ABContactDetailScreen.pcf: line 249, column 98
    function visible_70 () : java.lang.Boolean {
      return contactDocumentsHelper.isDownloadDocumentContentVisible(document)
    }
    
    // 'visible' attribute on Link (id=UploadLink) at ABContactDetailScreen.pcf: line 257, column 112
    function visible_74 () : java.lang.Boolean {
      return !isReadOnly and contactDocumentsHelper.isUploadDocumentContentVisible(document)
    }
    
    // 'visible' attribute on Link (id=ContactDocumentsLV_DeleteLink) at ABContactDetailScreen.pcf: line 266, column 109
    function visible_79 () : java.lang.Boolean {
      return !isReadOnly and contactDocumentsHelper.isRemoveDocumentLinkVisible(document)
    }
    
    // 'visible' attribute on Link (id=ContactDocumentsLV_ActionsDisabled) at ABContactDetailScreen.pcf: line 271, column 80
    function visible_83 () : java.lang.Boolean {
      return document.PendingDocUID != null and document.DMS
    }
    
    // 'visible' attribute on Link (id=Hidden) at ABContactDetailScreen.pcf: line 308, column 50
    function visible_97 () : java.lang.Boolean {
      return document.Obsolete
    }
    
    // 'visible' attribute on LinkCell (id=HiddenDocument) at ABContactDetailScreen.pcf: line 303, column 90
    function visible_98 () : java.lang.Boolean {
      return contact.Documents.hasMatch(\ doc -> doc.Obsolete == true)
    }
    
    property get document () : entity.Document {
      return getIteratedValue(2) as entity.Document
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contacts/ABContactDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends ABContactDetailScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 93, column 42
    function def_onEnter_29 (def :  pcf.ABAddressesLV) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 116, column 59
    function def_onEnter_31 (def :  pcf.ABAddressDetailDV) : void {
      def.onEnter(selectedAddress)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 93, column 42
    function def_refreshVariables_30 (def :  pcf.ABAddressesLV) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 116, column 59
    function def_refreshVariables_32 (def :  pcf.ABAddressDetailDV) : void {
      def.refreshVariables(selectedAddress)
    }
    
    // EditButtons at ABContactDetailScreen.pcf: line 100, column 116
    function label_26 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'pickValue' attribute on EditButtons at ABContactDetailScreen.pcf: line 100, column 116
    function pickValue_24 () : ABContact {
      return canPick ? contact : null
    }
    
    // 'showUpdateConfirmMessage' attribute on EditButtons at ABContactDetailScreen.pcf: line 100, column 116
    function showConfirmMessage_27 () : java.lang.Boolean {
      return contactDetailsVendorHelper.ShowLossOfServicesWarning
    }
    
    // 'editVisible' attribute on EditButtons at ABContactDetailScreen.pcf: line 100, column 116
    function visible_25 () : java.lang.Boolean {
      return !isReadOnly
    }
    
    // 'visible' attribute on Toolbar (id=ABAddressesLV_tb) at ABContactDetailScreen.pcf: line 95, column 46
    function visible_28 () : java.lang.Boolean {
      return !contact.isRetired()
    }
    
    property get selectedAddress () : Address {
      return getCurrentSelection(1) as Address
    }
    
    property set selectedAddress ($arg :  Address) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}