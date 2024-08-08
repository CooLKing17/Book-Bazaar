package com.example.SecondHandBookBazaar.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.SecondHandBookBazaar.Entity.DonateBook;

public interface DonateBookRepo extends JpaRepository<DonateBook, Long> {

}
