package com.hackaton.aubilousTouch.repository;

import com.hackaton.aubilousTouch.model.User;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("userRepository")
public class UserRepositoryImpl implements UserRepository {

    public List<User> findAll() {
        User user = new User();

        user.setName("User admin");
        user.setPassword("admin");
        user.setLogin("admin");

        return List.of(user);
    }
}
