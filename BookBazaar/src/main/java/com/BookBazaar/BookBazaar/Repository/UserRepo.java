package com.BookBazaar.BookBazaar.Repository;

import org.springframework.data.repository.CrudRepository;

import com.BookBazaar.BookBazaar.Entity.UserInfo;

public interface UserRepo extends CrudRepository<UserInfo , String >{

    public UserInfo findByEmail(String email);
}
    