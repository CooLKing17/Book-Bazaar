package com.example.SecondHandBookBazaar.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.SecondHandBookBazaar.Entity.SellBook;

public interface SellBookRepo extends JpaRepository<SellBook, Long> {

}
