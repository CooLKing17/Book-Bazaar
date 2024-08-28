package com.example.SecondHandBookBazaar.Entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
@Entity
public class OrderBook {
     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long bookId;
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
    private String isbn13;
    private String language;
    private String missingPages;
    private String totalPages;
    private String bookpublisher;
    private String quantity;
    private Long bookuserId;
    @ManyToOne
    @JoinColumn(name = "User_id")
    private User user;

    public OrderBook() {
    }

    public OrderBook(Long id, Long bookId, String name, String authorName, LocalDate releaseDate, String rating,
            String type, String subType, String bookCondition, String oldbookcondition, String originalPrice,
            String sellingPrice, String edition, String description, String isbn10, String isbn13, String language,
            String missingPages, String totalPages, String bookpublisher, String quantity, Long bookuserId, User user) {
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
        this.user = user;
    }

    @Override
    public String toString() {
        return "OrderBook [id=" + id + ", bookId=" + bookId + ", name=" + name + ", authorName=" + authorName
                + ", releaseDate=" + releaseDate + ", rating=" + rating + ", type=" + type + ", subType=" + subType
                + ", bookCondition=" + bookCondition + ", oldbookcondition=" + oldbookcondition + ", originalPrice="
                + originalPrice + ", sellingPrice=" + sellingPrice + ", edition=" + edition + ", description="
                + description + ", isbn10=" + isbn10 + ", isbn13=" + isbn13 + ", language=" + language
                + ", missingPages=" + missingPages + ", totalPages=" + totalPages + ", bookpublisher=" + bookpublisher
                + ", quantity=" + quantity + ", bookuserId=" + bookuserId + ", user=" + user + "]";
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
