package com.BookBazaar.BookBazaar.Repository;



import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
//import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.BookBazaar.BookBazaar.Entity.User;

//import jakarta.persistence.criteria.CriteriaBuilder.In;
@EnableJpaRepositories

@Repository
public interface UserRepo extends JpaRepository<User, Integer>{

	User findByEmail(String email);

	
	
}
