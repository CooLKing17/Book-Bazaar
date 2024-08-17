package com.example.SecondHandBookBazaar.DataTransferObjects;

public class SellBookEdit {
    private String description;
    private String sellingPrice;
    private String missingPages;
    private String quantity;
    
    
    public SellBookEdit() {
    }
    public SellBookEdit(String description, String sellingPrice, String missingPages, String quantity) {
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
    public String getSellingPrice() {
        return sellingPrice;
    }
    public void setSellingPrice(String sellingPrice) {
        this.sellingPrice = sellingPrice;
    }
    public String getMissingPages() {
        return missingPages;
    }
    public void setMissingPages(String missingPages) {
        this.missingPages = missingPages;
    }
    public String getQuantity() {
        return quantity;
    }
    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }
    
}
