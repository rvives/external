package externalapp.batch
//uses externalapp.wsi.legalcase.legalcasewsc.legalcaseapi.LegalCaseAPI
uses gw.api.database.Query
uses gw.api.database.Relop
uses gw.api.system.ABLoggerCategory
uses gw.api.util.DateUtil
uses gw.processes.BatchProcessBase
uses gw.transaction.Transaction
uses java.util.Date
uses java.util.Random

class LegalReportBatch extends BatchProcessBase {
  private static var _logger = ABLoggerCategory.SERVER_BATCHPROCESS

  construct() {
    super(BatchProcessType.TC_LEGALREPORTGENERATOR)
  }

  override function doWork() {
     
    var numberOfRequestsProcessed = 0

    var reportRequestQuery = Query.make(LegalReportRequest)
    reportRequestQuery.compare (LegalReportRequest#Processed, Relop.Equals, false)
    var resultsObj = reportRequestQuery.select()

    for (currentRequest in resultsObj) {
      Transaction.runWithNewBundle( \ bundle -> {
                        
        bundle.add(currentRequest)
        currentRequest.Processed = true
        numberOfRequestsProcessed = numberOfRequestsProcessed + 1
        // consume external webservice wsc from ExternalApp
      //  var api = new LegalCaseAPI()
      //  api.Config.Http.Authentication.Basic.Username = "su"
      //  api.Config.Http.Authentication.Basic.Password = "gw"
        
        // Reports for doctors with an unspecified category get "lost" and never responded to
        if (currentRequest.ContactInfo != "Unspecified") {
          
          // Return a report 80% of the time
          var generator = new Random()
          var caseExists : int =  generator.nextInt(5) // Generates a 0, 1, 2, 3, or 4
          if (caseExists <= 3) {
                                        
            var caseDate : Date = generateCaseDate()
            var caseType : String = pickCaseType()
            var caseStatus : String = pickCaseStatus()
            var plaintiffName : String = generatePlaintiffName()
         //   api.createLegalCase(currentRequest.ContactID, caseDate, plaintiffName, caseType, caseStatus)
          } // end caseExists
          
       //   api.ackMessage(currentRequest.MessageID, 1)
          
        } // end category not Unspecified
      }, "su")
    
    } // end for loop
    
   _logger.info("LegalReportBatch.doWork(): Legal Reports batch process issued " + numberOfRequestsProcessed + " reports.")
  } // end doWork

  private function generateCaseDate() : Date {   
    var generator = new Random()
    var daysSince : int =  -1 * generator.nextInt(180)
    return DateUtil.addBusinessDays(gw.api.util.DateUtil.currentDate(), daysSince)
  }

    private function pickCaseType() : String {
    var generator = new Random()
    var randomStatus : int = generator.nextInt(4)
    switch (randomStatus) {
      case 0: return "malpractice"
      case 1: return "fraud"
      case 2: return "wrongful_death"
      case 3: return "negligence"
      default: return ""
    }
  }
  
    private function pickCaseStatus() : String {
    var generator = new Random()
    var randomStatus : int = generator.nextInt(7)
    switch (randomStatus) {
      case 0: return "in_progress"
      case 1: return "case_dismissed"
      case 2: return "case_dropped"
      case 3: return "settled"
      case 4: return "guilty"
      case 5: return "not_guilty"
      case 6: return "mistrial"
      default: return ""
    }
  }
  
    private function generatePlaintiffName() : String {
      var plaintiffName : String = ""

      var generator = new Random()
      var randomFirst : int = generator.nextInt(30)
      var randomLast : int = generator.nextInt(30)
      
      switch (randomFirst) {
        case 0: plaintiffName = "Ian "
          break
        case 1: plaintiffName = "Barbara "
          break
        case 2: plaintiffName = "Susan "
          break
        case 3: plaintiffName = "Vicki " 
          break
        case 4: plaintiffName = "Stephen "
          break
        case 5: plaintiffName = "Dorothy "
          break
        case 6: plaintiffName = "Ben "
          break
        case 7: plaintiffName = "Polly "
          break
        case 8: plaintiffName = "Jamie "
          break
        case 9: plaintiffName = "Liz "
          break  
        case 10: plaintiffName = "Joe "
          break
        case 11: plaintiffName = "Sarah "
          break
        case 12: plaintiffName = "Harry "
          break
        case 13: plaintiffName = "Mel "
          break
        case 14: plaintiffName = "Rose "
          break
        case 15: plaintiffName = "Adam "
          break
        case 16: plaintiffName = "Jack "
          break
        case 17: plaintiffName = "Micky "
          break
        case 18: plaintiffName = "Martha "
          break
        case 19: plaintiffName = "Donna "
          break
        case 20: plaintiffName = "Evelyn "
          break
        case 21: plaintiffName = "Oliver "
          break
        case 22: plaintiffName = "Thomas "
          break
        case 23: plaintiffName = "Ashton "
          break
        case 24: plaintiffName = "Lucie "
          break
        case 25: plaintiffName = "Tamsin "
          break
        case 26: plaintiffName = "Charlie "
          break
        case 27: plaintiffName = "Sam "
          break
        case 28: plaintiffName = "Mary "
          break
        case 29: plaintiffName = "Bernice "
          break                                 
        default: return "Amy "
      }

      switch (randomLast) {
        case 0: plaintiffName = plaintiffName + "Foreman"
          break
        case 1: plaintiffName = plaintiffName + "Chesterton"
          break
        case 2: plaintiffName = plaintiffName + "Wright"
          break
        case 3: plaintiffName = plaintiffName + "Waterfield"
          break
        case 4: plaintiffName = plaintiffName + "Taylor"
          break
        case 5: plaintiffName = plaintiffName + "Chaplette"
          break
        case 6: plaintiffName = plaintiffName + "Jackson"
          break
        case 7: plaintiffName = plaintiffName + "Wright"
          break
        case 8: plaintiffName = plaintiffName + "McCrimmon"
          break
        case 9: plaintiffName = plaintiffName + "Shaw"
          break
        case 10: plaintiffName = plaintiffName + "Grant"
          break
        case 11: plaintiffName = plaintiffName + "Smith"
          break
        case 12: plaintiffName = plaintiffName + "Sullivan"
          break
        case 13: plaintiffName = plaintiffName + "Tyler"
          break
        case 14: plaintiffName = plaintiffName + "Harkness"
          break
        case 15: plaintiffName = plaintiffName + "Jones"
          break
        case 16: plaintiffName = plaintiffName + "Noble"
          break
        case 17: plaintiffName = plaintiffName + "Herriot"
          break
        case 18: plaintiffName = plaintiffName + "Jovanka"
          break
        case 19: plaintiffName = plaintiffName + "Brown"
          break
        case 20: plaintiffName = plaintiffName + "Smythe"
          break
        case 21: plaintiffName = plaintiffName + "Brewster"
          break
        case 22: plaintiffName = plaintiffName + "Cooper"
          break
        case 23: plaintiffName = plaintiffName + "Miller"
          break
        case 24: plaintiffName = plaintiffName + "Drew"
          break
        case 25: plaintiffName = plaintiffName + "McShane"
          break
        case 26: plaintiffName = plaintiffName + "Horum"
          break
        case 27: plaintiffName = plaintiffName + "Pollard"
          break
        case 28: plaintiffName = plaintiffName + "Shelley"
          break
        case 29: plaintiffName = plaintiffName + "Summerfield"
          break              
        default: return "Pond"
      }
                     
      return plaintiffName
  }

}

