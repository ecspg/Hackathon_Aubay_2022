package com.hackaton.aubilousTouch.model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "tblChannel_Setting", schema = "dbo")
public class ChannelSetting {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_channel_setting;

    @Column(name = "ds_hostname")
    private String hostname;

    @Column(name = "id_channel_type")
    @Enumerated(EnumType.ORDINAL)
    private ChannelType channelType;

    @Column(name = "ds_key")
    private String key;

    @Column(name = "ds_secret")
    private String secret;

    @Column(name = "dt_created")
    private LocalDateTime dateCreated;

    @Column(name = "dt_deleted")
    private LocalDateTime dateDeleted;

    public Integer getId_channel_setting() {
        return id_channel_setting;
    }

    public void setId_channel_setting(Integer id_channel_setting) {
        this.id_channel_setting = id_channel_setting;
    }

    public String getHostname() {
        return hostname;
    }

    public void setHostname(String hostname) {
        this.hostname = hostname;
    }

    public ChannelType getChannelType() {
        return channelType;
    }

    public void setChannelType(ChannelType channelType) {
        this.channelType = channelType;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getSecret() {
        return secret;
    }

    public void setSecret(String secret) {
        this.secret = secret;
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
