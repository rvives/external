package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "LegalReportRequest.eti;LegalReportRequest.eix;LegalReportRequest.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface LegalReportRequestInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the ContactID field.
   * ID of contact that the report is about
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getContactID();
  
  
  /**
   * Gets the value of the ContactInfo field.
   * Some information about the contact, which is used to determine how reports are generated
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getContactInfo();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the MessageID field.
   * ID of message
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getMessageID();
  
  
  /**
   * Gets the value of the Processed field.
   * Has the report been processed yet?
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isProcessed();
  
  
  /**
   * Sets the value of the ContactID field.
   */
  public void setContactID(java.lang.String value);
  
  
  /**
   * Sets the value of the ContactInfo field.
   */
  public void setContactInfo(java.lang.String value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the MessageID field.
   */
  public void setMessageID(java.lang.String value);
  
  
  /**
   * Sets the value of the Processed field.
   */
  public void setProcessed(java.lang.Boolean value);
  
  
  
}