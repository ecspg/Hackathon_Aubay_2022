package com.hackaton.aubilousTouch.repository;

import com.hackaton.aubilousTouch.model.User;

import java.util.List;

public interface UserRepository {
    public List<User> findAll();
}
