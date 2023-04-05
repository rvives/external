package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PASEndorsementForm.eti;PASEndorsementForm.eix;PASEndorsementForm.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PASEndorsementFormInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the Description field.
   * Description
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the FormNumber field.
   * Form Number
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFormNumber();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the PASPolicy field.
   * Related policy
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PASPolicy getPASPolicy();
  
  
  public gw.pl.persistence.core.Key getPASPolicyID();
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the FormNumber field.
   */
  public void setFormNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the PASPolicy field.
   */
  public void setPASPolicy(entity.PASPolicy value);
  
  
  public void setPASPolicyID(gw.pl.persistence.core.Key value);
  
  
  
}