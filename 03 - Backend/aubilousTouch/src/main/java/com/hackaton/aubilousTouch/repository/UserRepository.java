package com.hackaton.aubilousTouch.repository;

import com.hackaton.aubilousTouch.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {

    public List<User> findByLoginAndPassword(String login, String password);

    public List<User> findByLogin(String login);

    List<User> findByLoginAndEmail(String login, String email);
}
