package com.example.SecondHandBookBazaar.Entity;


import java.time.LocalDate;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class SellBook {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String authorName;
    private LocalDate releaseDate;
    private String rating;
    private String type;
    private String subType;
    private String bookCondition;
    private String oldbookcondition;
    private String originalPrice;
    private String sellingPrice;
    private String edition;  
    private String description;
    private String isbn10;
    public String getSubType() {
        return subType;
    }

    public void setSubType(String subType) {
        this.subType = subType;
    }

    public String getCondition() {
        return oldbookcondition;
    }

    public void setCondition(String oldbookcondition) {
        this.oldbookcondition = oldbookcondition;
    }

    private String isbn13;
    private String language;
    private String missingPages;
    private String totalPages;
    private String bookpublisher;
    private String quantity;

    @ManyToOne
    @JoinColumn(name="User_id")
    private User user;

    @OneToMany(mappedBy = "sell",cascade = CascadeType.ALL ,fetch = FetchType.LAZY)
    private List<Image> image= new ArrayList<>();
	public SellBook(Long id, String name, String authorName, LocalDate releaseDate, String rating, String type,
			String subType, String bookCondition, String oldbookcondition, String originalPrice, String sellingPrice,
			String edition, String description, String isbn10, String isbn13, String language, String missingPages,
			String totalPages, String bookpublisher, String quantity, User user, List<Image> image) {
		super();
		this.id = id;
		this.name = name;
		this.authorName = authorName;
		this.releaseDate = releaseDate;
		this.rating = rating;
		this.type = type;
		this.subType = subType;
		this.bookCondition = bookCondition;
		this.oldbookcondition = oldbookcondition;
		this.originalPrice = originalPrice;
		this.sellingPrice = sellingPrice;
		this.edition = edition;
		this.description = description;
		this.isbn10 = isbn10;
		this.isbn13 = isbn13;
		this.language = language;
		this.missingPages = missingPages;
		this.totalPages = totalPages;
		this.bookpublisher = bookpublisher;
		this.quantity = quantity;
		this.user = user;
		this.image = image;
	}

	public SellBook() {
		super();
	}

	@Override
	public String toString() {
		return "SellBook [id=" + id + ", name=" + name + ", authorName=" + authorName + ", releaseDate=" + releaseDate
				+ ", rating=" + rating + ", type=" + type + ", subType=" + subType + ", bookCondition=" + bookCondition
				+ ", oldbookcondition=" + oldbookcondition + ", originalPrice=" + originalPrice + ", sellingPrice="
				+ sellingPrice + ", edition=" + edition + ", description=" + description + ", isbn10=" + isbn10
				+ ", isbn13=" + isbn13 + ", language=" + language + ", missingPages=" + missingPages + ", totalPages="
				+ totalPages + ", bookpublisher=" + bookpublisher + ", quantity=" + quantity + ", user=" + user
				+ ", image=" + image + "]";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAuthorName() {
		return authorName;
	}

	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}

	public LocalDate getReleaseDate() {
		return releaseDate;
	}

	public void setReleaseDate(LocalDate releaseDate) {
		this.releaseDate = releaseDate;
	}

	public String getRating() {
		return rating;
	}

	public void setRating(String rating) {
		this.rating = rating;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getBookCondition() {
		return bookCondition;
	}

	public void setBookCondition(String bookCondition) {
		this.bookCondition = bookCondition;
	}

	public String getOldbookcondition() {
		return oldbookcondition;
	}

	public void setOldbookcondition(String oldbookcondition) {
		this.oldbookcondition = oldbookcondition;
	}

	public String getOriginalPrice() {
		return originalPrice;
	}

	public void setOriginalPrice(String originalPrice) {
		this.originalPrice = originalPrice;
	}

	public String getSellingPrice() {
		return sellingPrice;
	}

	public void setSellingPrice(String sellingPrice) {
		this.sellingPrice = sellingPrice;
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

	public String getIsbn10() {
		return isbn10;
	}

	public void setIsbn10(String isbn10) {
		this.isbn10 = isbn10;
	}

	public String getIsbn13() {
		return isbn13;
	}

	public void setIsbn13(String isbn13) {
		this.isbn13 = isbn13;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public String getMissingPages() {
		return missingPages;
	}

	public void setMissingPages(String missingPages) {
		this.missingPages = missingPages;
	}

	public String getTotalPages() {
		return totalPages;
	}

	public void setTotalPages(String totalPages) {
		this.totalPages = totalPages;
	}

	public String getBookpublisher() {
		return bookpublisher;
	}

	public void setBookpublisher(String bookpublisher) {
		this.bookpublisher = bookpublisher;
	}

	public String getQuantity() {
		return quantity;
	}

	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<Image> getImage() {
		return image;
	}

	public void setImage(List<Image> image) {
		this.image = image;
	}

    
}
