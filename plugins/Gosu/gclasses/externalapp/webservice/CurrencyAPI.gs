package externalapp.webservice

uses gw.api.server.AvailabilityLevel
uses gw.xml.ws.annotation.WsiAvailability
uses gw.xml.ws.annotation.WsiWebService

/*
 * This web service is used in the "Plugins" lab.
*/
@WsiWebService
@WsiAvailability(AvailabilityLevel.MAINTENANCE)
class CurrencyAPI {

/* This method returns a conversion rate for the six supported currencies (USD, AUD, CAD, EUR,
 * GBP, RUB, and JPY). The rate for each USD-to-nonUSD currency is a decimal value that goes to at
 * least 4 digits. The whole number part plys the first two digits are always the same. The third
 * and fourth digits vary based on the current minute. For example, the USDtoAUD rate is 0.98XX,
 * where XX is the current minute. (So at 12:33, the rate is 0.9833.) This ensures that two calls
 * made close together will retrieve the same rate, but over time calls to the same rate will
 * fluctuate. The nonUSD-to-nonUSD rates are calculating using combinations of the USD-to-nonUSD
 * rates. This ensures that any two rates retrieved in the same minute are in sync. 
 * The default is the exchangeDefault. 
 * Negagtive floats are not allowed for the normalized exchange rate data type. NormalizedExchangeRateDataTypeDef 
*/
  function getConversionRate ( fromCurrency : String , toCurrency : String ) : float {

    print("INFO: Received request for conversion from " + fromCurrency + " to " + toCurrency + ".")
    
    fromCurrency = fromCurrency.toUpperCase()
    toCurrency = toCurrency.toUpperCase()
 
    // exchange rates will vary based on the minute when the API call is made
    var minuteAsFloat : float = gw.api.util.DateUtil.currentDate().Minute
    var thousandths : float = (minuteAsFloat / 10000)
    
    // generate all exchange rates
    var exchangeDefault : float = 1.0f + thousandths
    var USDtoUSD : float =   1.0f
    var USDtoAUD : float =   0.9800f + thousandths
    var USDtoCAD : float =   1.0500f + thousandths
    var USDtoEUR : float =   0.7500f + thousandths
    var USDtoGBP : float =   0.6400f + thousandths
    var USDtoRUB : float = 33.090f + thousandths
    var USDtoJPY : float = 97.7400f + thousandths
   
    var returnRate : float
   
    switch (fromCurrency) {
        // switch from USD to something else
        case "USD":
          switch (toCurrency) {
            case "USD": returnRate =  USDtoUSD
              break
            case "AUD": returnRate = USDtoAUD
              break
            case "CAD": returnRate = USDtoCAD
              break
            case "EUR": returnRate = USDtoEUR
              break
            case "GBP": returnRate = USDtoGBP
              break
            case "RUB": returnRate = USDtoRUB
              break
            case "JPY": returnRate = USDtoJPY
              break
            default   : returnRate = exchangeDefault
          } 
          break // end from USD
          
        // switch from AUD to something else
        case "AUD":
          switch (toCurrency) {
            case "USD": returnRate = (USDtoUSD / USDtoAUD)
              break
            case "AUD": returnRate = (USDtoAUD / USDtoAUD)
              break
            case "CAD": returnRate = (USDtoCAD / USDtoAUD)
              break
            case "EUR": returnRate = (USDtoEUR / USDtoAUD)
              break
            case "GBP": returnRate = (USDtoGBP / USDtoAUD)
              break
            case "RUB": returnRate = (USDtoRUB / USDtoAUD)
              break
            case "JPY": returnRate =(USDtoJPY / USDtoAUD)
              break
            default   : returnRate = exchangeDefault
          } 
          break // end from AUD
          
        // switch from CAD to something else
        case "CAD":
          switch (toCurrency) {
            case "USD": returnRate = (USDtoUSD / USDtoCAD)
              break
            case "AUD": returnRate = (USDtoAUD / USDtoCAD)
              break
            case "CAD": returnRate = (USDtoCAD / USDtoCAD)
              break
            case "EUR": returnRate = (USDtoEUR / USDtoCAD)
              break
            case "GBP": returnRate = (USDtoGBP / USDtoCAD)
              break
            case "RUB": returnRate = (USDtoRUB / USDtoCAD)
              break
            case "JPY": returnRate =(USDtoJPY / USDtoCAD)
              break
            default   : returnRate = exchangeDefault
          }
          break // end from CAD
          
        // switch from EUR to something else
        case "EUR":
          switch (toCurrency) {
            case "USD": returnRate = (USDtoUSD / USDtoEUR)
              break
            case "AUD": returnRate = (USDtoAUD / USDtoEUR)
              break
            case "CAD": returnRate = (USDtoCAD / USDtoEUR)
              break
            case "EUR": returnRate = (USDtoEUR / USDtoEUR)
              break
            case "GBP": returnRate = (USDtoGBP / USDtoEUR)
              break
            case "RUB": returnRate = (USDtoRUB / USDtoEUR)
              break
            case "JPY": returnRate =(USDtoJPY / USDtoEUR)
              break
            default   : returnRate = exchangeDefault
          }
          break // end from EUR
          
        // switch from GBP to something else
        case "GBP":
          switch (toCurrency) {
            case "USD": returnRate = (USDtoUSD / USDtoGBP)
              break
            case "AUD": returnRate = (USDtoAUD / USDtoGBP)
              break
            case "CAD": returnRate = (USDtoCAD / USDtoGBP)
              break
            case "EUR": returnRate = (USDtoEUR / USDtoGBP)
              break
            case "GBP": returnRate = (USDtoGBP / USDtoGBP)
              break
            case "RUB": returnRate = (USDtoRUB / USDtoGBP)
              break
            case "JPY": returnRate =(USDtoJPY / USDtoGBP)
              break
            default   : returnRate = exchangeDefault
          }
          break // end from GBP
          
        // switch from RUB to something else
        case "RUB":
          switch (toCurrency) {
            case "USD": returnRate = (USDtoUSD / USDtoRUB)
              break
            case "AUD": returnRate = (USDtoAUD / USDtoRUB)
              break
            case "CAD": returnRate = (USDtoCAD / USDtoRUB)
              break
            case "EUR": returnRate = (USDtoEUR / USDtoRUB)
              break
            case "GBP": returnRate = (USDtoGBP / USDtoRUB)
              break
            case "RUB": returnRate = (USDtoRUB / USDtoRUB)
              break
            case "JPY": returnRate =(USDtoJPY / USDtoRUB)
              break
            default   : returnRate = exchangeDefault
          }
          break // end from RUB
       
        // switch from JPY to something else
        case "JPY":
          switch (toCurrency) {
            case "USD": returnRate = (USDtoUSD / USDtoJPY)
              break
            case "AUD": returnRate = (USDtoAUD / USDtoJPY)
              break
            case "CAD": returnRate = (USDtoCAD / USDtoJPY)
              break
            case "EUR": returnRate = (USDtoEUR / USDtoJPY)
              break
            case "GBP": returnRate = (USDtoGBP / USDtoJPY)
              break
            case "RUB": returnRate = (USDtoRUB / USDtoJPY)
              break
            case "JPY": returnRate = (USDtoJPY / USDtoJPY)
              break
            default   : returnRate = exchangeDefault
          }
          break // end from JPY
          
        // fromCurrency unrecognized
        default : returnRate = exchangeDefault
    } // end main switch 
    
    print("INFO: Rate returned: " + returnRate)
    return returnRate
  }

}
