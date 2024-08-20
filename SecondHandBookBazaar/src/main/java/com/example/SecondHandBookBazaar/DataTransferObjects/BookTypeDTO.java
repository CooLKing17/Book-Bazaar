package com.example.SecondHandBookBazaar.DataTransferObjects;

import java.util.List;

public class BookTypeDTO {
    private String bookType;
    private List<SellBookDTO> sellBookDTOs;

    public BookTypeDTO(String bookType, List<SellBookDTO> sellBookDTOs) {
        this.bookType = bookType;
        this.sellBookDTOs = sellBookDTOs;
    }

    public String getBookType() {
        return bookType;
    }

    public void setBookType(String bookType) {
        this.bookType = bookType;
    }

    public List<SellBookDTO> getSellBookDTOs() {
        return sellBookDTOs;
    }

    public void setSellBookDTOs(List<SellBookDTO> sellBookDTOs) {
        this.sellBookDTOs = sellBookDTOs;
    }

    @Override
    public String toString() {
        return "BookTypeDTO [bookType=" + bookType + ", sellBookDTOs=" + sellBookDTOs + "]";
    }

    public BookTypeDTO() {
    }
    
}
