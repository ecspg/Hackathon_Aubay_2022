package com.hackaton.aubilousTouch.model;

public enum ChannelType {

    EMAIL(0, "Email"),
    WHATS_APP(1, "Whats App"),
    SMS(2, "SMS"),
    TEAMS(3, "Teams"),
    SIGNAL(4, "Signal"),
    TELEGRAM(5, "Telegram");

    ChannelType(Integer id_channel_type, String description) {
        this.id_channel_type = id_channel_type;
        this.description = description;
    }

    private Integer id_channel_type;

    private String description;

}
