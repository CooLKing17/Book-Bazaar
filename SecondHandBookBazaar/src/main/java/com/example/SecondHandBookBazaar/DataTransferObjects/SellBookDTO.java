package com.example.SecondHandBookBazaar.DataTransferObjects;


import java.time.LocalDate;
import java.util.List;


public class SellBookDTO {
    



    private Long id;
    private String name;
    private LocalDate releaseDate;
    private String authorName;
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
    private List<ImageDTO> images;
    private Long userId;
	public SellBookDTO(Long id, String name, LocalDate releaseDate, String authorName, Long rating, String type,
			String subType, String bookCondition, String oldbookcondition, Long originalPrice, Long sellingPrice,
			String edition, String description, String isbn10, String isbn13, String language, Long missingPages,
			Long totalPages, String bookpublisher, Long quantity, List<ImageDTO> images, Long userId) {
		super();
		this.id = id;
		this.name = name;
		this.releaseDate = releaseDate;
		this.authorName = authorName;
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
		this.images = images;
		this.userId = userId;
	}
	public SellBookDTO() {
		super();
	}
	@Override
	public String toString() {
		return "SellBookDTO [id=" + id + ", name=" + name + ", releaseDate=" + releaseDate + ", authorName="
				+ authorName + ", rating=" + rating + ", type=" + type + ", subType=" + subType + ", bookCondition="
				+ bookCondition + ", oldbookcondition=" + oldbookcondition + ", originalPrice=" + originalPrice
				+ ", sellingPrice=" + sellingPrice + ", edition=" + edition + ", description=" + description
				+ ", isbn10=" + isbn10 + ", isbn13=" + isbn13 + ", language=" + language + ", missingPages="
				+ missingPages + ", totalPages=" + totalPages + ", bookpublisher=" + bookpublisher + ", quantity="
				+ quantity + ", images=" + images + ", userId=" + userId + "]";
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
	public LocalDate getReleaseDate() {
		return releaseDate;
	}
	public void setReleaseDate(LocalDate releaseDate) {
		this.releaseDate = releaseDate;
	}
	public String getAuthorName() {
		return authorName;
	}
	public void setAuthorName(String authorName) {
		this.authorName = authorName;
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
	public List<ImageDTO> getImages() {
		return images;
	}
	public void setImages(List<ImageDTO> images) {
		this.images = images;
	}
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
    
	    
}


