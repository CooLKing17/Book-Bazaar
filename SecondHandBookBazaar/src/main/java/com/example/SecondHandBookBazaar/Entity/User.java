package com.example.SecondHandBookBazaar.Entity;

import java.sql.Blob;
import java.time.LocalDate;
import java.util.List;



import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity

public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String fullname;
	@Column(unique = true)
	private String email;
	private String gender;
	private LocalDate dob;
	private Long mobileno;
	private Long alternatemobileno;
	private String address;
	private Integer pincode;
	private String state;
	private String occupation;
	private Blob profileimage;
	private String password;
	private String confirmpassword;
	
	@OneToMany(mappedBy = "user" , cascade = CascadeType.ALL)
	private List<SellBook> SellBook;

	@OneToMany(mappedBy = "user" , cascade = CascadeType.ALL)
	private List<DonateBook> DonateBook;

	@OneToMany(mappedBy = "user" , cascade = CascadeType.ALL)
	private List<OrderBook> OrderBook;

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(Long id, String fullname, String email, String gender, LocalDate dob, Long mobileno,
			Long alternatemobileno, String address, Integer pincode, String state, String occupation,Blob profileimage,
			String password, String confirmpassword, List<com.example.SecondHandBookBazaar.Entity.SellBook> sellBook,
			List<com.example.SecondHandBookBazaar.Entity.DonateBook> donateBook,
			List<com.example.SecondHandBookBazaar.Entity.OrderBook> orderBook) {
		this.id = id;
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
		this.profileimage = profileimage;
		this.password = password;
		this.confirmpassword = confirmpassword;
		SellBook = sellBook;
		DonateBook = donateBook;
		OrderBook = orderBook;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", fullname=" + fullname + ", email=" + email + ", gender=" + gender + ", dob=" + dob
				+ ", mobileno=" + mobileno + ", alternatemobileno=" + alternatemobileno + ", address=" + address
				+ ", pincode=" + pincode + ", state=" + state + ", occupation=" + occupation + ", profileimage="
				+ profileimage + ", password=" + password + ", confirmpassword=" + confirmpassword + ", SellBook="
				+ SellBook + ", DonateBook=" + DonateBook + ", OrderBook=" + OrderBook + "]";
	}

	public Long getId() {
		return id;
	}

	public String getFullname() {
		return fullname;
	}

	public String getEmail() {
		return email;
	}

	public String getGender() {
		return gender;
	}

	public LocalDate getDob() {
		return dob;
	}

	public Long getMobileno() {
		return mobileno;
	}

	public Long getAlternatemobileno() {
		return alternatemobileno;
	}

	public String getAddress() {
		return address;
	}

	public Integer getPincode() {
		return pincode;
	}

	public String getState() {
		return state;
	}

	public String getOccupation() {
		return occupation;
	}

	public Blob getProfileimage() {
		return profileimage;
	}

	public String getPassword() {
		return password;
	}

	public String getConfirmpassword() {
		return confirmpassword;
	}

	public List<SellBook> getSellBook() {
		return SellBook;
	}

	public List<DonateBook> getDonateBook() {
		return DonateBook;
	}

	public List<OrderBook> getOrderBook() {
		return OrderBook;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public void setDob(LocalDate dob) {
		this.dob = dob;
	}

	public void setMobileno(Long mobileno) {
		this.mobileno = mobileno;
	}

	public void setAlternatemobileno(Long alternatemobileno) {
		this.alternatemobileno = alternatemobileno;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public void setPincode(Integer pincode) {
		this.pincode = pincode;
	}

	public void setState(String state) {
		this.state = state;
	}

	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}

	public void setProfileimage(Blob profileimage) {
		this.profileimage = profileimage;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setConfirmpassword(String confirmpassword) {
		this.confirmpassword = confirmpassword;
	}

	public void setSellBook(List<SellBook> sellBook) {
		SellBook = sellBook;
	}

	public void setDonateBook(List<DonateBook> donateBook) {
		DonateBook = donateBook;
	}

	public void setOrderBook(List<OrderBook> orderBook) {
		OrderBook = orderBook;
	}



}
