package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/profiler/ProfilerResultsCV.NameThisQuery.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ProfilerResultsCV_NameThisQuery extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($profilerDataSource :  gw.api.profiler.ProfilerDataSource) : void {
    __widgetOf(this, pcf.ProfilerResultsCV_NameThisQuery, SECTION_WIDGET_CLASS).setVariables(false, {$profilerDataSource})
  }
  
  function refreshVariables ($profilerDataSource :  gw.api.profiler.ProfilerDataSource) : void {
    __widgetOf(this, pcf.ProfilerResultsCV_NameThisQuery, SECTION_WIDGET_CLASS).setVariables(true, {$profilerDataSource})
  }
  
  
}