package com.example.SecondHandBookBazaar.Controller;

import java.sql.Blob;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.SecondHandBookBazaar.DataTransferObjects.ProfileImage;
import com.example.SecondHandBookBazaar.DataTransferObjects.ResetPassword;
import com.example.SecondHandBookBazaar.DataTransferObjects.UserDTO;
import com.example.SecondHandBookBazaar.DataTransferObjects.DeleteAcc;
import com.example.SecondHandBookBazaar.DataTransferObjects.LoginDTO;
import com.example.SecondHandBookBazaar.Entity.User;
import com.example.SecondHandBookBazaar.Respo.Response;
import com.example.SecondHandBookBazaar.Service.UserService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@CrossOrigin
@RequestMapping("/user/api")
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/UserAdd")
    public User NewUser(@RequestBody UserDTO user) {
    	System.out.print("in");
        return userService.SaveData(user);
    }

    @PostMapping("/uploadImage/{id}")
    public UserDTO uploadImage(@RequestParam("file")MultipartFile file, @PathVariable Long id) {
       System.out.print("in");
        try {
            byte[] bytes = file.getBytes();
            ProfileImage user = new ProfileImage();
            Blob blob = new javax.sql.rowset.serial.SerialBlob(bytes);
            user.setImage(blob);
            return userService.updateImage(user, id);
        } catch (Exception e) {
            // Handle exceptions appropriately
            throw new RuntimeException("Failed to upload image", e);
        }

       
     
    }

    @PutMapping("/updateProfile/{id}")
    public UserDTO updateProfile(@RequestBody UserDTO user , @PathVariable("id") Long id) {
        return userService.updateProfile(user,id);
    }
    
    // User login verify   
	@PostMapping("/login")
	public Response Login(@RequestBody LoginDTO login) {
	   Response response = userService.LoginCheck(login);
	   return response;
		
	}

    //show the user details in profile 
	@GetMapping("/profiledetails/{id}")
	public UserDTO Profile(@PathVariable ("id") Long id) {
		System.out.println(id);
		UserDTO user = userService.GetProfile(id);
		return user;
	}
    
    // Editing the user password and reset the new password 
	@PutMapping("/updatePassword/{id}")
	public Response UpdatePassword(@RequestBody ResetPassword resetpassword , @PathVariable ("id") Long id) {
		System.out.println(id);
		Response data = userService.UpdatePassword(resetpassword , id);
		return data;
	}

    // deleting the user account 
	@DeleteMapping("/deleteProfile/{id}")
	public Response DeleteProfile(@RequestBody DeleteAcc user , @PathVariable ("id") Long id) {
		
		Response response = userService.DeleteProfile(user , id);
		return response;
	}

}
