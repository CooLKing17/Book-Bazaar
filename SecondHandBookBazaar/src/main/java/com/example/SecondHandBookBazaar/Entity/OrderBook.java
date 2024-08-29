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
public class OrderBook {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private Long bookId;
    private String name;
    private String authorName;
    private LocalDate releaseDate;
    private Long rating;
    private String type;
    private String subType;
    private String bookCondition;
    private String oldbookcondition;
    private Long originalPrice;
    private Long sellingPrice;
    private String edition;  
    private String description;
    private String isbn10;
    private String isbn13;
    private String language;
    private Long missingPages;
    private Long totalPages;
    private String bookpublisher;
    private Long quantity;
    private Long bookuserId;
    private Boolean status;
    
    private Long price;  // Add this field
    private Long qty ;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "orderBook",cascade = CascadeType.ALL ,fetch = FetchType.LAZY)
    private List<OrderBookImage> image= new ArrayList<>();

    // Default constructor
    public OrderBook() {super();}

    // Constructor with all fields, including the new 'price' field
    public OrderBook(Long id, Long bookId, String name, String authorName, LocalDate releaseDate, Long rating,
                     String type, String subType, String bookCondition, String oldbookcondition, Long originalPrice,
                     Long sellingPrice, String edition, String description, String isbn10, String isbn13,
                     String language, Long missingPages, Long totalPages, String bookpublisher, Long quantity,
                     Long bookuserId,Boolean status, Long price,Long qty, User user ,List<OrderBookImage> image) {
        this.id = id;
        this.bookId = bookId;
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
        this.bookuserId = bookuserId;
        this.price = price; 
        this.qty=qty;// Initialize the new field
        this.user = user;
        this.image = image;
        this.status=status;
    }

    public Boolean getStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}

	public List<OrderBookImage> getImage() {
        return image;
    }

    public void setImage(List<OrderBookImage> image) {
        this.image = image;
    }

    // Getters and setters, including the new 'price' field
    public Long getPrice() {
        return price;
    }

    public Long getQty() {
		return qty;
	}

	public void setQty(Long qty) {
		this.qty = qty;
	}

	public void setPrice(Long price) {
        this.price = price;
    }
    @Override
    public String toString() {
        return "OrderBook [id=" + id + ", bookId=" + bookId + ", name=" + name + ", authorName=" + authorName
                + ", releaseDate=" + releaseDate + ", rating=" + rating + ", type=" + type + ", subType=" + subType
                + ", bookCondition=" + bookCondition + ", oldbookcondition=" + oldbookcondition + ", originalPrice="
                + originalPrice + ", sellingPrice=" + sellingPrice + ", edition=" + edition + ", description="
                + description + ", isbn10=" + isbn10 + ", isbn13=" + isbn13 + ", language=" + language
                + ", missingPages=" + missingPages + ", totalPages=" + totalPages + ", bookpublisher=" + bookpublisher
                + ", quantity=" + quantity + ", bookuserId=" + bookuserId + ", user=" + user + ",status="+status+"]";
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getBookId() {
        return bookId;
    }

    public void setBookId(Long bookId) {
        this.bookId = bookId;
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

    public Long getRating() {
        return rating;
    }

    public void setRating(Long rating) {
        this.rating = rating;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getSubType() {
        return subType;
    }

    public void setSubType(String subType) {
        this.subType = subType;
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

    public Long getOriginalPrice() {
        return originalPrice;
    }

    public void setOriginalPrice(Long originalPrice) {
        this.originalPrice = originalPrice;
    }

    public Long getSellingPrice() {
        return sellingPrice;
    }

    public void setSellingPrice(Long sellingPrice) {
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

    public Long getMissingPages() {
        return missingPages;
    }

    public void setMissingPages(Long missingPages) {
        this.missingPages = missingPages;
    }

    public Long getTotalPages() {
        return totalPages;
    }

    public void setTotalPages(Long totalPages) {
        this.totalPages = totalPages;
    }

    public String getBookpublisher() {
        return bookpublisher;
    }

    public void setBookpublisher(String bookpublisher) {
        this.bookpublisher = bookpublisher;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }

    public Long getBookuserId() {
        return bookuserId;
    }

    public void setBookuserId(Long bookuserId) {
        this.bookuserId = bookuserId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    
    
}
