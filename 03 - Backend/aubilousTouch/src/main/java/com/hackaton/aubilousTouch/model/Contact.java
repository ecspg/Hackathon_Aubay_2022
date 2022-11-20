package com.hackaton.aubilousTouch.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "tblContact", schema = "dbo")
public class Contact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_contact;

    @Column(name = "ds_first_name")
    private String firstName;

//    @ManyToOne
//    private User userCreated;
//
//    @ManyToOne
//    private User userDeleted;

    @Column(name = "ds_middle_name")
    private String middleName;

    @Column(name = "ds_surname")
    private String surName;

    @Column(name = "dt_created")
    private LocalDateTime dateCreated;

    @Column(name = "dt_deleted")
    private LocalDateTime dateDeleted;

    @Column(name = "ds_internal_identification")
    private String internalIdentification;

    public Integer getId_contact() {
        return id_contact;
    }

    public void setId_contact(Integer id_contact) {
        this.id_contact = id_contact;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

//    public User getUserCreated() {
//        return userCreated;
//    }
//
//    public void setUserCreated(User userCreated) {
//        this.userCreated = userCreated;
//    }
//
//    public User getUserDeleted() {
//        return userDeleted;
//    }
//
//    public void setUserDeleted(User userDeleted) {
//        this.userDeleted = userDeleted;
//    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getSurName() {
        return surName;
    }

    public void setSurName(String surName) {
        this.surName = surName;
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

    public String getInternalIdentification() {
        return internalIdentification;
    }

    public void setInternalIdentification(String internalIdentification) {
        this.internalIdentification = internalIdentification;
    }
}
