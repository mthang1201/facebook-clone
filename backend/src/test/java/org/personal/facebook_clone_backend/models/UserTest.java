package org.personal.facebook_clone_backend.models;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class UserTest {

    @Test
    void getUsername() {
        User user = new User();
        user.setUsername("Jack");
        assertEquals("Jack", user.getUsername());
    }

    @Test
    void getPassword() {
        User user = new User();
        user.setPassword("j@123");
        assertEquals("j@123", user.getPassword());
    }
}