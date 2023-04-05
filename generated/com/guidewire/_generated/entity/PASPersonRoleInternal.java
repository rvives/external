package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PASPersonRole.eti;PASPersonRole.eix;PASPersonRole.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PASPersonRoleInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the PASPerson field.
   * Related person
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PASPerson getPASPerson();
  
  
  public gw.pl.persistence.core.Key getPASPersonID();
  
  
  /**
   * Gets the value of the PolicyRole field.
   * First name
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPolicyRole();
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the PASPerson field.
   */
  public void setPASPerson(entity.PASPerson value);
  
  
  public void setPASPersonID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PolicyRole field.
   */
  public void setPolicyRole(java.lang.String value);
  
  
  
}