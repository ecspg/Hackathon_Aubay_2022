package com.hackaton.aubilousTouch.controllers;

import com.hackaton.aubilousTouch.model.ChannelType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/v1/channel/")
public class ChannelController {

    @GetMapping("/findAll")
    public List<ChannelType> findAll() {
        return Arrays.asList(ChannelType.values());
    }
}
