package com.BookBazaar.BookBazaar.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.BookBazaar.BookBazaar.Entity.UserInfo;
import com.BookBazaar.BookBazaar.Service.UserService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;


@RestController
@CrossOrigin
public class UserController {
    
    @Autowired
    UserService userService ;
    
    
    @PostMapping("/Userdetails")
    @ResponseBody
    public String saveUserdata(@RequestBody UserInfo userinfo) {
        System.out.println("hii");
        this.userService.saveUserdata(userinfo);
        
        return "Success";
    }
    
}
