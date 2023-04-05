package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PASPerson.eti;PASPerson.eix;PASPerson.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PASPersonInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Adds the given element to the PolicyRoles array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPolicyRoles(entity.PASPersonRole element);
  
  
  /**
   * Gets the value of the First field.
   * First name
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFirst();
  
  
  /**
   * Gets the value of the Last field.
   * Last name
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLast();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the PASAddress field.
   * Related address
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PASAddress getPASAddress();
  
  
  public gw.pl.persistence.core.Key getPASAddressID();
  
  
  /**
   * Gets the value of the PASPolicy field.
   * Related policy
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PASPolicy getPASPolicy();
  
  
  public gw.pl.persistence.core.Key getPASPolicyID();
  
  
  /**
   * Gets the value of the PolicyRoles field.
   * Policy roles
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PASPersonRole[] getPolicyRoles();
  
  
  /**
   * Gets the value of the SSN field.
   * Tax ID (Social Security Number)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSSN();
  
  
  /**
   * Removes the given element from the PolicyRoles array. This is achieved by marking the element for removal.
   */
  public void removeFromPolicyRoles(entity.PASPersonRole element);
  
  
  /**
   * Removes the given element from the PolicyRoles array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPolicyRoles(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the First field.
   */
  public void setFirst(java.lang.String value);
  
  
  /**
   * Sets the value of the Last field.
   */
  public void setLast(java.lang.String value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the PASAddress field.
   */
  public void setPASAddress(entity.PASAddress value);
  
  
  public void setPASAddressID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PASPolicy field.
   */
  public void setPASPolicy(entity.PASPolicy value);
  
  
  public void setPASPolicyID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PolicyRoles field.
   */
  public void setPolicyRoles(entity.PASPersonRole[] value);
  
  
  /**
   * Sets the value of the SSN field.
   */
  public void setSSN(java.lang.String value);
  
  
  
}