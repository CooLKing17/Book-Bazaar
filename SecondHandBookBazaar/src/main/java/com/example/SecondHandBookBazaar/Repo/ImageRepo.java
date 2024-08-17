package com.example.SecondHandBookBazaar.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.SecondHandBookBazaar.Entity.Image;


@Repository
public interface ImageRepo extends JpaRepository<Image ,Long> {
	List<Image> findBySellId(Long sellId);
}
