package com.example.SecondHandBookBazaar.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.SecondHandBookBazaar.Entity.SellBook;
@Repository
public interface SellBookRepo extends JpaRepository<SellBook, Long> {

    List<SellBook> findByUserId(Long id);
}
