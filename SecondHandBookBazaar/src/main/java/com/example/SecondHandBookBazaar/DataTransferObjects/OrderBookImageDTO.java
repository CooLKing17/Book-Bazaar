package com.example.SecondHandBookBazaar.DataTransferObjects;



public class OrderBookImageDTO {

    private long id;
    private String imageBase64;
    private String name;

    public OrderBookImageDTO() {
        super();
    }

    public OrderBookImageDTO(long id, String imageBase64, String name) {
        super();
        this.id = id;
        this.imageBase64 = imageBase64;
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getImageBase64() {
        return imageBase64;
    }

    public void setImageBase64(String imageBase64) {
        this.imageBase64 = imageBase64;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "ImageDTO [id=" + id + ", imageBase64=" + imageBase64 + ", name=" + name + "]";
    }
}
