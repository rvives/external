package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PASPolicy.eti;PASPolicy.eix;PASPolicy.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PASPolicyInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Adds the given element to the EndorsementForms array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToEndorsementForms(entity.PASEndorsementForm element);
  
  
  /**
   * Adds the given element to the Locations array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLocations(entity.PASLocation element);
  
  
  /**
   * Adds the given element to the Persons array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPersons(entity.PASPerson element);
  
  
  /**
   * Adds the given element to the PolicyCoverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPolicyCoverages(entity.PASCoverage element);
  
  
  /**
   * Adds the given element to the Vehicles array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToVehicles(entity.PASVehicle element);
  
  
  /**
   * Gets the value of the EffectiveFrom field.
   * Date from which policy is effective
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEffectiveFrom();
  
  
  /**
   * Gets the value of the EffectiveTo field.
   * Date until which policy is effective
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEffectiveTo();
  
  
  /**
   * Gets the value of the EndorsementForms field.
   * Endorsement forms
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PASEndorsementForm[] getEndorsementForms();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the Locations field.
   * Locations
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PASLocation[] getLocations();
  
  
  /**
   * Gets the value of the Persons field.
   * Persons
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PASPerson[] getPersons();
  
  
  /**
   * Gets the value of the PolicyCoverages field.
   * Policy coverages
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PASCoverage[] getPolicyCoverages();
  
  
  /**
   * Gets the value of the PolicyHolder field.
   * Name of policy holder
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPolicyHolder();
  
  
  /**
   * Gets the value of the PolicyNumber field.
   * Unique policy number
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPolicyNumber();
  
  
  /**
   * Gets the value of the PolicyType field.
   * Type of policy
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPolicyType();
  
  
  /**
   * Gets the value of the PrimaryAddress field.
   * Policy address
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PASAddress getPrimaryAddress();
  
  
  public gw.pl.persistence.core.Key getPrimaryAddressID();
  
  
  /**
   * Gets the value of the Vehicles field.
   * Vehicles
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PASVehicle[] getVehicles();
  
  
  /**
   * Removes the given element from the EndorsementForms array. This is achieved by marking the element for removal.
   */
  public void removeFromEndorsementForms(entity.PASEndorsementForm element);
  
  
  /**
   * Removes the given element from the EndorsementForms array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromEndorsementForms(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Locations array. This is achieved by marking the element for removal.
   */
  public void removeFromLocations(entity.PASLocation element);
  
  
  /**
   * Removes the given element from the Locations array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLocations(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Persons array. This is achieved by marking the element for removal.
   */
  public void removeFromPersons(entity.PASPerson element);
  
  
  /**
   * Removes the given element from the Persons array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPersons(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the PolicyCoverages array. This is achieved by marking the element for removal.
   */
  public void removeFromPolicyCoverages(entity.PASCoverage element);
  
  
  /**
   * Removes the given element from the PolicyCoverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPolicyCoverages(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Vehicles array. This is achieved by marking the element for removal.
   */
  public void removeFromVehicles(entity.PASVehicle element);
  
  
  /**
   * Removes the given element from the Vehicles array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromVehicles(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the EffectiveFrom field.
   */
  public void setEffectiveFrom(java.util.Date value);
  
  
  /**
   * Sets the value of the EffectiveTo field.
   */
  public void setEffectiveTo(java.util.Date value);
  
  
  /**
   * Sets the value of the EndorsementForms field.
   */
  public void setEndorsementForms(entity.PASEndorsementForm[] value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the Locations field.
   */
  public void setLocations(entity.PASLocation[] value);
  
  
  /**
   * Sets the value of the Persons field.
   */
  public void setPersons(entity.PASPerson[] value);
  
  
  /**
   * Sets the value of the PolicyCoverages field.
   */
  public void setPolicyCoverages(entity.PASCoverage[] value);
  
  
  /**
   * Sets the value of the PolicyHolder field.
   */
  public void setPolicyHolder(java.lang.String value);
  
  
  /**
   * Sets the value of the PolicyNumber field.
   */
  public void setPolicyNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the PolicyType field.
   */
  public void setPolicyType(java.lang.String value);
  
  
  /**
   * Sets the value of the PrimaryAddress field.
   */
  public void setPrimaryAddress(entity.PASAddress value);
  
  
  public void setPrimaryAddressID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Vehicles field.
   */
  public void setVehicles(entity.PASVehicle[] value);
  
  
  
}