package com.hackaton.aubilousTouch.service;

import com.hackaton.aubilousTouch.model.Campaign;

import java.util.List;

public interface CampaignService {
    List<Campaign> findAll();

    Campaign findById(Integer id);
}
