package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PASCoverage.eti;PASCoverage.eix;PASCoverage.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PASCoverageInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the CoverageName field.
   * Coverage name
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCoverageName();
  
  
  /**
   * Gets the value of the CoveredLocation field.
   * Covered location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PASLocation getCoveredLocation();
  
  
  public gw.pl.persistence.core.Key getCoveredLocationID();
  
  
  /**
   * Gets the value of the CoveredVehicle field.
   * Covered vehicle
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PASVehicle getCoveredVehicle();
  
  
  public gw.pl.persistence.core.Key getCoveredVehicleID();
  
  
  /**
   * Gets the value of the Deductible field.
   * Deductible, if any
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getDeductible();
  
  
  /**
   * Gets the value of the LimitPerIncident field.
   * Limit per incident, if any
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getLimitPerIncident();
  
  
  /**
   * Gets the value of the LimitPerYear field.
   * Limit per year, if any
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getLimitPerYear();
  
  
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
   * Sets the value of the CoverageName field.
   */
  public void setCoverageName(java.lang.String value);
  
  
  /**
   * Sets the value of the CoveredLocation field.
   */
  public void setCoveredLocation(entity.PASLocation value);
  
  
  public void setCoveredLocationID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the CoveredVehicle field.
   */
  public void setCoveredVehicle(entity.PASVehicle value);
  
  
  public void setCoveredVehicleID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Deductible field.
   */
  public void setDeductible(java.lang.Integer value);
  
  
  /**
   * Sets the value of the LimitPerIncident field.
   */
  public void setLimitPerIncident(java.lang.Integer value);
  
  
  /**
   * Sets the value of the LimitPerYear field.
   */
  public void setLimitPerYear(java.lang.Integer value);
  
  
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