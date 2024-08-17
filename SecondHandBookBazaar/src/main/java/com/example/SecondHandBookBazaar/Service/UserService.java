package com.example.SecondHandBookBazaar.Service;

import org.springframework.stereotype.Service;

import com.example.SecondHandBookBazaar.DataTransferObjects.ProfileImage;
import com.example.SecondHandBookBazaar.DataTransferObjects.ResetPassword;
import com.example.SecondHandBookBazaar.DataTransferObjects.UserDTO;
import com.example.SecondHandBookBazaar.DataTransferObjects.DeleteAcc;
import com.example.SecondHandBookBazaar.DataTransferObjects.LoginDTO;
import com.example.SecondHandBookBazaar.Entity.User;
import com.example.SecondHandBookBazaar.Respo.Response;
@Service
public interface UserService {
   public User SaveData(UserDTO user);

   public UserDTO updateImage(ProfileImage image ,Long id);

   public UserDTO updateProfile(UserDTO user , Long id);

   public Response LoginCheck(LoginDTO login);

   public UserDTO GetProfile(Long id);

   public Response UpdatePassword (ResetPassword reset ,Long id);

   public Response DeleteProfile(DeleteAcc user ,Long id);
}
