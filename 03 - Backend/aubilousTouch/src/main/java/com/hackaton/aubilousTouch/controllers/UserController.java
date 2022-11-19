package com.hackaton.aubilousTouch.controllers;

import com.hackaton.aubilousTouch.model.User;
import com.hackaton.aubilousTouch.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/findAll")
    public List<String> findAll() {
        return userService.findAll().stream().map(User::getName).collect(Collectors.toList());
    }
}
