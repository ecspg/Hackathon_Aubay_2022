package com.hackaton.aubilousTouch.model;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table (name = "tblCampaign", schema = "dbo")
public class Campaign {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_campaign;

    @Column(name = "ds_name")
    private String name;

    @Column(name = "ds_title")
    private String tittle;

    @Column(name = "id_campaign_status")
    @Enumerated(EnumType.ORDINAL)
    private CampaignStatus campaignStatus;

//    @ManyToOne
//    private User userCreated;
//
//    @ManyToOne
//    private User userDeleted;

    @Column(name = "ds_description")
    private String description;

    @Column(name = "dt_scheduled_begin")
    private LocalDateTime scheduledBegin;

    @Column(name = "dt_scheduled_end")
    private LocalDateTime scheduledEnd;

    @Column(name = "dt_created")
    private LocalDateTime dateCreated;

    @Column(name = "dt_deleted")
    private LocalDateTime dateDeleted;

    @OneToMany(mappedBy = "campaign", cascade = CascadeType.ALL,
            fetch = FetchType.LAZY, orphanRemoval = true)
    private List<CampaignContact> campaignContacts;


    public Integer getId_campaign() {
        return id_campaign;
    }

    public void setId_campaign(Integer id_campaign) {
        this.id_campaign = id_campaign;
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

    public CampaignStatus getCampainStatus() {
        return campaignStatus;
    }

    public void setCampainStatus(CampaignStatus campaignStatus) {
        this.campaignStatus = campaignStatus;
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
