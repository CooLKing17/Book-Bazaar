package com.BookBazaar.BookBazaar.Entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer Id;
	
	private String fullname;
	
	
	@Column(unique = true)
	private String email;
	
	@Override
	public String toString() {
		return "User [Id=" + Id + ", fullname=" + fullname + ", email=" + email + ", gender=" + gender + ", dob=" + dob
				+ ", mobileno=" + mobileno + ", alternatemobileno=" + alternatemobileno + ", address=" + address
				+ ", pincode=" + pincode + ", state=" + state + ", occupation=" + occupation + ", password=" + password
				+ ", confirmpassword=" + confirmpassword + "]";
	}

	private String gender;
	
	private LocalDate dob;
	
	private Integer mobileno;
	
	private Integer alternatemobileno;
	
	private String address;
	
	private Integer pincode;

	private String state;

	private String occupation;
	
	private String password;
	
	private String confirmpassword;

	public Integer getId() {
		return Id;
	}

	public void setId(Integer id) {
		Id = id;
	}

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

	public Integer getMobileno() {
		return mobileno;
	}

	public void setMobileno(Integer mobileno) {
		this.mobileno = mobileno;
	}

	public Integer getAlternatemobileno() {
		return alternatemobileno;
	}

	public void setAlternatemobileno(Integer alternatemobileno) {
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

	public User() {
		super();
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

	public User(Integer id, String fullname, String email, String gender, LocalDate dob, Integer mobileno,
			Integer alternatemobileno, String address, Integer pincode, String state, String occupation,
			String password, String confirmpassword) {
		super();
		Id = id;
		this.fullname = fullname;
		this.email = email;
		this.gender = gender;
		this.dob = dob;
		this.mobileno = mobileno;
		this.alternatemobileno = alternatemobileno;
		this.address = address;
		this.pincode = pincode;
		this.state = state;
		this.occupation = occupation;
		this.password = password;
		this.confirmpassword = confirmpassword;
	}
	
	
	
	
	
	
	
}
