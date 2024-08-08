package com.example.SecondHandBookBazaar.Entity;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;

@Entity
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    private byte[] image;
    private String name;

    @ManyToOne
    @JoinColumn(name = "sell_id")
    private SellBook sell;

    public Image() {}

    public Image(Long id, byte[] image, String name, SellBook sell) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.sell = sell;
    }

    public Long getId() {
        return id;
    }

    public byte[] getImage() {
        return image;
    }

    public String getName() {
        return name;
    }

    public SellBook getSell() {
        return sell;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSell(SellBook sell) {

        this.sell = sell;
    }

    @Override
    public String toString() {
        return "Image [id=" + id + ", image=" + image + ", name=" + name + ", sell=" + sell + "]";
    }


}
