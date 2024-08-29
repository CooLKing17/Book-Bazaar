package com.example.SecondHandBookBazaar.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.SecondHandBookBazaar.Entity.OrderBook;

public interface OrderBookRepo extends JpaRepository<OrderBook, Long>{

	boolean existsByUserIdAndBookId(Long userId, Long sellBookId);
	    List<OrderBook> findByUserId(Long id);

}
