package i18n

uses gw.i18n.ILocale
uses java.lang.String
uses javax.annotation.Generated

@Generated("config/metadata/typelist/LanguageType.tti;config/metadata/typelist/LanguageType.tix;config/extensions/typelist/LanguageType.ttx", "", "com.guidewire.pl.localization.codegen.LocalizationCodegen")
public enhancement ILocaleEnhancement : ILocale {
  static function valueOf (code :  String) : ILocale {
    return com.guidewire.commons.metadata.MetadataDependencies.getLocaleFactory().getLocaleByCode(code)
  }
  
  static function valueOfLanguage (code :  String) : ILocale {
    return com.guidewire.commons.metadata.MetadataDependencies.getLocaleFactory().getLanguageByCode(code)
  }
  
  public static property get DE () : ILocale {
    return com.guidewire.commons.metadata.MetadataDependencies.getLocaleFactory().getLocaleByTypecode("de")
  }
  
  public static property get EN_US () : ILocale {
    return com.guidewire.commons.metadata.MetadataDependencies.getLocaleFactory().getLocaleByTypecode("en_US")
  }
  
  public static property get ES () : ILocale {
    return com.guidewire.commons.metadata.MetadataDependencies.getLocaleFactory().getLocaleByTypecode("es")
  }
  
  public static property get FR () : ILocale {
    return com.guidewire.commons.metadata.MetadataDependencies.getLocaleFactory().getLocaleByTypecode("fr")
  }
  
  public static property get IT () : ILocale {
    return com.guidewire.commons.metadata.MetadataDependencies.getLocaleFactory().getLocaleByTypecode("it")
  }
  
  public static property get JA () : ILocale {
    return com.guidewire.commons.metadata.MetadataDependencies.getLocaleFactory().getLocaleByTypecode("ja")
  }
  
  public static property get LANGUAGE_DE () : ILocale {
    return com.guidewire.commons.metadata.MetadataDependencies.getLocaleFactory().getLanguageByTypecode("de")
  }
  
  public static property get LANGUAGE_EN_US () : ILocale {
    return com.guidewire.commons.metadata.MetadataDependencies.getLocaleFactory().getLanguageByTypecode("en_US")
  }
  
  public static property get LANGUAGE_ES () : ILocale {
    return com.guidewire.commons.metadata.MetadataDependencies.getLocaleFactory().getLanguageByTypecode("es")
  }
  
  public static property get LANGUAGE_FR () : ILocale {
    return com.guidewire.commons.metadata.MetadataDependencies.getLocaleFactory().getLanguageByTypecode("fr")
  }
  
  public static property get LANGUAGE_IT () : ILocale {
    return com.guidewire.commons.metadata.MetadataDependencies.getLocaleFactory().getLanguageByTypecode("it")
  }
  
  public static property get LANGUAGE_JA () : ILocale {
    return com.guidewire.commons.metadata.MetadataDependencies.getLocaleFactory().getLanguageByTypecode("ja")
  }
  
  
}