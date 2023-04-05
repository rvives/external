package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PASVehicle.eti;PASVehicle.eix;PASVehicle.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PASVehicleInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Adds the given element to the VehicleCoverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToVehicleCoverages(entity.PASCoverage element);
  
  
  /**
   * Gets the value of the Color field.
   * Vehicle color
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getColor();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the Make field.
   * Vehicle make
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getMake();
  
  
  /**
   * Gets the value of the Model field.
   * Vehicle model
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getModel();
  
  
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
   * Gets the value of the VIN field.
   * Vehicle identification number
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getVIN();
  
  
  /**
   * Gets the value of the VehicleCoverages field.
   * Vehicle coverages
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PASCoverage[] getVehicleCoverages();
  
  
  /**
   * Gets the value of the Year field.
   * Vehicle year
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getYear();
  
  
  /**
   * Removes the given element from the VehicleCoverages array. This is achieved by marking the element for removal.
   */
  public void removeFromVehicleCoverages(entity.PASCoverage element);
  
  
  /**
   * Removes the given element from the VehicleCoverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromVehicleCoverages(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Color field.
   */
  public void setColor(java.lang.String value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the Make field.
   */
  public void setMake(java.lang.String value);
  
  
  /**
   * Sets the value of the Model field.
   */
  public void setModel(java.lang.String value);
  
  
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
   * Sets the value of the VIN field.
   */
  public void setVIN(java.lang.String value);
  
  
  /**
   * Sets the value of the VehicleCoverages field.
   */
  public void setVehicleCoverages(entity.PASCoverage[] value);
  
  
  /**
   * Sets the value of the Year field.
   */
  public void setYear(java.lang.String value);
  
  
  
}