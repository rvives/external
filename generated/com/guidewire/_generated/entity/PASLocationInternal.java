package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PASLocation.eti;PASLocation.eix;PASLocation.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PASLocationInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Adds the given element to the LocationCoverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLocationCoverages(entity.PASCoverage element);
  
  
  /**
   * Gets the value of the Description field.
   * Description
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the LocationCoverages field.
   * Location coverages
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PASCoverage[] getLocationCoverages();
  
  
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
   * Removes the given element from the LocationCoverages array. This is achieved by marking the element for removal.
   */
  public void removeFromLocationCoverages(entity.PASCoverage element);
  
  
  /**
   * Removes the given element from the LocationCoverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLocationCoverages(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the LocationCoverages field.
   */
  public void setLocationCoverages(entity.PASCoverage[] value);
  
  
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
  
  
  
}