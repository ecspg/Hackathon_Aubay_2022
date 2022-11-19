package com.hackaton.aubilousTouch.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_user;

    @Column(name = "ds_login")
    private String login;

    @Column(name = "ds_name")
    private String name;

    @Column(name = "ds_email")
    private String email;

    @Column(name = "dt_created")
    private LocalDate creationDate;

    @Column(name = "ds_deleted")
    private LocalDate deletionDate;

    @Column(name = "hs_password")
    private String password;

    public Integer getId_user() {
        return id_user;
    }

    public void setId_user(Integer id) {
        this.id_user = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDate creationDate) {
        this.creationDate = creationDate;
    }

    public LocalDate getDeletionDate() {
        return deletionDate;
    }

    public void setDeletionDate(LocalDate deletionDate) {
        this.deletionDate = deletionDate;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
