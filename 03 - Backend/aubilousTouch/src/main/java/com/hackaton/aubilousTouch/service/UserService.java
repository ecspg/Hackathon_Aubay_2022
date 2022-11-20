package com.hackaton.aubilousTouch.service;

import com.hackaton.aubilousTouch.model.User;

import java.security.NoSuchAlgorithmException;
import java.util.List;

public interface UserService {
    public boolean validate(User user) throws NoSuchAlgorithmException;
    public List<User> findAll();

    public List<User> findByLogin(String login);

    List<User> findByLoginAndEmail(String login, String email);
}
