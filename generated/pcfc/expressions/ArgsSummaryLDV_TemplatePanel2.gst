<% uses pcf.* %>
<% uses entity.* %>
<% uses typekey.* %>
<% uses gw.api.locale.DisplayKey %>
<%@ params(selectedArgsSummary : gw.api.profiler.ArgsAggregatedQuerySummary, __helper : gw.api.web.template.TemplatePanelHelper) %>
<% function printContent(strContent : String, escape : boolean) { __helper.printContent(strContent, escape) } %>
<div style="width:1040;height:500;overflow-x:scroll;overflow-y:scroll;">
              <% printContent(selectedArgsSummary.Args, false) %>
            </div>
        