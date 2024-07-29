package com.BookBazaar.BookBazaar.Controller;

import org.springframework.web.bind.annotation.RestController;

//import com.BookBazaar.BookBazaar.Entity.Login;
import com.BookBazaar.BookBazaar.Entity.User;
import com.BookBazaar.BookBazaar.Service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@CrossOrigin
public class UserController {

	@Autowired
	UserService userservice;
	
	
	@PostMapping("/NewUserInfo")
	public User addNewUser(@RequestBody User user) {
		//TODO: process POST request
		
		User data = userservice.Add(user);
		System.out.print(data);
		return data;
	}
	
	
	
}
