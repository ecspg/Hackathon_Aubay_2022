package com.hackaton.aubilousTouch.service;

import com.hackaton.aubilousTouch.model.Campaign;
import com.hackaton.aubilousTouch.repository.CampaignRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("campaignService")
public class CampaignServiceImpl implements CampaignService {

    @Autowired
    private CampaignRepository campaignRepository;

    @Override
    public List<Campaign> findAll(){
        return campaignRepository.findAll();
    }

    @Override
    public Campaign findById(Integer id) {
        return campaignRepository.findById(id).orElse(null);
    }
}
