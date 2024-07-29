package com.BookBazaar.BookBazaar.Service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.BookBazaar.BookBazaar.Entity.User;
import com.BookBazaar.BookBazaar.Repository.UserRepo;
import com.BookBazaar.BookBazaar.Service.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserRepo userrepo;
	@Override
	public User Add(User user) {
		User data = userrepo.save(user);
		
		return data;
	}

	
}
