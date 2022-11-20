package com.hackaton.aubilousTouch.repository;

import com.hackaton.aubilousTouch.model.Campaign;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CampaignRepository extends JpaRepository<Campaign, Integer> {
}
