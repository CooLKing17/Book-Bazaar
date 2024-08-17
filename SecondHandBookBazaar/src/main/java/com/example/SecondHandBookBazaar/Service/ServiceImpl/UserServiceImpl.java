package com.example.SecondHandBookBazaar.Service.ServiceImpl;

import java.sql.Blob;
import java.util.Base64;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SecondHandBookBazaar.DataTransferObjects.DeleteAcc;
import com.example.SecondHandBookBazaar.DataTransferObjects.LoginDTO;
import com.example.SecondHandBookBazaar.DataTransferObjects.ProfileImage;
import com.example.SecondHandBookBazaar.DataTransferObjects.ResetPassword;
import com.example.SecondHandBookBazaar.DataTransferObjects.UserDTO;
import com.example.SecondHandBookBazaar.Entity.User;
import com.example.SecondHandBookBazaar.Repo.UserRepo;
import com.example.SecondHandBookBazaar.Respo.Response;
import com.example.SecondHandBookBazaar.Service.UserService;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Override
    public User SaveData(UserDTO user) {
        User newUser = new User();
        newUser.setFullname(user.getFullname());
        newUser.setEmail(user.getEmail());
        newUser.setGender(user.getGender());
        newUser.setDob(user.getDob());
        newUser.setMobileno(user.getMobileno());
        newUser.setAlternatemobileno(user.getAlternatemobileno());
        newUser.setAddress(user.getAddress());
        newUser.setPincode(user.getPincode());
        newUser.setState(user.getState());
        newUser.setOccupation(user.getOccupation());
        newUser.setPassword(user.getPassword());
        newUser.setConfirmpassword(user.getConfirmpassword());
        return userRepo.save(newUser);
    }

    @Override
    public UserDTO updateImage(ProfileImage image, Long id) {
        User user = userRepo.findById(id).orElseThrow(() -> new RuntimeException("User not found with id: " + id));
        user.setProfileimage(image.getImage());
        User savedUser = userRepo.save(user);
        return convertToUserDTO(savedUser);
    }

    private UserDTO convertToUserDTO(User user) {
        UserDTO userDTO = new UserDTO();
        userDTO.setFullname(user.getFullname());
        userDTO.setEmail(user.getEmail());
        userDTO.setGender(user.getGender());
        userDTO.setDob(user.getDob());
        userDTO.setMobileno(user.getMobileno());
        userDTO.setAlternatemobileno(user.getAlternatemobileno());
        userDTO.setAddress(user.getAddress());
        userDTO.setPincode(user.getPincode());
        userDTO.setState(user.getState());
        userDTO.setOccupation(user.getOccupation());
        userDTO.setProfileimage(user.getProfileimage() != null ? convertBlobToBase64(user.getProfileimage()) : null);
        userDTO.setPassword(user.getPassword());
        userDTO.setConfirmpassword(user.getConfirmpassword());
        return userDTO;
    }

    private String convertBlobToBase64(Blob blob) {
        try {
            byte[] bytes = blob.getBytes(1, (int) blob.length());
            return Base64.getEncoder().encodeToString(bytes);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public UserDTO updateProfile(UserDTO user, Long id) {
        User user1 = userRepo.findById(id).orElseThrow(() -> new RuntimeException("User not found with id: " + id));

        if (user.getFullname() != null) {
            user1.setFullname(user.getFullname());
        }

        if (user.getAddress() != null) {
            user1.setAddress(user.getAddress());
        }

        if (user.getPincode() != null) {
            user1.setPincode(user.getPincode());
        }

        if (user.getState() != null) {
            user1.setState(user.getState());
        }

        if (user.getOccupation() != null) {
            user1.setOccupation(user.getOccupation());
        }

        if (user.getMobileno() != null) {
            user1.setMobileno(user.getMobileno());
        }

        if (user.getAlternatemobileno() != null) {
            user1.setAlternatemobileno(user.getAlternatemobileno());
        }

        User savedUser = userRepo.save(user1);
        return convertToUserDTO(savedUser);
    }

    @Override
    public Response LoginCheck(LoginDTO login) {
        Long id = (long) 0;
        if (login.getEmail() != null && login.getPassword() != null) {

            try {
                User data = userRepo.findByEmail(login.getEmail());

                if (data == null) {
                    return new Response("Email is not correct", false, id);
                }

                String storedPassword = data.getPassword();
                String inputPassword = login.getPassword();

                if (storedPassword.equals(inputPassword)) {
                    // If passwords match, assume login is successful
                    return new Response("Login Success", true, data.getId());
                } else {
                    return new Response("Password is not correct", false, id);
                }
            } catch (Exception e) {
                return new Response("An error occurred during login", false, id);
            }
        }

        return null;
    }

    @Override
    public UserDTO GetProfile(Long id) {
        User user = userRepo.findById(id).orElseThrow(() -> new RuntimeException("User not found with id: " + id));
        return convertToUserDTO(user);
    }

    @Override
    public Response UpdatePassword(ResetPassword resetPassword, Long id) {
    	Long iid = (long) 0;
        User user = userRepo.findById(id).orElseThrow(() -> new RuntimeException("User not found"));

        // Initialize data to null
        	System.out.print(resetPassword.getNewPassword());
        	System.out.print(resetPassword.getConfirmPassword());

        if (user.getPassword().equals(resetPassword.getOldPassword())) {
            if (resetPassword.getNewPassword() != null && resetPassword.getConfirmPassword() != null) {
                user.setPassword(resetPassword.getNewPassword());
                user.setConfirmpassword(resetPassword.getConfirmPassword());

                // Save updated user to the repository
                userRepo.save(user);
            } else {
                System.out.println("New password or confirm password is null");
                return new Response("New password or confirm password is null", false, iid);

            }
        } else {
            System.out.println("Old password does not match");
            return new Response("Old password does not match", false, iid);
        }

        return new Response("Password changging successful", true, user.getId());

    }

    @Override
    public Response DeleteProfile(DeleteAcc user, Long id) {
    	Long iid = (long) 0;
        User userDelete = userRepo.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        if(userDelete.getEmail().equals(user.getEmail())){
        if (userDelete.getPassword().equals(user.getPassword())) {
            userRepo.delete(userDelete);
            return new Response("Your account has been deleted", true ,iid);
        } else {
            return new Response("Password does not match. Account not deleted", false ,iid);
        }
    }else{
        return new Response("Email does not match. Account not deleted", false ,iid);
    }

    }

}
