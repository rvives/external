package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PASAddress.eti;PASAddress.eix;PASAddress.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PASAddressInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the City field.
   * City
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCity();
  
  
  /**
   * Gets the value of the Country field.
   * Country
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCountry();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the PostalCode field.
   * Postal code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPostalCode();
  
  
  /**
   * Gets the value of the State field.
   * State
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getState();
  
  
  /**
   * Gets the value of the StreetLine1 field.
   * Street Line 1
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStreetLine1();
  
  
  /**
   * Gets the value of the StreetLine2 field.
   * Street Line 2
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStreetLine2();
  
  
  /**
   * Sets the value of the City field.
   */
  public void setCity(java.lang.String value);
  
  
  /**
   * Sets the value of the Country field.
   */
  public void setCountry(java.lang.String value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the PostalCode field.
   */
  public void setPostalCode(java.lang.String value);
  
  
  /**
   * Sets the value of the State field.
   */
  public void setState(java.lang.String value);
  
  
  /**
   * Sets the value of the StreetLine1 field.
   */
  public void setStreetLine1(java.lang.String value);
  
  
  /**
   * Sets the value of the StreetLine2 field.
   */
  public void setStreetLine2(java.lang.String value);
  
  
  
}