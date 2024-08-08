package com.example.SecondHandBookBazaar.Entity;

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
    private String releaseDate;
    private String rating;
    private String type;
    private String bookCondition;
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

    @ManyToOne
    @JoinColumn(name="User_id")
    private User user;

    @OneToMany(mappedBy = "sell",cascade = CascadeType.ALL ,fetch = FetchType.LAZY)
    private List<Image> image;

    public SellBook() {
    }

    public SellBook(Long id, String name, String authorName, String releaseDate, String rating, String type,
            String bookCondition, String originalPrice, String sellingPrice, String edition, String description,
            String isbn10, String isbn13, String language, String missingPages, String totalPages, String bookpublisher,
            String quantity, User user, List<Image> image) {
        this.id = id;
        this.name = name;
        this.authorName = authorName;
        this.releaseDate = releaseDate;
        this.rating = rating;
        this.type = type;
        this.bookCondition = bookCondition;
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

    @Override
    public String toString() {
        return "SellBook [id=" + id + ", name=" + name + ", authorName=" + authorName + ", releaseDate=" + releaseDate
                + ", rating=" + rating + ", type=" + type + ", bookCondition=" + bookCondition + ", originalPrice="
                + originalPrice + ", sellingPrice=" + sellingPrice + ", edition=" + edition + ", description="
                + description + ", isbn10=" + isbn10 + ", isbn13=" + isbn13 + ", language=" + language
                + ", missingPages=" + missingPages + ", totalPages=" + totalPages + ", bookpublisher=" + bookpublisher
                + ", quantity=" + quantity + ", user=" + user + ", image=" + image + "]";
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getAuthorName() {
        return authorName;
    }

    public String getReleaseDate() {
        return releaseDate;
    }

    public String getRating() {
        return rating;
    }

    public String getType() {
        return type;
    }

    public String getBookCondition() {
        return bookCondition;
    }

    public String getOriginalPrice() {
        return originalPrice;
    }

    public String getSellingPrice() {
        return sellingPrice;
    }

    public String getEdition() {
        return edition;
    }

    public String getDescription() {
        return description;
    }

    public String getIsbn10() {
        return isbn10;
    }

    public String getIsbn13() {
        return isbn13;
    }

    public String getLanguage() {
        return language;
    }

    public String getMissingPages() {
        return missingPages;
    }

    public String getTotalPages() {
        return totalPages;
    }

    public String getBookpublisher() {
        return bookpublisher;
    }

    public String getQuantity() {
        return quantity;
    }

    public User getUser() {
        return user;
    }

    public List<Image> getImage() {
        return image;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAuthorName(String authorName) {
        this.authorName = authorName;
    }

    public void setReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setBookCondition(String bookCondition) {
        this.bookCondition = bookCondition;
    }

    public void setOriginalPrice(String originalPrice) {
        this.originalPrice = originalPrice;
    }

    public void setSellingPrice(String sellingPrice) {
        this.sellingPrice = sellingPrice;
    }

    public void setEdition(String edition) {
        this.edition = edition;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setIsbn10(String isbn10) {
        this.isbn10 = isbn10;
    }

    public void setIsbn13(String isbn13) {
        this.isbn13 = isbn13;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public void setMissingPages(String missingPages) {
        this.missingPages = missingPages;
    }

    public void setTotalPages(String totalPages) {
        this.totalPages = totalPages;
    }

    public void setBookpublisher(String bookpublisher) {
        this.bookpublisher = bookpublisher;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setImage(List<Image> image) {
        this.image = image;
    }



}
