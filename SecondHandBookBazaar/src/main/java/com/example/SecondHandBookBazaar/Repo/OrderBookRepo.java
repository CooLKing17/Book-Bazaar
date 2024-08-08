package com.example.SecondHandBookBazaar.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.SecondHandBookBazaar.Entity.OrderBook;

public interface OrderBookRepo extends JpaRepository<OrderBook, Long>{

}
