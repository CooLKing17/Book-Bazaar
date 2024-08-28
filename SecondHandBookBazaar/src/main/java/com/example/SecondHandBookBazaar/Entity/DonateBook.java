package com.example.SecondHandBookBazaar.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class DonateBook {
     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String bookname;
    private String authorname;
    private Long bookquantity;
    private String type;
    private String bookcondition;
    private String orphanagename;
    private String edition;
    private String description;
    private String language;
    private String bookpublisher;
   

    @ManyToOne
    @JoinColumn(name = "User_id")
    private User user;

    public DonateBook() {
    }

	public DonateBook(Long id, String bookname, String authorname, Long bookquantity, String type, String bookcondition,
			String orphanagename, String edition, String description, String language, String bookpublisher,
			User user) {
		super();
		this.id = id;
		this.bookname = bookname;
		this.authorname = authorname;
		this.bookquantity = bookquantity;
		this.type = type;
		this.bookcondition = bookcondition;
		this.orphanagename = orphanagename;
		this.edition = edition;
		this.description = description;
		this.language = language;
		this.bookpublisher = bookpublisher;
		this.user = user;
	}

	@Override
	public String toString() {
		return "DonateBook [id=" + id + ", bookname=" + bookname + ", authorname=" + authorname + ", bookquantity="
				+ bookquantity + ", type=" + type + ", bookcondition=" + bookcondition + ", orphanagename="
				+ orphanagename + ", edition=" + edition + ", description=" + description + ", language=" + language
				+ ", bookpublisher=" + bookpublisher + ", user=" + user + "]";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getBookname() {
		return bookname;
	}

	public void setBookname(String bookname) {
		this.bookname = bookname;
	}

	public String getAuthorname() {
		return authorname;
	}

	public void setAuthorname(String authorname) {
		this.authorname = authorname;
	}

	public Long getBookquantity() {
		return bookquantity;
	}

	public void setBookquantity(Long bookquantity) {
		this.bookquantity = bookquantity;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getBookcondition() {
		return bookcondition;
	}

	public void setBookcondition(String bookcondition) {
		this.bookcondition = bookcondition;
	}

	public String getOrphanagename() {
		return orphanagename;
	}

	public void setOrphanagename(String orphanagename) {
		this.orphanagename = orphanagename;
	}

	public String getEdition() {
		return edition;
	}

	public void setEdition(String edition) {
		this.edition = edition;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public String getBookpublisher() {
		return bookpublisher;
	}

	public void setBookpublisher(String bookpublisher) {
		this.bookpublisher = bookpublisher;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}


    

    

    

}
