package com.hackaton.aubilousTouch.model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "tblContact_Information", schema = "dbo")
public class ContactInformation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_contact_information;

    @ManyToOne
    private Contact contact;

    @ManyToOne
    private User userCreated;

    @ManyToOne
    private User userDeleted;

    @Column(name = "id_channel_type")
    @Enumerated(EnumType.ORDINAL)
    private ChannelType channelType;

    @Column(name = "ds_contact_information")
    private String contactInformation;

    @Column(name = "dt_created")
    private LocalDateTime dateCreated;

    @Column(name = "dt_deleted")
    private LocalDateTime dateDeleted;

    public Integer getId_contact_information() {
        return id_contact_information;
    }

    public void setId_contact_information(Integer id_contact_information) {
        this.id_contact_information = id_contact_information;
    }

    public Contact getContact() {
        return contact;
    }

    public void setContact(Contact contact) {
        this.contact = contact;
    }

    public User getUserCreated() {
        return userCreated;
    }

    public void setUserCreated(User userCreated) {
        this.userCreated = userCreated;
    }

    public User getUserDeleted() {
        return userDeleted;
    }

    public void setUserDeleted(User userDeleted) {
        this.userDeleted = userDeleted;
    }

    public ChannelType getChannelType() {
        return channelType;
    }

    public void setChannelType(ChannelType channelType) {
        this.channelType = channelType;
    }

    public String getContactInformation() {
        return contactInformation;
    }

    public void setContactInformation(String contactInformation) {
        this.contactInformation = contactInformation;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
    }

    public LocalDateTime getDateDeleted() {
        return dateDeleted;
    }

    public void setDateDeleted(LocalDateTime dateDeleted) {
        this.dateDeleted = dateDeleted;
    }
}
