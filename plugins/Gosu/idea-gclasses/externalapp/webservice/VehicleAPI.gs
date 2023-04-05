package externalapp.webservice

uses gw.api.server.AvailabilityLevel
uses gw.api.system.ABLoggerCategory
uses gw.xml.ws.annotation.WsiAvailability
uses gw.xml.ws.annotation.WsiPermissions
uses gw.xml.ws.annotation.WsiWebService

/* This web service is used in the W-SI portion of the
 * "SOAP Web Services" lab.
*/
@WsiWebService
@WsiAvailability(AvailabilityLevel.MAINTENANCE)
class VehicleAPI {
  private static var _logger = ABLoggerCategory.INTEGRATION

  function verifyVehicle ( VIN : String ) : String {

    _logger.info("request for verification of vehicle " + VIN + ".")
        
    if (VIN.length!=17) {
      return "VIN is not 17 characters"
    } else {
      
      if (!VIN.Alphanumeric) {
        return "VIN has invalid characters"
      } else {
        
        VIN = VIN.toUpperCase()
        
        var vinRand = convertCharToNumeric(VIN.charAt(0)) +
                      convertCharToNumeric(VIN.charAt(1)) +
                      convertCharToNumeric(VIN.charAt(2)) +
                      convertCharToNumeric(VIN.charAt(3)) +
                      convertCharToNumeric(VIN.charAt(4)) +
                      convertCharToNumeric(VIN.charAt(5)) +
                      convertCharToNumeric(VIN.charAt(6)) +
                      convertCharToNumeric(VIN.charAt(7)) +
                      convertCharToNumeric(VIN.charAt(8)) +
                      convertCharToNumeric(VIN.charAt(9)) +
                      convertCharToNumeric(VIN.charAt(10)) +
                      convertCharToNumeric(VIN.charAt(11)) +
                      convertCharToNumeric(VIN.charAt(12)) +
                      convertCharToNumeric(VIN.charAt(13)) +
                      convertCharToNumeric(VIN.charAt(14)) +                      
                      convertCharToNumeric(VIN.charAt(15)) +
                      convertCharToNumeric(VIN.charAt(16))

        var colorString = getColor( vinRand % 10 )                      
        var yearInt = 1980 + ( vinRand % 31 )
        var makeString = getMakeAndModel( vinRand % 61 )


        _logger.info("Data returned: " + colorString + " " + yearInt as String + " " + makeString)
        return colorString + " " + yearInt as String + " " + makeString
      }
    }
  }
  
  private function convertCharToNumeric ( c : char ) : int {
    switch (String.valueOf(c)) {
      case "0" : return 0
      case "1" : return 1
      case "2" : return 2
      case "3" : return 3
      case "4" : return 4
      case "5" : return 5
      case "6" : return 6
      case "7" : return 7
      case "8" : return 8
      case "9" : return 9
      case "A" : return 10
      case "B" : return 11
      case "C" : return 12
      case "D" : return 13
      case "E" : return 14
      case "F" : return 15
      case "G" : return 16
      case "H" : return 17
      case "I" : return 18
      case "J" : return 19
      case "K" : return 20
      case "L" : return 21
      case "M" : return 22
      case "N" : return 23
      case "O" : return 24
      case "P" : return 25
      case "Q" : return 26
      case "R" : return 27
      case "S" : return 28
      case "T" : return 29
      case "U" : return 30
      case "V" : return 31
      case "W" : return 32
      case "X" : return 33
      case "Y" : return 34
      case "Z" : return 35              
      default : return 0
    } // end switch
  } // end convertCharToNumeric

  private function getMakeAndModel ( rand : int ) : String {
    switch (rand) {
      case 0: return "BWM X1"
      case 1: return "BWM X3"
      case 2: return "BWM X5"
      case 3: return "Cadillac Escalade"
      case 4: return "Cadillac SRX"
      case 5: return "Chevrolet Avalance"
      case 6: return "Chevrolet Camaro"
      case 7: return "Chevrolet Equinox"
      case 8: return "Chevrolet Impala"
      case 9: return "Chevrolet Malibu"
      case 10: return "Chevrolet Suburban"
      case 11: return "Dodge Avenger"
      case 12: return "Dodge Challenger"
      case 13: return "Dodge Dakota"
      case 14: return "Dodge Grand Caravan"
      case 15: return "Dodge Ram 1500"
      case 16: return "Dodge Viper"
      case 17: return "Ford Edge"
      case 18: return "Ford Explorer"
      case 19: return "Ford Fiesta"
      case 20: return "Ford Focus"
      case 21: return "Ford Mustang"
      case 22: return "Ford Ranger"
      case 23: return "Honda Accord"
      case 24: return "Honda Civic"
      case 25: return "Honda Odyssey"
      case 26: return "Jeep Commander"
      case 27: return "Jeep Grand Cherokee"
      case 28: return "Jeep Wrangler"
      case 29: return "Lexus GX"
      case 30: return "Lexus LS"   
      case 31: return "Mazda MX-5 Miata"
      case 32: return "Mazda RX-8"
      case 33: return "Mazda Tribute"
      case 34: return "Mercedes-Benz CL"
      case 35: return "Mercedes-Benz SL"
      case 36: return "Mitsubishi Eclipse"
      case 37: return "Mitsubishi Galant"
      case 38: return "Mitsubishi Lancer"
      case 39: return "Nissan Altima"
      case 40: return "Nissan Maxima"
      case 41: return "Nissan Pathfinder"
      case 42: return "Nissan Xterra"
      case 43: return "Porsche Cayman"
      case 44: return "Smart ForTwo"
      case 45: return "Subaru Forester"
      case 46: return "Subaru Impreza"
      case 47: return "Subaru Legacy"
      case 48: return "Subaru Outback"
      case 49: return "Toyota Camry"
      case 50: return "Toyota Corolla"
      case 51: return "Toyota Prius"
      case 52: return "Toyota Tacoma"
      case 53: return "Toyota Tercel"
      case 54: return "Toyota Yaris"
      case 55: return "Volkswagen Golf"
      case 56: return "Volkswagen Jetta "
      case 57: return "Volkswagen New Beetle"
      case 58: return "Volvo C30"
      case 59: return "Volvo XC90"
      case 60: return "Gotham Batmobile"                   
      default : return "Yugo"
    } // end switch
  } // end getMakeAndModel
  
  private function getColor ( rand : int ) : String {
    switch (rand) {
      case 0: return "Silver"
      case 1: return "Red"
      case 2: return "Yellow"
      case 3: return "Blue"
      case 4: return "Green"
      case 5: return "White"
      case 6: return "Black"
      case 7: return "Gray"
      case 8: return "Dark Blue"
      case 9: return "Dark Green"
      default : return "Pink"
    } // end switch
  } // end getColor

}
