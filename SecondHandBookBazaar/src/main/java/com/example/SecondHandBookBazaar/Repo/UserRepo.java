package com.example.SecondHandBookBazaar.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.SecondHandBookBazaar.Entity.User;

public interface UserRepo extends JpaRepository<User, Long> {

    User findByEmail(String email);
}
