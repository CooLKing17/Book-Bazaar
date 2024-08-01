package com.BookBazaar.BookBazaar.Service;



import org.springframework.stereotype.Service;

import com.BookBazaar.BookBazaar.Entity.Login;

//import org.springframework.stereotype.Service;

import com.BookBazaar.BookBazaar.Entity.User;
import com.BookBazaar.BookBazaar.Response.Response;

@Service
public interface UserService {
	
	public User Add(User user);
	
	public Response LoginCheck (Login login);
	

}
