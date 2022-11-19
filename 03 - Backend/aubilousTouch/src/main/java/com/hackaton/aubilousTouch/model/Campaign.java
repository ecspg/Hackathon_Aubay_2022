package com.hackaton.aubilousTouch.model;

import java.time.LocalDateTime;

public class Campaign {

    private Integer id;

    private String name;


    private String tittle;

    private CampainStatus campainStatus;

    private User userCreated;

    private User userDeleted;

    private String description;

    private LocalDateTime scheduledBegin;

    private LocalDateTime scheduledEnd;

    private LocalDateTime dateCreated;

    private LocalDateTime dateDeleted;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTittle() {
        return tittle;
    }

    public void setTittle(String tittle) {
        this.tittle = tittle;
    }

    public CampainStatus getCampainStatus() {
        return campainStatus;
    }

    public void setCampainStatus(CampainStatus campainStatus) {
        this.campainStatus = campainStatus;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getScheduledBegin() {
        return scheduledBegin;
    }

    public void setScheduledBegin(LocalDateTime scheduledBegin) {
        this.scheduledBegin = scheduledBegin;
    }

    public LocalDateTime getScheduledEnd() {
        return scheduledEnd;
    }

    public void setScheduledEnd(LocalDateTime scheduledEnd) {
        this.scheduledEnd = scheduledEnd;
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
