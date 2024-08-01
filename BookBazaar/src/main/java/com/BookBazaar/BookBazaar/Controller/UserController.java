package com.BookBazaar.BookBazaar.Controller;

import org.springframework.web.bind.annotation.RestController;

import com.BookBazaar.BookBazaar.Entity.Login;
import com.BookBazaar.BookBazaar.Entity.User;
import com.BookBazaar.BookBazaar.Response.Response;
import com.BookBazaar.BookBazaar.Service.UserService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


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
	
	@PostMapping("/login")
	public Response Login(@RequestBody Login login) {
	   Response response = userservice.LoginCheck(login);
	   return response;
		
	}
	
	
	
}
