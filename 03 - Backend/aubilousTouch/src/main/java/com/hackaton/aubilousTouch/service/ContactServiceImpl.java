package com.hackaton.aubilousTouch.service;

import com.hackaton.aubilousTouch.model.Contact;
import com.hackaton.aubilousTouch.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("contactService")
public class ContactServiceImpl implements ContactService {

    @Autowired
    private ContactRepository contactRepository;

    @Override
    public List<Contact> findAll() {
        return contactRepository.findAll();
    }
}
