package com.BookBazaar.BookBazaar.Service.Impl;



import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.BookBazaar.BookBazaar.Entity.Login;
import com.BookBazaar.BookBazaar.Response.Response;
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
	
		@Override
		public Response LoginCheck(Login login) {
		    try {
		        User data = userrepo.findByEmail(login.getEmail());
		        
		        if (data == null) {
		            return new Response("Email is not correct", false);
		        }
		        
		        String storedPassword = data.getPassword();
		        String inputPassword = login.getPassword();

		        if (storedPassword.equals(inputPassword)) {
		            // If passwords match, assume login is successful
		            return new Response("Login Success", true);
		        } else {
		            return new Response("Password is not correct", false);
		        }
		    } catch (Exception e) {
		        return new Response("An error occurred during login", false);
		    }
		}

}
