package com.hackaton.aubilousTouch.controllers;

import com.hackaton.aubilousTouch.model.User;
import com.hackaton.aubilousTouch.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/user/")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/findAll")
    public List<User> findAll() {
        return userService.findAll();
    }

    @PostMapping("/validate")
    public boolean validate(@RequestBody User user) {
        try {
            return userService.validate(user);
        } catch (NoSuchAlgorithmException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
                    "Something went wrong. Contact the Hackaton green team.");
        }
    }

    @PostMapping("/findByLogin")
    public List<User> findByLogin(@RequestBody User user) {
        return userService.findByLogin(user.getLogin());
    }

    @PostMapping("/findByLoginAndEmail")
    public List<User> findByLoginAndEmail(@RequestBody User user) {
        return userService.findByLoginAndEmail(user.getLogin(), user.getEmail());
    }
}
