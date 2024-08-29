package com.example.SecondHandBookBazaar.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.SecondHandBookBazaar.Entity.OrderBookImage;

public interface OrderBookImageRepo extends JpaRepository<OrderBookImage, Long> {
	List<OrderBookImage> findByOrderBookId(Long sellId);

    

    
}
