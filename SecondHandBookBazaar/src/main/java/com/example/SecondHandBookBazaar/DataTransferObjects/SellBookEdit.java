package com.example.SecondHandBookBazaar.DataTransferObjects;

public class SellBookEdit {
    private String description;
    private Long sellingPrice;
    private Long missingPages;
    private Long quantity;
    
    
    public SellBookEdit() {
    }
    public SellBookEdit(String description, Long sellingPrice, Long missingPages, Long quantity) {
        this.description = description;
        this.sellingPrice = sellingPrice;
        this.missingPages = missingPages;
        this.quantity = quantity;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public Long getSellingPrice() {
        return sellingPrice;
    }
    public void setSellingPrice(Long sellingPrice) {
        this.sellingPrice = sellingPrice;
    }
    public Long getMissingPages() {
        return missingPages;
    }
    public void setMissingPages(Long missingPages) {
        this.missingPages = missingPages;
    }
    public Long getQuantity() {
        return quantity;
    }
    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }
    
}
