package com.example.SecondHandBookBazaar.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class DonateBook {
     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String bookname;
    private int qty;
    private double price;

    @ManyToOne
    @JoinColumn(name = "User_id")
    private User user;

    public DonateBook() {
    }

    public DonateBook(Long id, String bookname, int qty, double price, User user) {
        this.id = id;
        this.bookname = bookname;
        this.qty = qty;
        this.price = price;
        this.user = user;
    }

    @Override
    public String toString() {
        return "DonateBook [id=" + id + ", bookname=" + bookname + ", qty=" + qty + ", price=" + price + ", user="
                + user + "]";
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBookname() {
        return bookname;
    }

    public void setBookname(String bookname) {
        this.bookname = bookname;
    }

    public int getQty() {
        return qty;
    }

    public void setQty(int qty) {
        this.qty = qty;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    

}
