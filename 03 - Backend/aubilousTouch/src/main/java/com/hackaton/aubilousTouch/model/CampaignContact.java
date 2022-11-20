package com.hackaton.aubilousTouch.model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "tblCampaign_Contact", schema = "dbo")
public class CampaignContact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_campaign_contact;

    @ManyToOne
    private Campaign campaign;

    @Column(name = "id_channel_type")
    @Enumerated(EnumType.ORDINAL)
    private ChannelType channelType;

    @ManyToOne
    private Contact contact;

    @Column(name = "dt_created")
    private LocalDateTime dateCreated;

    public Integer getId_campaign_contact() {
        return id_campaign_contact;
    }

    public void setId_campaign_contact(Integer id_campaign_contact) {
        this.id_campaign_contact = id_campaign_contact;
    }

    public Campaign getCampaign() {
        return campaign;
    }

    public void setCampaign(Campaign campaign) {
        this.campaign = campaign;
    }

    public ChannelType getChannelType() {
        return channelType;
    }

    public void setChannelType(ChannelType channelType) {
        this.channelType = channelType;
    }

    public Contact getContact() {
        return contact;
    }

    public void setContact(Contact contact) {
        this.contact = contact;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
    }
}
