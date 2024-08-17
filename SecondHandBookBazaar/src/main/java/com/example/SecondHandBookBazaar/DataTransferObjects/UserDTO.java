package com.example.SecondHandBookBazaar.DataTransferObjects;


import java.time.LocalDate;


public class UserDTO {

    private String fullname;
    private String email;
    private String gender;
    private LocalDate dob;
    private Long mobileno;
    private Long alternatemobileno;
    private String address;
    private Integer pincode;
    private String state;
    private String occupation;
    private String profileimage;
    private String password;
    private String confirmpassword;

    // Getters and Setters

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public Long getMobileno() {
        return mobileno;
    }

    public void setMobileno(Long mobileno) {
        this.mobileno = mobileno;
    }

    public Long getAlternatemobileno() {
        return alternatemobileno;
    }

    public void setAlternatemobileno(Long alternatemobileno) {
        this.alternatemobileno = alternatemobileno;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Integer getPincode() {
        return pincode;
    }

    public void setPincode(Integer pincode) {
        this.pincode = pincode;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirmpassword() {
        return confirmpassword;
    }

    public void setConfirmpassword(String confirmpassword) {
        this.confirmpassword = confirmpassword;
    }

    // Convert Blob to Base64 String
    public String getProfileimage() {
        return profileimage;
    }

    public void setProfileimage(String blob) {
    	this.profileimage=blob;
    }
}
