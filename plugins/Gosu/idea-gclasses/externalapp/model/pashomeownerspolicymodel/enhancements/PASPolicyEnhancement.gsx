package externalapp.model.pashomeownerspolicymodel.enhancements

@javax.annotation.Generated("gw.xml.codegen.XmlCodeGenerator")
enhancement PASPolicyEnhancement : externalapp.model.pashomeownerspolicymodel.PASPolicy {
  public static function create(object : entity.PASPolicy) : externalapp.model.pashomeownerspolicymodel.PASPolicy {
    return new externalapp.model.pashomeownerspolicymodel.PASPolicy(object)
  }

  public static function create(object : entity.PASPolicy, options : gw.api.gx.GXOptions) : externalapp.model.pashomeownerspolicymodel.PASPolicy {
    return new externalapp.model.pashomeownerspolicymodel.PASPolicy(object, options)
  }

}