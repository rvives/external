package entity;

/**
 * PASPolicy
 * Legacy system policy
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PASPolicy.eti;PASPolicy.eix;PASPolicy.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "PASPolicy")
public class PASPolicy extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.PASPolicy> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.PASPolicy>("entity.PASPolicy");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EFFECTIVEFROM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EffectiveFrom");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EFFECTIVETO_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EffectiveTo");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> ENDORSEMENTFORMS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "EndorsementForms");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LOADCOMMANDID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LoadCommandID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> LOCATIONS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Locations");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> PERSONS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Persons");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> POLICYCOVERAGES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "PolicyCoverages");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POLICYHOLDER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PolicyHolder");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POLICYNUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PolicyNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POLICYTYPE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PolicyType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> PRIMARYADDRESS_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "PrimaryAddress");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> VEHICLES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Vehicles");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.PASPolicyInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public PASPolicy()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public PASPolicy(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected PASPolicy(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.PASPolicyInternal __createInternalInterface() {
    return new _Internal();
  }
  
  protected final com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
    if(_delegateManager == null) {
      _delegateManager  =  com.guidewire.pl.persistence.code.DelegateLoader.newInstance(this, __getDelegateMap());
    };
    return _delegateManager;
  }
  
  protected com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap() {
    return DELEGATE_MAP;
  }
  
  protected com.guidewire._generated.entity.PASPolicyInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Adds the given element to the EndorsementForms array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToEndorsementForms(entity.PASEndorsementForm element) {
    __getInternalInterface().addArrayElement(ENDORSEMENTFORMS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Locations array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLocations(entity.PASLocation element) {
    __getInternalInterface().addArrayElement(LOCATIONS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Persons array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPersons(entity.PASPerson element) {
    __getInternalInterface().addArrayElement(PERSONS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the PolicyCoverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPolicyCoverages(entity.PASCoverage element) {
    __getInternalInterface().addArrayElement(POLICYCOVERAGES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Vehicles array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToVehicles(entity.PASVehicle element) {
    __getInternalInterface().addArrayElement(VEHICLES_PROP.get(), element);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Gets the value of the CreateTime field.
   * Timestamp when the object was created
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCreateTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(CREATETIME_PROP.get());
  }
  
  /**
   * Gets the value of the CreateUser field.
   * User who created the object
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getCreateUser() {
    return (entity.User)__getInternalInterface().getFieldValue(CREATEUSER_PROP.get());
  }
  
  /**
   * Gets the value of the EffectiveFrom field.
   * Date from which policy is effective
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEffectiveFrom() {
    return (java.util.Date)__getInternalInterface().getFieldValue(EFFECTIVEFROM_PROP.get());
  }
  
  /**
   * Gets the value of the EffectiveTo field.
   * Date until which policy is effective
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEffectiveTo() {
    return (java.util.Date)__getInternalInterface().getFieldValue(EFFECTIVETO_PROP.get());
  }
  
  /**
   * Gets the value of the EndorsementForms field.
   * Endorsement forms
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PASEndorsementForm[] getEndorsementForms() {
    return (entity.PASEndorsementForm[])__getInternalInterface().getFieldValue(ENDORSEMENTFORMS_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(LOADCOMMANDID_PROP.get());
  }
  
  /**
   * Gets the value of the Locations field.
   * Locations
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PASLocation[] getLocations() {
    return (entity.PASLocation[])__getInternalInterface().getFieldValue(LOCATIONS_PROP.get());
  }
  
  /**
   * Gets the value of the Persons field.
   * Persons
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PASPerson[] getPersons() {
    return (entity.PASPerson[])__getInternalInterface().getFieldValue(PERSONS_PROP.get());
  }
  
  /**
   * Gets the value of the PolicyCoverages field.
   * Policy coverages
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PASCoverage[] getPolicyCoverages() {
    return (entity.PASCoverage[])__getInternalInterface().getFieldValue(POLICYCOVERAGES_PROP.get());
  }
  
  /**
   * Gets the value of the PolicyHolder field.
   * Name of policy holder
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPolicyHolder() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POLICYHOLDER_PROP.get());
  }
  
  /**
   * Gets the value of the PolicyNumber field.
   * Unique policy number
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPolicyNumber() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POLICYNUMBER_PROP.get());
  }
  
  /**
   * Gets the value of the PolicyType field.
   * Type of policy
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPolicyType() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POLICYTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the PrimaryAddress field.
   * Policy address
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PASAddress getPrimaryAddress() {
    return (entity.PASAddress)__getInternalInterface().getFieldValue(PRIMARYADDRESS_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getRetiredValue() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(RETIREDVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the UpdateTime field.
   * Timestamp when the object was last updated
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getUpdateTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(UPDATETIME_PROP.get());
  }
  
  /**
   * Gets the value of the UpdateUser field.
   * User who last updated the object
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getUpdateUser() {
    return (entity.User)__getInternalInterface().getFieldValue(UPDATEUSER_PROP.get());
  }
  
  /**
   * Gets the value of the Vehicles field.
   * Vehicles
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PASVehicle[] getVehicles() {
    return (entity.PASVehicle[])__getInternalInterface().getFieldValue(VEHICLES_PROP.get());
  }
  
  /**
   * 
   * @return true if this bean is to be inserted into the database when the bundle is committed.
   */
  public boolean isNew() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).isNew();
  }
  
  /**
   * 
   * @return True if the object was created by importation from an external system,
   *         False if it was created internally. Note that this refers to the currently
   *         instantiated object, not the data it represents
   */
  public boolean isNewlyImported() {
    return ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).isNewlyImported();
  }
  
  /**
   * 
   * @return True if the object has been retired from active use, false if the
   *         object is active.  Retireable objects are never deleted from a
   *         database table, instead they are retired by setting the retired
   *         column to the same value as the ID of the object.
   */
  public java.lang.Boolean isRetired() {
    return ((com.guidewire.pl.domain.persistence.core.RetireablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods")).isRetired();
  }
  
  /**
   * Refreshes this bean with the latest database version.
   * <p/>
   * This method does nothing if the bean is edited or inserted in its current bundle. If the bean
   * no longer exists in the database, then <tt>null</tt> is returned. If the bean has been
   * evicted from its bundle, then <tt>null</tt> is returned. Otherwise, this bean is returned, with its contents
   * updated.
   */
  public entity.KeyableBean refresh() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).refresh();
  }
  
  /**
   * Marks this bean for remove. A bean marked for remove will be deleted or retired when the transaction
   * is committed. Once a bean is marked for remove, it cannot be switched to update, edit, or read.
   * <p>
   * WARNING: This method is designed for simple custom entities which are normally not
   * associated with other entities. Undesirable results may occur when used on out-of-box entities.
   */
  public void remove() {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).remove();
  }
  
  /**
   * Removes the given element from the EndorsementForms array. This is achieved by marking the element for removal.
   */
  public void removeFromEndorsementForms(entity.PASEndorsementForm element) {
    __getInternalInterface().removeArrayElement(ENDORSEMENTFORMS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the EndorsementForms array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromEndorsementForms(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(ENDORSEMENTFORMS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the Locations array. This is achieved by marking the element for removal.
   */
  public void removeFromLocations(entity.PASLocation element) {
    __getInternalInterface().removeArrayElement(LOCATIONS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Locations array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLocations(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(LOCATIONS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the Persons array. This is achieved by marking the element for removal.
   */
  public void removeFromPersons(entity.PASPerson element) {
    __getInternalInterface().removeArrayElement(PERSONS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Persons array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPersons(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(PERSONS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the PolicyCoverages array. This is achieved by marking the element for removal.
   */
  public void removeFromPolicyCoverages(entity.PASCoverage element) {
    __getInternalInterface().removeArrayElement(POLICYCOVERAGES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the PolicyCoverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPolicyCoverages(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(POLICYCOVERAGES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the Vehicles array. This is achieved by marking the element for removal.
   */
  public void removeFromVehicles(entity.PASVehicle element) {
    __getInternalInterface().removeArrayElement(VEHICLES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Vehicles array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromVehicles(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(VEHICLES_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CreateTime field.
   */
  private void setCreateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(CREATETIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CreateUser field.
   */
  private void setCreateUser(entity.User value) {
    __getInternalInterface().setFieldValue(CREATEUSER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the EffectiveFrom field.
   */
  public void setEffectiveFrom(java.util.Date value) {
    __getInternalInterface().setFieldValue(EFFECTIVEFROM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the EffectiveTo field.
   */
  public void setEffectiveTo(java.util.Date value) {
    __getInternalInterface().setFieldValue(EFFECTIVETO_PROP.get(), value);
  }
  
  /**
   * Sets the value of the EndorsementForms field.
   */
  public void setEndorsementForms(entity.PASEndorsementForm[] value) {
    __getInternalInterface().setFieldValue(ENDORSEMENTFORMS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  private void setLoadCommandID(java.lang.Long value) {
    __getInternalInterface().setFieldValue(LOADCOMMANDID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Locations field.
   */
  public void setLocations(entity.PASLocation[] value) {
    __getInternalInterface().setFieldValue(LOCATIONS_PROP.get(), value);
  }
  
  /**
   * Set a flag denoting that the currently instantiated object has been newly imported from
   * an external source
   * @param newlyImported 
   */
  public void setNewlyImported(boolean newlyImported) {
    ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
  }
  
  /**
   * Sets the value of the Persons field.
   */
  public void setPersons(entity.PASPerson[] value) {
    __getInternalInterface().setFieldValue(PERSONS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PolicyCoverages field.
   */
  public void setPolicyCoverages(entity.PASCoverage[] value) {
    __getInternalInterface().setFieldValue(POLICYCOVERAGES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PolicyHolder field.
   */
  public void setPolicyHolder(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(POLICYHOLDER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PolicyNumber field.
   */
  public void setPolicyNumber(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(POLICYNUMBER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PolicyType field.
   */
  public void setPolicyType(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(POLICYTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PrimaryAddress field.
   */
  public void setPrimaryAddress(entity.PASAddress value) {
    __getInternalInterface().setFieldValue(PRIMARYADDRESS_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the RetiredValue field.
   */
  private void setRetiredValue(java.lang.Long value) {
    __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UpdateTime field.
   */
  private void setUpdateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(UPDATETIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UpdateUser field.
   */
  private void setUpdateUser(entity.User value) {
    __getInternalInterface().setFieldValue(UPDATEUSER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Vehicles field.
   */
  public void setVehicles(entity.PASVehicle[] value) {
    __getInternalInterface().setFieldValue(VEHICLES_PROP.get(), value);
  }
  
  /**
   * Set's the version of the bean to the next value (i.e. the bean version original value+1)
   * Multiple calls to this method on the same bean will result in the same value being used
   * for the version (i.e. it is idempotent).
   * 
   * Calling this method will force the bean to be written to the database and participate fully
   * in the commit cycle e.g. pre-update rules will be run, etc.
   */
  public void touch() {
    ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).touch();
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.PASPolicyInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.PASPolicy.this.__getDelegateManager();
    }
    
    /**
     * Adds the given element to the EndorsementForms array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToEndorsementForms(entity.PASEndorsementForm element) {
      __getInternalInterface().addArrayElement(ENDORSEMENTFORMS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Locations array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToLocations(entity.PASLocation element) {
      __getInternalInterface().addArrayElement(LOCATIONS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Persons array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToPersons(entity.PASPerson element) {
      __getInternalInterface().addArrayElement(PERSONS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the PolicyCoverages array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToPolicyCoverages(entity.PASCoverage element) {
      __getInternalInterface().addArrayElement(POLICYCOVERAGES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Vehicles array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToVehicles(entity.PASVehicle element) {
      __getInternalInterface().addArrayElement(VEHICLES_PROP.get(), element);
    }
    
    public boolean alwaysReserveID() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).alwaysReserveID();
    }
    
    public void assignPermanentId(gw.pl.persistence.core.Key id) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).assignPermanentId(id);
    }
    
    public java.lang.Integer calculateNextVersion() {
      return ((com.guidewire.pl.domain.persistence.core.impl.VersionableInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal")).calculateNextVersion();
    }
    
    public java.util.List<entity.KeyableBean> cascadeDelete() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cascadeDelete();
    }
    
    public entity.KeyableBean cloneBeanForBundleTransfer() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cloneBeanForBundleTransfer();
    }
    
    public entity.KeyableBean downcast(gw.entity.IEntityType newSubtype) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).downcast(newSubtype);
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateInsertEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateInsertEventsInternal();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateRemoveEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateRemoveEventsInternal();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateUpdateEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateUpdateEventsInternal();
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Gets the value of the CreateTime field.
     * Timestamp when the object was created
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getCreateTime() {
      return (java.util.Date)__getInternalInterface().getFieldValue(CREATETIME_PROP.get());
    }
    
    /**
     * Gets the value of the CreateUser field.
     * User who created the object
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getCreateUser() {
      return (entity.User)__getInternalInterface().getFieldValue(CREATEUSER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getCreateUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(CREATEUSER_PROP.get());
    }
    
    /**
     * Gets the value of the EffectiveFrom field.
     * Date from which policy is effective
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getEffectiveFrom() {
      return (java.util.Date)__getInternalInterface().getFieldValue(EFFECTIVEFROM_PROP.get());
    }
    
    /**
     * Gets the value of the EffectiveTo field.
     * Date until which policy is effective
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getEffectiveTo() {
      return (java.util.Date)__getInternalInterface().getFieldValue(EFFECTIVETO_PROP.get());
    }
    
    /**
     * Gets the value of the EndorsementForms field.
     * Endorsement forms
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PASEndorsementForm[] getEndorsementForms() {
      return (entity.PASEndorsementForm[])__getInternalInterface().getFieldValue(ENDORSEMENTFORMS_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.persistence.core.Key getID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
    }
    
    public gw.pl.persistence.core.Key getIdToSetForForeignKey(gw.entity.ILinkPropertyInfo link) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).getIdToSetForForeignKey(link);
    }
    
    /**
     * Gets the value of the LoadCommandID field.
     * LoadCommand for load where row was created. If not null this object was loaded via the loader.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getLoadCommandID() {
      return (java.lang.Long)__getInternalInterface().getFieldValue(LOADCOMMANDID_PROP.get());
    }
    
    /**
     * Gets the value of the Locations field.
     * Locations
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PASLocation[] getLocations() {
      return (entity.PASLocation[])__getInternalInterface().getFieldValue(LOCATIONS_PROP.get());
    }
    
    /**
     * Gets the value of the Persons field.
     * Persons
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PASPerson[] getPersons() {
      return (entity.PASPerson[])__getInternalInterface().getFieldValue(PERSONS_PROP.get());
    }
    
    /**
     * Gets the value of the PolicyCoverages field.
     * Policy coverages
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PASCoverage[] getPolicyCoverages() {
      return (entity.PASCoverage[])__getInternalInterface().getFieldValue(POLICYCOVERAGES_PROP.get());
    }
    
    /**
     * Gets the value of the PolicyHolder field.
     * Name of policy holder
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPolicyHolder() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POLICYHOLDER_PROP.get());
    }
    
    /**
     * Gets the value of the PolicyNumber field.
     * Unique policy number
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPolicyNumber() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POLICYNUMBER_PROP.get());
    }
    
    /**
     * Gets the value of the PolicyType field.
     * Type of policy
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPolicyType() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POLICYTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the PrimaryAddress field.
     * Policy address
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PASAddress getPrimaryAddress() {
      return (entity.PASAddress)__getInternalInterface().getFieldValue(PRIMARYADDRESS_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getPrimaryAddressID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(PRIMARYADDRESS_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getRetiredValue() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).getRetiredValue();
    }
    
    /**
     * Gets the value of the UpdateTime field.
     * Timestamp when the object was last updated
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getUpdateTime() {
      return (java.util.Date)__getInternalInterface().getFieldValue(UPDATETIME_PROP.get());
    }
    
    /**
     * Gets the value of the UpdateUser field.
     * User who last updated the object
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getUpdateUser() {
      return (entity.User)__getInternalInterface().getFieldValue(UPDATEUSER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getUpdateUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(UPDATEUSER_PROP.get());
    }
    
    /**
     * Gets the value of the Vehicles field.
     * Vehicles
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PASVehicle[] getVehicles() {
      return (entity.PASVehicle[])__getInternalInterface().getFieldValue(VEHICLES_PROP.get());
    }
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
    }
    
    /**
     * 
     * @return true if this bean is to be inserted into the database when the bundle is committed.
     */
    public boolean isNew() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).isNew();
    }
    
    /**
     * 
     * @return True if the object was created by importation from an external system,
     *         False if it was created internally. Note that this refers to the currently
     *         instantiated object, not the data it represents
     */
    public boolean isNewlyImported() {
      return ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).isNewlyImported();
    }
    
    public boolean isOkToRetire() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).isOkToRetire();
    }
    
    /**
     * 
     * @return True if the object has been retired from active use, false if the
     *         object is active.  Retireable objects are never deleted from a
     *         database table, instead they are retired by setting the retired
     *         column to the same value as the ID of the object.
     */
    public java.lang.Boolean isRetired() {
      return ((com.guidewire.pl.domain.persistence.core.RetireablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods")).isRetired();
    }
    
    public boolean isTemporary() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).isTemporary();
    }
    
    public entity.KeyableBean overrideBundleAdd(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleAdd(bundle);
    }
    
    public entity.KeyableBean overrideBundleRemove(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleRemove(bundle);
    }
    
    public void putInBundle() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).putInBundle();
    }
    
    /**
     * Refreshes this bean with the latest database version.
     * <p/>
     * This method does nothing if the bean is edited or inserted in its current bundle. If the bean
     * no longer exists in the database, then <tt>null</tt> is returned. If the bean has been
     * evicted from its bundle, then <tt>null</tt> is returned. Otherwise, this bean is returned, with its contents
     * updated.
     */
    public entity.KeyableBean refresh() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).refresh();
    }
    
    public entity.KeyableBean reload(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).reload(bundle);
    }
    
    /**
     * Marks this bean for remove. A bean marked for remove will be deleted or retired when the transaction
     * is committed. Once a bean is marked for remove, it cannot be switched to update, edit, or read.
     * <p>
     * WARNING: This method is designed for simple custom entities which are normally not
     * associated with other entities. Undesirable results may occur when used on out-of-box entities.
     */
    public void remove() {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).remove();
    }
    
    /**
     * Removes the given element from the EndorsementForms array. This is achieved by marking the element for removal.
     */
    public void removeFromEndorsementForms(entity.PASEndorsementForm element) {
      __getInternalInterface().removeArrayElement(ENDORSEMENTFORMS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the EndorsementForms array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromEndorsementForms(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(ENDORSEMENTFORMS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Locations array. This is achieved by marking the element for removal.
     */
    public void removeFromLocations(entity.PASLocation element) {
      __getInternalInterface().removeArrayElement(LOCATIONS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Locations array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromLocations(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(LOCATIONS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Persons array. This is achieved by marking the element for removal.
     */
    public void removeFromPersons(entity.PASPerson element) {
      __getInternalInterface().removeArrayElement(PERSONS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Persons array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromPersons(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(PERSONS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the PolicyCoverages array. This is achieved by marking the element for removal.
     */
    public void removeFromPolicyCoverages(entity.PASCoverage element) {
      __getInternalInterface().removeArrayElement(POLICYCOVERAGES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the PolicyCoverages array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromPolicyCoverages(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(POLICYCOVERAGES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Vehicles array. This is achieved by marking the element for removal.
     */
    public void removeFromVehicles(entity.PASVehicle element) {
      __getInternalInterface().removeArrayElement(VEHICLES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Vehicles array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromVehicles(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(VEHICLES_PROP.get(), elementID);
    }
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CreateTime field.
     */
    public void setCreateTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(CREATETIME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CreateUser field.
     */
    public void setCreateUser(entity.User value) {
      __getInternalInterface().setFieldValue(CREATEUSER_PROP.get(), value);
    }
    
    public void setCreateUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(CREATEUSER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the EffectiveFrom field.
     */
    public void setEffectiveFrom(java.util.Date value) {
      __getInternalInterface().setFieldValue(EFFECTIVEFROM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the EffectiveTo field.
     */
    public void setEffectiveTo(java.util.Date value) {
      __getInternalInterface().setFieldValue(EFFECTIVETO_PROP.get(), value);
    }
    
    /**
     * Sets the value of the EndorsementForms field.
     */
    public void setEndorsementForms(entity.PASEndorsementForm[] value) {
      __getInternalInterface().setFieldValue(ENDORSEMENTFORMS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Sets the value of the LoadCommandID field.
     */
    public void setLoadCommandID(java.lang.Long value) {
      __getInternalInterface().setFieldValue(LOADCOMMANDID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Locations field.
     */
    public void setLocations(entity.PASLocation[] value) {
      __getInternalInterface().setFieldValue(LOCATIONS_PROP.get(), value);
    }
    
    /**
     * Set a flag denoting that the currently instantiated object has been newly imported from
     * an external source
     * @param newlyImported 
     */
    public void setNewlyImported(boolean newlyImported) {
      ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
    }
    
    /**
     * Sets the value of the Persons field.
     */
    public void setPersons(entity.PASPerson[] value) {
      __getInternalInterface().setFieldValue(PERSONS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PolicyCoverages field.
     */
    public void setPolicyCoverages(entity.PASCoverage[] value) {
      __getInternalInterface().setFieldValue(POLICYCOVERAGES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PolicyHolder field.
     */
    public void setPolicyHolder(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(POLICYHOLDER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PolicyNumber field.
     */
    public void setPolicyNumber(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(POLICYNUMBER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PolicyType field.
     */
    public void setPolicyType(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(POLICYTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PrimaryAddress field.
     */
    public void setPrimaryAddress(entity.PASAddress value) {
      __getInternalInterface().setFieldValue(PRIMARYADDRESS_PROP.get(), value);
    }
    
    public void setPrimaryAddressID(gw.pl.persistence.core.Key value) {
      setFieldValue(PRIMARYADDRESS_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    public void setRetired() {
      ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).setRetired();
    }
    
    /**
     * Sets the value of the RetiredValue field.
     */
    public void setRetiredValue(java.lang.Long value) {
      __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UpdateTime field.
     */
    public void setUpdateTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(UPDATETIME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UpdateUser field.
     */
    public void setUpdateUser(entity.User value) {
      __getInternalInterface().setFieldValue(UPDATEUSER_PROP.get(), value);
    }
    
    public void setUpdateUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(UPDATEUSER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Vehicles field.
     */
    public void setVehicles(entity.PASVehicle[] value) {
      __getInternalInterface().setFieldValue(VEHICLES_PROP.get(), value);
    }
    
    /**
     * Set's the version of the bean to the next value (i.e. the bean version original value+1)
     * Multiple calls to this method on the same bean will result in the same value being used
     * for the version (i.e. it is idempotent).
     * 
     * Calling this method will force the bean to be written to the database and participate fully
     * in the commit cycle e.g. pre-update rules will be run, etc.
     */
    public void touch() {
      ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).touch();
    }
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.PASPolicy.class, config);
    com.guidewire._generated.entity.PASPolicyInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.PASPolicy, com.guidewire._generated.entity.PASPolicyInternal>() {
      public java.lang.Object getImplementation(entity.PASPolicy bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.PASPolicyInternal getInternalInterface(entity.PASPolicy bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.PASPolicy newEmptyInstance() {
        return new entity.PASPolicy((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}