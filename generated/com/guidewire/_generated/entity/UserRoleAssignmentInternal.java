package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "UserRoleAssignment.eti;UserRoleAssignment.eix;UserRoleAssignment.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface UserRoleAssignmentInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.UserRoleAssignmentDelegateInternal, com.guidewire._generated.entity.EventAwareInternal {
  java.lang.String USERROLEASSIGNMENTADDED_EVENT = "UserRoleAssignmentAdded";
  
  java.lang.String USERROLEASSIGNMENTCHANGED_EVENT = "UserRoleAssignmentChanged";
  
  java.lang.String USERROLEASSIGNMENTREMOVED_EVENT = "UserRoleAssignmentRemoved";
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  
}