package com.hackaton.aubilousTouch.repository;

import com.hackaton.aubilousTouch.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, Integer> {
}
