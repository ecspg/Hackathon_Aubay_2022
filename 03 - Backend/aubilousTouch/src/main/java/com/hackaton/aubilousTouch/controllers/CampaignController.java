package com.hackaton.aubilousTouch.controllers;

import com.hackaton.aubilousTouch.model.Campaign;
import com.hackaton.aubilousTouch.service.CampaignService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.websocket.server.PathParam;
import java.util.List;

@RestController
@RequestMapping("/api/v1/campaign/")
public class CampaignController {

    @Autowired
    private CampaignService campaignService;

    @GetMapping("/findAll")
    public List<Campaign> findAll() {
        return campaignService.findAll();
    }

    @GetMapping("{id}")
    public Campaign findById(@PathVariable Integer id) {
        return campaignService.findById(id);
    }
}
