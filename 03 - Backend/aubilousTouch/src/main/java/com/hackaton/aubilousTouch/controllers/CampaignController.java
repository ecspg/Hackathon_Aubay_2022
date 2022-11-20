package com.hackaton.aubilousTouch.controllers;

import com.fasterxml.jackson.databind.util.JSONPObject;
import com.hackaton.aubilousTouch.model.Campaign;
import com.hackaton.aubilousTouch.service.CampaignService;
import com.hackaton.aubilousTouch.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.websocket.server.PathParam;
import java.util.List;

@RestController
@RequestMapping("/api/v1/campaign/")
public class CampaignController {

    @Autowired
    private CampaignService campaignService;

    @Autowired
    private EmailService emailService;

    @GetMapping("/findAll")
    public List<Campaign> findAll() {
        return campaignService.findAll();
    }

    @GetMapping("{id}")
    public Campaign findById(@PathVariable Integer id) {
        return campaignService.findById(id);
    }

    @PostMapping("/send")
    public void send(@RequestBody Campaign campaign) {
        sendWhatAppMessage();
        sendEmail();
    }

    private void sendEmail() {
        emailService.sendSimpleMessage("galvaoazevedod@gmail.com", "Teste Hackaton 2022", "Isso aqui é só um teste");
    }

    private static void sendWhatAppMessage() {
        //        String url = "https://api.green-api.com/waInstance1101772525/SendMessage/487d2d8fbff14b198caaaa64021b1db95f6df0f4a6cb416b91/";
        RestTemplate restTemplate = new RestTemplate();
//        String url = "https://pokeapi.co/api/v2/pokemon/ditto";
        String url = "https://f9d93a32-e8ec-4dfa-b6c0-b144f43da7d2.mock.pstmn.io/danielAubayhackaton/aoi/v1/teste";
        String apiKey = "PMAK-637a59e210c5602810ad8b5a-d49981a8b9a61cb334a763f519331b6d67";
//        HttpEntity<String> httpEntity = new HttpEntity<>(getBody());
//        Object response = restTemplate.postForObject(url, getBody(), String.class);
//        System.out.println(response);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        headers.set("X-Api-Key", apiKey);

        MultiValueMap<String, String> map= new LinkedMultiValueMap<>();
        map.add("chatId", "351914078104@c.us");
        map.add("message", "Test Campaign with Aubilous Touch");

        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<MultiValueMap<String, String>>(map, headers);

//        ResponseEntity<String> response = restTemplate.postForEntity( url, request , String.class );
//        ResponseEntity<String> response = restTemplate.getForEntity( url, String.class );
//        System.out.println(response);
    }

    private String getBody() {
        return "{" +
                "\"chatId\": \"351914078104@c.us\"," +
                "\"message\": \"Test Campaign with Aubilous Touch\"" +
                "}";
    }
}
