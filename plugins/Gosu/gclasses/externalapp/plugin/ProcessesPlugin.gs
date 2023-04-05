package externalapp.plugin

uses externalapp.batch.LegalReportBatch
uses gw.plugin.processing.IProcessesPlugin
uses gw.processes.BatchProcess

class ProcessesPlugin implements IProcessesPlugin {
  construct() {
  }
  override function createBatchProcess(type : BatchProcessType, arguments : Object[]) : BatchProcess {
    switch(type) {
      case BatchProcessType.TC_LEGALREPORTGENERATOR:
        return new LegalReportBatch()
      default:
        return null
    }
  }
}