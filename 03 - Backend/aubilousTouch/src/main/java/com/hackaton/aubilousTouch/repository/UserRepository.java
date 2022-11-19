package com.hackaton.aubilousTouch.repository;

import com.hackaton.aubilousTouch.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
