package com.BookBazaar.BookBazaar.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.BookBazaar.BookBazaar.Entity.UserInfo;
import com.BookBazaar.BookBazaar.Repository.UserRepo;

@Service
public class UserServiceImpl implements UserService {
    
	@Autowired
	UserRepo userrepo;
    
	@Override
    public void saveUserdata(UserInfo userinfo){
        userrepo.save(userinfo);
        System.out.println("User data saved successfully");
    }
}
