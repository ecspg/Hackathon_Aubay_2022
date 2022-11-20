package com.hackaton.aubilousTouch.model;

public enum CampaignStatus {

    DRAFT(0, "Draft"),
    SCHEDULED(1, "Scheduled"),
    RUNNING(2, "Running"),
    COMPLETED(3, "Completed"),
    CANCELED(4, "Canceled"),
    CANCELED_AGAIN(5, "Canceled Again");

    CampaignStatus(Integer id_campaign_status, String name) {
        this.id_campaign_status = id_campaign_status;
        this.name = name;
    }

    private Integer id_campaign_status;

    private String name;
}
