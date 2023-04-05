package externalapp.util

uses gw.api.database.Query
uses gw.api.database.Relop
uses gw.api.util.DateUtil
uses gw.transaction.Transaction

class AdditionalTrainingSampleDataUtil {

  static function loadExternalAppSampleData () : String {

    // create ExternalApp User
    Transaction.runWithNewBundle(\newBundle -> {
      // create user
      var aUserContact = new UserContact()
      aUserContact.FirstName = "ExternalApp"
      aUserContact.LastName = "User"

      var aCredential = new Credential()
      aCredential.UserName = "ExternalAppUser"
      aCredential.Password = "PPNxQmp1UdWbZrn2G1Tj8+w01rI="

      var aUser = new User()
      aUser.Contact = aUserContact
      aUser.Credential = aCredential

      // map role to user
      var roleQuery = Query.make(Role)
      roleQuery.compare(Role#Name, Relop.Equals, "User Admin")
      var role = roleQuery.select().AtMostOneRow

      var aUserRole = new UserRole()
      aUserRole.User = aUser
      aUserRole.Role = role

      // map group to user
      var aGroupQuery = Query.make(Group)
      aGroupQuery.compare(Group#Name, Relop.Equals, "Default Root Group")
      var aGroup = aGroupQuery.select().AtMostOneRow

      var aGroupUser = new GroupUser()
      aGroupUser.User = aUser
      aGroupUser.Group = aGroup

    }, "su")
        
      loadPolicies()
      
      return "Additional Training Sample Data Loaded"
  }

  private static function loadPolicies () : void {
    
    var today = gw.api.util.DateUtil.currentDate()
    //var today =  String."2011-07-21" as Date
   
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // Customer 1
    
    Transaction.runWithNewBundle(\ newBundle -> {
  
      var anInt = "01"
      var HOStartDate = DateUtil.addDays(today, -60)
      var PAStartDate = DateUtil.addDays(today, -55)
      
      var newPerson = new PASPerson()
      newPerson.First = "Anna"
      newPerson.Last = "Williams"
      newPerson.SSN = "000-00-00" + anInt

      var newRole = new PASPersonRole()
      newRole.PolicyRole = "insured"
      newPerson.addToPolicyRoles(newRole)

      var newAddress = new PASAddress()
      newAddress.StreetLine1 = "6417 S. Beach Street"
      newAddress.City = "Fargo"
      newAddress.State = "ND"
      newAddress.PostalCode= "58103"
      newPerson.PASAddress = newAddress

      // Homeowners policy
        
      var newHOPolicy = new PASPolicy()
      newHOPolicy.PolicyNumber = "HO-0000" + anInt      
      newHOPolicy.PolicyType = "Homeowner's"
      newHOPolicy.EffectiveFrom = HOStartDate
      newHOPolicy.EffectiveTo = DateUtil.addYears(HOStartDate, 1)
      newHOPolicy.PolicyHolder = newPerson.First + " " + newPerson.Last    
      newHOPolicy.PrimaryAddress = newAddress
      newHOPolicy.addToPersons(newPerson)

      var newLocation = new PASLocation()
      newLocation.PASAddress = newAddress
      newLocation.Description = "covered house"
      newHOPolicy.addToLocations(newLocation)

      var newCoverage1 = new PASCoverage()
      newCoverage1.CoverageName = "Homeowner's Personal Liability"
      newHOPolicy.addToPolicyCoverages(newCoverage1)
    
      var newCoverage2 = new PASCoverage()
      newCoverage2.CoverageName = "Homeowner's Medical Payments"
      newHOPolicy.addToPolicyCoverages(newCoverage2)

      var newCoverage3 = new PASCoverage()
      newCoverage3.CoverageName = "Homeowner's Dwelling"
      newLocation.addToLocationCoverages(newCoverage3)
    
      var newCoverage4 = new PASCoverage()
      newCoverage4.CoverageName = "Homeowner's Loss Of Use"
      newLocation.addToLocationCoverages(newCoverage4)
    
      var newCoverage5 = new PASCoverage()
      newCoverage5.CoverageName = "Earthquake Coverage"
      newLocation.addToLocationCoverages(newCoverage5)
    
      var newForm1 = new PASEndorsementForm()
      newForm1.Description = "Mold Exclusions"
      newForm1.FormNumber = "MEX-111"
      newHOPolicy.addToEndorsementForms(newForm1)
    
      var newForm2 = new PASEndorsementForm()
      newForm2.Description = "Aggregate Limits"
      newForm2.FormNumber = "AgL-315"
      newHOPolicy.addToEndorsementForms(newForm2)    
      
      // Personal auto policy
  
      var newPAPolicy = new PASPolicy()
      newPAPolicy.PolicyNumber = "PA-0000" + anInt
      newPAPolicy.PolicyType = "Personal Auto"
      newPAPolicy.EffectiveFrom = PAStartDate
      newPAPolicy.EffectiveTo = DateUtil.addMonths(PAStartDate, 12)
      newPAPolicy.addToPersons(newPerson)
      newPAPolicy.PolicyHolder = newPerson.First + " " + newPerson.Last    
      newPAPolicy.PrimaryAddress = newAddress

      var newCoverage01 = new PASCoverage()
      newCoverage01.CoverageName = "Liability - Bodily Injury and Property Damage"
      newPAPolicy.addToPolicyCoverages(newCoverage01)
    
      var newCoverage02 = new PASCoverage()
      newCoverage02.CoverageName = "Uninsured Motorist - Bodily Injury"
      newPAPolicy.addToPolicyCoverages(newCoverage02)

      var newCoverage03 = new PASCoverage()
      newCoverage03.CoverageName = "Uninsured Motorist - Property Damage"
      newPAPolicy.addToPolicyCoverages(newCoverage03)

      var newVehicle1 = new PASVehicle()
      newVehicle1.PASAddress = newAddress
      newVehicle1.VIN = "R43BWA670NS1CZ4Q5"
      newVehicle1.Color = "Green"
      newVehicle1.Year = "2007"
      newVehicle1.Make= "Toyota"
      newVehicle1.Model = "Prius"
      newPAPolicy.addToVehicles(newVehicle1)

      var newVehicleCoverage11 = new PASCoverage()
      newVehicleCoverage11.CoverageName = "Collision"
      newVehicleCoverage11.Deductible = 3000
      newVehicle1.addToVehicleCoverages(newVehicleCoverage11)
    
      var newVehicleCoverage12 = new PASCoverage()
      newVehicleCoverage12.CoverageName = "Comprehensive"
      newVehicleCoverage12.Deductible = 1800
      newVehicle1.addToVehicleCoverages(newVehicleCoverage12)

      var newVehicleCoverage13 = new PASCoverage()
      newVehicleCoverage13.CoverageName = "Towing"
      newVehicle1.addToVehicleCoverages(newVehicleCoverage13)

      var newVehicle2 = new PASVehicle()
      newVehicle2.PASAddress = newAddress
      newVehicle2.VIN = "FHJM3ASPL93MN6F7U"
      newVehicle2.Color = "White"
      newVehicle2.Year = "2011"
      newVehicle2.Make= "Mazda"
      newVehicle2.Model = "MX-5 Miata"
      newPAPolicy.addToVehicles(newVehicle2)

      var newVehicleCoverage21 = new PASCoverage()
      newVehicleCoverage21.CoverageName = "Collision"
      newVehicleCoverage21.Deductible = 1500
      newVehicle2.addToVehicleCoverages(newVehicleCoverage21)
    
      var newVehicleCoverage22 = new PASCoverage()
      newVehicleCoverage22.CoverageName = "Comprehensive"
      newVehicleCoverage22.Deductible = 2000
      newVehicle2.addToVehicleCoverages(newVehicleCoverage22)

      var newVehicleCoverage23 = new PASCoverage()
      newVehicleCoverage23.CoverageName = "Towing"
      newVehicle2.addToVehicleCoverages(newVehicleCoverage23)
    
      var newForm11 = new PASEndorsementForm()
      newForm11.Description = "Limits for Underinsursed Motorists"
      newForm11.FormNumber = "UnderIM-34-221"
      newPAPolicy.addToEndorsementForms(newForm11)
    
      var newForm12 = new PASEndorsementForm()
      newForm12.Description = "Aggregate Limits"
      newForm12.FormNumber = "AgL-315"
      newPAPolicy.addToEndorsementForms(newForm12)    
          
    } , "su" )

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // Customer 2
        
    gw.transaction.Transaction.runWithNewBundle(\ newBundle -> {
  
      var anInt = "02"
      var HOStartDate = gw.api.util.DateUtil.addDays(today, -75)
      var PAStartDate = gw.api.util.DateUtil.addDays(today, -80)
      
      var newPerson = new PASPerson()
      newPerson.First = "Betty"
      newPerson.Last = "Young"
      newPerson.SSN = "000-00-00" + anInt

      var newRole = new PASPersonRole()
      newRole.PolicyRole = "insured"
      newPerson.addToPolicyRoles(newRole)

      var newAddress = new PASAddress()
      newAddress.StreetLine1 = "2314 Davies Avenue"
      newAddress.City = "Mobile"
      newAddress.State = "AL"
      newAddress.PostalCode= "36606"
      newPerson.PASAddress = newAddress

      // Homeowners policy
        
      var newHOPolicy = new PASPolicy()
      newHOPolicy.PolicyNumber = "HO-0000" + anInt      
      newHOPolicy.PolicyType = "Homeowner's"
      newHOPolicy.EffectiveFrom = HOStartDate
      newHOPolicy.EffectiveTo = gw.api.util.DateUtil.addYears(HOStartDate, 1)
      newHOPolicy.addToPersons(newPerson)
      newHOPolicy.PolicyHolder = newPerson.First + " " + newPerson.Last    
      newHOPolicy.PrimaryAddress = newAddress

      var newLocation = new PASLocation()
      newLocation.PASAddress = newAddress
      newLocation.Description = "covered house"
      newHOPolicy.addToLocations(newLocation)

      var newCoverage1 = new PASCoverage()
      newCoverage1.CoverageName = "Homeowner's Personal Liability"
      newHOPolicy.addToPolicyCoverages(newCoverage1)
    
      var newCoverage2 = new PASCoverage()
      newCoverage2.CoverageName = "Homeowner's Dwelling"
      newHOPolicy.addToPolicyCoverages(newCoverage2)

      var newCoverage3 = new PASCoverage()
      newCoverage3.CoverageName = "Homeowner's Loss Of Use"
      newLocation.addToLocationCoverages(newCoverage3)
    
      var newCoverage4 = new PASCoverage()
      newCoverage4.CoverageName = "Homeowner's Other Structures"
      newLocation.addToLocationCoverages(newCoverage4)
   
      var newForm1 = new PASEndorsementForm()
      newForm1.Description = "Mold Exclusions"
      newForm1.FormNumber = "MEX-111"
      newHOPolicy.addToEndorsementForms(newForm1)
    
      var newForm2 = new PASEndorsementForm()
      newForm2.Description = "Aggregate Limits"
      newForm2.FormNumber = "AgL-315"
      newHOPolicy.addToEndorsementForms(newForm2)    

      var newForm3 = new PASEndorsementForm()
      newForm3.Description = "Limitations of Coverage in Alabama"
      newForm3.FormNumber = "ALL-931A"
      newHOPolicy.addToEndorsementForms(newForm3) 
      
      // Personal auto policy
  
      var newPAPolicy = new PASPolicy()
      newPAPolicy.PolicyNumber = "PA-0000" + anInt
      newPAPolicy.PolicyType = "Personal Auto"
      newPAPolicy.EffectiveFrom = PAStartDate
      newPAPolicy.EffectiveTo = gw.api.util.DateUtil.addMonths(PAStartDate, 12)
      newPAPolicy.addToPersons(newPerson)
      newPAPolicy.PolicyHolder = newPerson.First + " " + newPerson.Last    
      newPAPolicy.PrimaryAddress = newAddress

      var newCoverage01 = new PASCoverage()
      newCoverage01.CoverageName = "Liability - Bodily Injury and Property Damage"
      newPAPolicy.addToPolicyCoverages(newCoverage01)
    
      var newVehicle1 = new PASVehicle()
      newVehicle1.PASAddress = newAddress
      newVehicle1.VIN = "9AZXC3GHN67MW2PLP"
      newVehicle1.Color = "Dark Blue"
      newVehicle1.Year = "2009"
      newVehicle1.Make= "Toyota"
      newVehicle1.Model = "Yarus"
      newPAPolicy.addToVehicles(newVehicle1)

      var newVehicleCoverage11 = new PASCoverage()
      newVehicleCoverage11.CoverageName = "Collision"
      newVehicleCoverage11.Deductible = 500
      newVehicle1.addToVehicleCoverages(newVehicleCoverage11)
    
      var newVehicleCoverage12 = new PASCoverage()
      newVehicleCoverage12.CoverageName = "Comprehensive"
      newVehicleCoverage12.Deductible = 500
      newVehicle1.addToVehicleCoverages(newVehicleCoverage12)
    
      var newForm11 = new PASEndorsementForm()
      newForm11.Description = "Uninsursed Motorists Waiver"
      newForm11.FormNumber = "UnWaive-66-940"
      newPAPolicy.addToEndorsementForms(newForm11)
    
      var newForm12 = new PASEndorsementForm()
      newForm12.Description = "Aggregate Limits"
      newForm12.FormNumber = "AgL-315"
      newPAPolicy.addToEndorsementForms(newForm12)    
          
    } , "su" )

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // Customer 3
    
    gw.transaction.Transaction.runWithNewBundle(\ newBundle -> {
  
      var anInt = "03"
      var HOStartDate = DateUtil.addDays(today, -96)
      var PAStartDate = DateUtil.addDays(today, -96)
      
      var newPerson = new PASPerson()
      newPerson.First = "Calvin"
      newPerson.Last = "Washington"
      newPerson.SSN = "000-00-00" + anInt

      var newRole = new PASPersonRole()
      newRole.PolicyRole = "insured"
      newPerson.addToPolicyRoles(newRole)

      var newAddress = new PASAddress()
      newAddress.StreetLine1 = "515 Kapiolani Street"
      newAddress.City = "Kailua"
      newAddress.State = "HI"
      newAddress.PostalCode= "96734"
      newPerson.PASAddress = newAddress

      // Homeowners policy
        
      var newHOPolicy = new PASPolicy()
      newHOPolicy.PolicyNumber = "HO-0000" + anInt      
      newHOPolicy.PolicyType = "Homeowner's"
      newHOPolicy.EffectiveFrom = HOStartDate
      newHOPolicy.EffectiveTo = gw.api.util.DateUtil.addYears(HOStartDate, 1)
      newHOPolicy.addToPersons(newPerson)
      newHOPolicy.PolicyHolder = newPerson.First + " " + newPerson.Last    
      newHOPolicy.PrimaryAddress = newAddress

      var newLocation = new PASLocation()
      newLocation.PASAddress = newAddress
      newLocation.Description = "covered house"
      newHOPolicy.addToLocations(newLocation)

      var newCoverage1 = new PASCoverage()
      newCoverage1.CoverageName = "Homeowner's Personal Liability"
      newHOPolicy.addToPolicyCoverages(newCoverage1)
    
      var newCoverage2 = new PASCoverage()
      newCoverage2.CoverageName = "Homeowner's Medical Payments"
      newHOPolicy.addToPolicyCoverages(newCoverage2)

      var newCoverage3 = new PASCoverage()
      newCoverage3.CoverageName = "Homeowner's Personal Property"
      newLocation.addToLocationCoverages(newCoverage3)
    
      var newCoverage4 = new PASCoverage()
      newCoverage4.CoverageName = "Fungus Coverage"
      newLocation.addToLocationCoverages(newCoverage4)
    
      var newCoverage5 = new PASCoverage()
      newCoverage5.CoverageName = "Homeowner's Other Structures"
      newLocation.addToLocationCoverages(newCoverage5)
  
      var newForm1 = new PASEndorsementForm()
      newForm1.Description = "Claims Outside Lower 48 States"
      newForm1.FormNumber = "COL-613"
      newHOPolicy.addToEndorsementForms(newForm1)
    
      var newForm2 = new PASEndorsementForm()
      newForm2.Description = "Aggregate Limits"
      newForm2.FormNumber = "AgL-315"
      newHOPolicy.addToEndorsementForms(newForm2)    
      
      // Personal auto policy
  
      var newPAPolicy = new PASPolicy()
      newPAPolicy.PolicyNumber = "PA-0000" + anInt
      newPAPolicy.PolicyType = "Personal Auto"
      newPAPolicy.EffectiveFrom = PAStartDate
      newPAPolicy.EffectiveTo = gw.api.util.DateUtil.addMonths(PAStartDate, 12)
      newPAPolicy.addToPersons(newPerson)
      newPAPolicy.PolicyHolder = newPerson.First + " " + newPerson.Last    
      newPAPolicy.PrimaryAddress = newAddress

      var newCoverage01 = new PASCoverage()
      newCoverage01.CoverageName = "Liability - Bodily Injury and Property Damage"
      newPAPolicy.addToPolicyCoverages(newCoverage01)
    
      var newCoverage02 = new PASCoverage()
      newCoverage02.CoverageName = "Uninsured Motorist - Bodily Injury"
      newPAPolicy.addToPolicyCoverages(newCoverage02)

      var newCoverage03 = new PASCoverage()
      newCoverage03.CoverageName = "Uninsured Motorist - Property Damage"
      newPAPolicy.addToPolicyCoverages(newCoverage03)

      var newVehicle1 = new PASVehicle()
      newVehicle1.PASAddress = newAddress
      newVehicle1.VIN = "POSWM32MKI74FDETM"
      newVehicle1.Color = "Silver"
      newVehicle1.Year = "2011"
      newVehicle1.Make= "Volkswagen"
      newVehicle1.Model = "Jetta"
      newPAPolicy.addToVehicles(newVehicle1)

      var newVehicleCoverage11 = new PASCoverage()
      newVehicleCoverage11.CoverageName = "Collision"
      newVehicleCoverage11.Deductible = 1500
      newVehicle1.addToVehicleCoverages(newVehicleCoverage11)
    
      var newVehicleCoverage12 = new PASCoverage()
      newVehicleCoverage12.CoverageName = "Comprehensive"
      newVehicleCoverage12.Deductible = 1500
      newVehicle1.addToVehicleCoverages(newVehicleCoverage12)

      var newVehicle2 = new PASVehicle()
      newVehicle2.PASAddress = newAddress
      newVehicle2.VIN = "45PODMF3NDCGK2WQ9"
      newVehicle2.Color = "Green"
      newVehicle2.Year = "2014"
      newVehicle2.Make= "Ford"
      newVehicle2.Model = "Focus"
      newPAPolicy.addToVehicles(newVehicle2)

      var newVehicleCoverage21 = new PASCoverage()
      newVehicleCoverage21.CoverageName = "Collision"
      newVehicleCoverage21.Deductible = 1000
      newVehicle2.addToVehicleCoverages(newVehicleCoverage21)
    
      var newVehicleCoverage22 = new PASCoverage()
      newVehicleCoverage22.CoverageName = "Comprehensive"
      newVehicleCoverage22.Deductible = 1000
      newVehicle2.addToVehicleCoverages(newVehicleCoverage22)
        
      var newForm12 = new PASEndorsementForm()
      newForm12.Description = "Aggregate Limits"
      newForm12.FormNumber = "AgL-315"
      newPAPolicy.addToEndorsementForms(newForm12)    
          
    } , "su" )

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // Customer 4A
    
    gw.transaction.Transaction.runWithNewBundle(\ newBundle -> {
  
      var anInt = "04"
      var HOStartDate = gw.api.util.DateUtil.addDays(today, -32)
      
      var newPerson = new PASPerson()
      newPerson.First = "David"
      newPerson.Last = "Lee"
      newPerson.SSN = "000-00-00" + anInt

      var newRole = new PASPersonRole()
      newRole.PolicyRole = "insured"
      newPerson.addToPolicyRoles(newRole)

      var newAddress = new PASAddress()
      newAddress.StreetLine1 = "11732 Santa Fe Blvd."
      newAddress.City = "Boulder"
      newAddress.State = "CO"
      newAddress.PostalCode= "80301"
      newPerson.PASAddress = newAddress

      // Homeowners policy
        
      var newHOPolicy = new PASPolicy()
      newHOPolicy.PolicyNumber = "HO-0000" + anInt      
      newHOPolicy.PolicyType = "Homeowner's"
      newHOPolicy.EffectiveFrom = HOStartDate
      newHOPolicy.EffectiveTo = DateUtil.addYears(HOStartDate, 1)
      newHOPolicy.addToPersons(newPerson)
      newHOPolicy.PolicyHolder = newPerson.First + " " + newPerson.Last    
      newHOPolicy.PrimaryAddress = newAddress

      var newLocation = new PASLocation()
      newLocation.PASAddress = newAddress
      newLocation.Description = "covered house"
      newHOPolicy.addToLocations(newLocation)

      var newCoverage1 = new PASCoverage()
      newCoverage1.CoverageName = "Homeowner's Personal Liability"
      newHOPolicy.addToPolicyCoverages(newCoverage1)
    
      var newCoverage2 = new PASCoverage()
      newCoverage2.CoverageName = "Homeowner's Medical Payments"
      newHOPolicy.addToPolicyCoverages(newCoverage2)

      var newCoverage3 = new PASCoverage()
      newCoverage3.CoverageName = "Homeowner's Dwelling"
      newLocation.addToLocationCoverages(newCoverage3)
    
      var newCoverage4 = new PASCoverage()
      newCoverage4.CoverageName = "Homeowner's Loss Of Use"
      newLocation.addToLocationCoverages(newCoverage4)
    
      var newCoverage5 = new PASCoverage()
      newCoverage5.CoverageName = "Earthquake Coverage"
      newLocation.addToLocationCoverages(newCoverage5)
   
      var newForm1 = new PASEndorsementForm()
      newForm1.Description = "Mold Exclusions"
      newForm1.FormNumber = "MEX-111"
      newHOPolicy.addToEndorsementForms(newForm1)
    
      var newForm2 = new PASEndorsementForm()
      newForm2.Description = "Aggregate Limits"
      newForm2.FormNumber = "AgL-315"
      newHOPolicy.addToEndorsementForms(newForm2)    
          
    } , "su" )

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // Customer 4B
    
    Transaction.runWithNewBundle(\ newBundle -> {
  
      var anInt = "04"
      var PAStartDate = DateUtil.addDays(today, -59)
      
      var newPerson = new PASPerson()
      newPerson.First = "Donna"
      newPerson.Last = "Lee"
      newPerson.SSN = "000-00-00" + anInt

      var newRole = new PASPersonRole()
      newRole.PolicyRole = "insured"
      newPerson.addToPolicyRoles(newRole)

      var newAddress = new PASAddress()
      newAddress.StreetLine1 = "11732 Santa Fe Blvd."
      newAddress.City = "Boulder"
      newAddress.State = "CO"
      newAddress.PostalCode= "80301"
      newPerson.PASAddress = newAddress
           
      // Personal auto policy
  
      var newPAPolicy = new PASPolicy()
      newPAPolicy.PolicyNumber = "PA-0000" + anInt
      newPAPolicy.PolicyType = "Personal Auto"
      newPAPolicy.EffectiveFrom = PAStartDate
      newPAPolicy.EffectiveTo = DateUtil.addMonths(PAStartDate, 12)
      newPAPolicy.addToPersons(newPerson)
      newPAPolicy.PolicyHolder = newPerson.First + " " + newPerson.Last    
      newPAPolicy.PrimaryAddress = newAddress

      var newCoverage01 = new PASCoverage()
      newCoverage01.CoverageName = "Liability - Bodily Injury and Property Damage"
      newPAPolicy.addToPolicyCoverages(newCoverage01)
    
      var newCoverage02 = new PASCoverage()
      newCoverage02.CoverageName = "Uninsured Motorist - Bodily Injury"
      newPAPolicy.addToPolicyCoverages(newCoverage02)

      var newCoverage03 = new PASCoverage()
      newCoverage03.CoverageName = "Uninsured Motorist - Property Damage"
      newPAPolicy.addToPolicyCoverages(newCoverage03)

      var newVehicle1 = new PASVehicle()
      newVehicle1.PASAddress = newAddress
      newVehicle1.VIN = "XDR7VGW3KMJ9IJUY3"
      newVehicle1.Color = "Black"
      newVehicle1.Year = "2015"
      newVehicle1.Make= "Mazda"
      newVehicle1.Model = "MX-5 Miata"
      newPAPolicy.addToVehicles(newVehicle1)

      var newVehicleCoverage11 = new PASCoverage()
      newVehicleCoverage11.CoverageName = "Collision"
      newVehicleCoverage11.Deductible = 500
      newVehicle1.addToVehicleCoverages(newVehicleCoverage11)
    
      var newVehicleCoverage12 = new PASCoverage()
      newVehicleCoverage12.CoverageName = "Comprehensive"
      newVehicleCoverage12.Deductible = 500
      newVehicle1.addToVehicleCoverages(newVehicleCoverage12)
    
      var newForm11 = new PASEndorsementForm()
      newForm11.Description = "Uninsursed Motorists Waiver"
      newForm11.FormNumber = "UnWaive-66-940"
      newPAPolicy.addToEndorsementForms(newForm11)
    
      var newForm12 = new PASEndorsementForm()
      newForm12.Description = "Aggregate Limits"
      newForm12.FormNumber = "AgL-315"
      newPAPolicy.addToEndorsementForms(newForm12)    
          
    } , "su" )


    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // Customer 5A
    
    gw.transaction.Transaction.runWithNewBundle(\ newBundle -> {
  
      var anInt = "05"
      var HOStartDate = DateUtil.addDays(today, -92)
      
      var newPerson = new PASPerson()
      newPerson.First = "Emil"
      newPerson.Last = "Laslo"
      newPerson.SSN = "000-00-00" + anInt

      var newRole = new PASPersonRole()
      newRole.PolicyRole = "insured"
      newPerson.addToPolicyRoles(newRole)

      var newAddress = new PASAddress()
      newAddress.StreetLine1 = "1328 Columbia St. #7"
      newAddress.City = "New York"
      newAddress.State = "NY"
      newAddress.PostalCode= "10001"
      newPerson.PASAddress = newAddress

      // Homeowners policy
        
      var newHOPolicy = new PASPolicy()
      newHOPolicy.PolicyNumber = "HO-0000" + anInt      
      newHOPolicy.PolicyType = "Homeowner's"
      newHOPolicy.EffectiveFrom = HOStartDate
      newHOPolicy.EffectiveTo = DateUtil.addYears(HOStartDate, 1)
      newHOPolicy.addToPersons(newPerson)
      newHOPolicy.PolicyHolder = newPerson.First + " " + newPerson.Last    
      newHOPolicy.PrimaryAddress = newAddress

      var newLocation = new PASLocation()
      newLocation.PASAddress = newAddress
      newLocation.Description = "covered house"
      newHOPolicy.addToLocations(newLocation)

      var newCoverage1 = new PASCoverage()
      newCoverage1.CoverageName = "Homeowner's Personal Liability"
      newHOPolicy.addToPolicyCoverages(newCoverage1)
    
      var newCoverage2 = new PASCoverage()
      newCoverage2.CoverageName = "Homeowner's Medical Payments"
      newHOPolicy.addToPolicyCoverages(newCoverage2)

      var newCoverage3 = new PASCoverage()
      newCoverage3.CoverageName = "Homeowner's Personal Property"
      newLocation.addToLocationCoverages(newCoverage3)
    
      var newCoverage4 = new PASCoverage()
      newCoverage4.CoverageName = "Fungus Coverage"
      newLocation.addToLocationCoverages(newCoverage4)
    
      var newCoverage5 = new PASCoverage()
      newCoverage5.CoverageName = "Homeowner's Other Structures"
      newLocation.addToLocationCoverages(newCoverage5)
    
      var newForm2 = new PASEndorsementForm()
      newForm2.Description = "Aggregate Limits"
      newForm2.FormNumber = "AgL-315"
      newHOPolicy.addToEndorsementForms(newForm2)      
          
    } , "su" )

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // Customer 5B
    
    Transaction.runWithNewBundle(\ newBundle -> {
  
      var anInt = "05"
      var PAStartDate = DateUtil.addDays(today, -86)
      
      var newPerson = new PASPerson()
      newPerson.First = "Emma"
      newPerson.Last = "Mackenzie"
      newPerson.SSN = "000-00-00" + anInt

      var newRole = new PASPersonRole()
      newRole.PolicyRole = "insured"
      newPerson.addToPolicyRoles(newRole)

      var newAddress = new PASAddress()
      newAddress.StreetLine1 = "1600 Columbia St. #101"
      newAddress.City = "New York"
      newAddress.State = "NY"
      newAddress.PostalCode= "10001"
      newPerson.PASAddress = newAddress
      
      // Personal auto policy
  
      var newPAPolicy = new PASPolicy()
      newPAPolicy.PolicyNumber = "PA-0000" + anInt
      newPAPolicy.PolicyType = "Personal Auto"
      newPAPolicy.EffectiveFrom = PAStartDate
      newPAPolicy.EffectiveTo = DateUtil.addMonths(PAStartDate, 12)
      newPAPolicy.addToPersons(newPerson)
      newPAPolicy.PolicyHolder = newPerson.First + " " + newPerson.Last    
      newPAPolicy.PrimaryAddress = newAddress
    
      var newCoverage02 = new PASCoverage()
      newCoverage02.CoverageName = "Uninsured Motorist - Bodily Injury"
      newPAPolicy.addToPolicyCoverages(newCoverage02)

      var newCoverage03 = new PASCoverage()
      newCoverage03.CoverageName = "Uninsured Motorist - Property Damage"
      newPAPolicy.addToPolicyCoverages(newCoverage03)

      var newVehicle1 = new PASVehicle()
      newVehicle1.PASAddress = newAddress
      newVehicle1.VIN = "QNBDLKJ9POI2TRE43"
      newVehicle1.Color = "Dark Blue"
      newVehicle1.Year = "1999"
      newVehicle1.Make= "Smart"
      newVehicle1.Model = "ForTwo"
      newPAPolicy.addToVehicles(newVehicle1)

      var newVehicleCoverage13 = new PASCoverage()
      newVehicleCoverage13.CoverageName = "Towing"
      newVehicle1.addToVehicleCoverages(newVehicleCoverage13)

      var newVehicle2 = new PASVehicle()
      newVehicle2.PASAddress = newAddress
      newVehicle2.VIN = "3ZAS5VFR78NHJ9KIO"
      newVehicle2.Color = "Dark Green"
      newVehicle2.Year = "2013"
      newVehicle2.Make= "Volkswagen"
      newVehicle2.Model = "Golf"
      newPAPolicy.addToVehicles(newVehicle2)

      var newVehicleCoverage23 = new PASCoverage()
      newVehicleCoverage23.CoverageName = "Towing"
      newVehicle2.addToVehicleCoverages(newVehicleCoverage23)

      var newVehicle3 = new PASVehicle()
      newVehicle3.PASAddress = newAddress
      newVehicle3.VIN = "HKRLDI6OSM34NDPWZ"
      newVehicle3.Color = "Red"
      newVehicle3.Year = "2011"
      newVehicle3.Make= "Jeep"
      newVehicle3.Model = "Commander"
      newPAPolicy.addToVehicles(newVehicle3)

      var newVehicleCoverage33 = new PASCoverage()
      newVehicleCoverage33.CoverageName = "Towing"
      newVehicle3.addToVehicleCoverages(newVehicleCoverage33)

      var newForm11 = new PASEndorsementForm()
      newForm11.Description = "Towing-Only Vehicles"
      newForm11.FormNumber = "TowOnly-00-731"
      newPAPolicy.addToEndorsementForms(newForm11)
    
      var newForm12 = new PASEndorsementForm()
      newForm12.Description = "Aggregate Limits"
      newForm12.FormNumber = "AgL-315"
      newPAPolicy.addToEndorsementForms(newForm12)    
          
    } , "su" )


    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // Customer 6
    
    Transaction.runWithNewBundle(\ newBundle -> {
  
      var anInt = "06"
      var PAStartDate = DateUtil.addDays(today, -29)
      
      var newPerson = new PASPerson()
      newPerson.First = "Frank"
      newPerson.Last = "Woo"
      newPerson.SSN = "000-00-00" + anInt

      var newRole = new PASPersonRole()
      newRole.PolicyRole = "insured"
      newPerson.addToPolicyRoles(newRole)

      var newAddress = new PASAddress()
      newAddress.StreetLine1 = "3815 Sycamore Street"
      newAddress.City = "Chicago"
      newAddress.State = "IL"
      newAddress.PostalCode= "60601"
      newPerson.PASAddress = newAddress
      
      // Personal auto policy
  
      var newPAPolicy = new PASPolicy()
      newPAPolicy.PolicyNumber = "PA-0000" + anInt
      newPAPolicy.PolicyType = "Personal Auto"
      newPAPolicy.EffectiveFrom = PAStartDate
      newPAPolicy.EffectiveTo = DateUtil.addMonths(PAStartDate, 12)
      newPAPolicy.addToPersons(newPerson)
      newPAPolicy.PolicyHolder = newPerson.First + " " + newPerson.Last    
      newPAPolicy.PrimaryAddress = newAddress

      var newCoverage01 = new PASCoverage()
      newCoverage01.CoverageName = "Liability - Bodily Injury and Property Damage"
      newPAPolicy.addToPolicyCoverages(newCoverage01)
    
      var newCoverage02 = new PASCoverage()
      newCoverage02.CoverageName = "Uninsured Motorist - Bodily Injury"
      newPAPolicy.addToPolicyCoverages(newCoverage02)

      var newCoverage03 = new PASCoverage()
      newCoverage03.CoverageName = "Uninsured Motorist - Property Damage"
      newPAPolicy.addToPolicyCoverages(newCoverage03)

      var newVehicle1 = new PASVehicle()
      newVehicle1.PASAddress = newAddress
      newVehicle1.VIN = "PWE43LKWPP231WM45"
      newVehicle1.Color = "Silver"
      newVehicle1.Year = "2012"
      newVehicle1.Make= "Jeep"
      newVehicle1.Model = "Commander"
      newPAPolicy.addToVehicles(newVehicle1)

      var newVehicleCoverage11 = new PASCoverage()
      newVehicleCoverage11.CoverageName = "Collision"
      newVehicleCoverage11.Deductible = 1500
      newVehicle1.addToVehicleCoverages(newVehicleCoverage11)
    
      var newVehicleCoverage12 = new PASCoverage()
      newVehicleCoverage12.CoverageName = "Comprehensive"
      newVehicleCoverage12.Deductible = 1200
      newVehicle1.addToVehicleCoverages(newVehicleCoverage12)
   
      var newForm11 = new PASEndorsementForm()
      newForm11.Description = "Limits for Underinsursed Motorists"
      newForm11.FormNumber = "UnderIM-34-221"
      newPAPolicy.addToEndorsementForms(newForm11)
    
      var newForm12 = new PASEndorsementForm()
      newForm12.Description = "Aggregate Limits"
      newForm12.FormNumber = "AgL-315"
      newPAPolicy.addToEndorsementForms(newForm12)    
          
    } , "su" )
   
  } // end loadPolicies()
  
}
