package com.BookBazaar.BookBazaar.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class UserInfo {

	@GeneratedValue
	@Column(unique = true)
	private int ID ;
	
	private String FullName ;
	
	private double Contact;
	
	@Id
	@Column(unique = true)
    private String email;

    private double AlterContact;

    private String Address;

    private int Pincode ;
    
    @Column(unique = true)
    private String password;

    public UserInfo(int iD, String fullName, double contact, String email, double alterContact, String address,
			int pincode, String password, String confirmPassword) {
		super();
		ID = iD;
		FullName = fullName;
		Contact = contact;
		email = email;
		AlterContact = alterContact;
		Address = address;
		Pincode = pincode;
		this.password = password;
		ConfirmPassword = confirmPassword;
	}

	private String ConfirmPassword;

    public int getID(){
    	return ID;
    }

    public void setID(int ID){
    	this.ID = ID;
    }
	
    public String getFullName(){
        return FullName;
    }

    public void setFullName(String FullName){
        this.FullName = FullName;
    }
    public double getContact() {
        return Contact;
    }
    
    public void setContact(double contact) {
        Contact = contact;
    }
    
    public String getemail() {
        return email;
    }
    
    public void setemail(String email) {
        email = email;
    }
    
    public double getAlterContact() {
        return AlterContact;
    }
    
    public void setAlterContact(double alterContact) {
        AlterContact = alterContact;
    }
    
    public String getAddress() {
        return Address;
    }
    
    public void setAddress(String address) {
        Address = address;
    }
    
    public int getPincode() {
        return Pincode;
    }
    
    public void setPincode(int pincode) {
        Pincode = pincode;
    }
    
    public String getPassword() {
        return password;
    }
    
    public void setPassword(String password) {
        this.password = password;
    }
    
    public String getConfirmPassword() {
        return ConfirmPassword;
    }
    
    public void setConfirmPassword(String confirmPassword) {
        ConfirmPassword = confirmPassword;
    }
}
