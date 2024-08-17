package com.example.SecondHandBookBazaar.DataTransferObjects;

import java.sql.Blob;

public class ProfileImage {
    private Blob image;

    public Blob getImage() {
        return image;
    }

    public void setImage(Blob image) {
        this.image = image;
    }

}
