package com.hackaton.aubilousTouch.service;

public interface EmailService {
    void sendSimpleMessage(
            String to, String subject, String text);
}
