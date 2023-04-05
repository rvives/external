package externalapp.model.paspersonalautopolicymodel.enhancements

@javax.annotation.Generated("gw.xml.codegen.XmlCodeGenerator")
enhancement PASPolicyEnhancement : externalapp.model.paspersonalautopolicymodel.PASPolicy {
  public static function create(object : entity.PASPolicy) : externalapp.model.paspersonalautopolicymodel.PASPolicy {
    return new externalapp.model.paspersonalautopolicymodel.PASPolicy(object)
  }

  public static function create(object : entity.PASPolicy, options : gw.api.gx.GXOptions) : externalapp.model.paspersonalautopolicymodel.PASPolicy {
    return new externalapp.model.paspersonalautopolicymodel.PASPolicy(object, options)
  }

}