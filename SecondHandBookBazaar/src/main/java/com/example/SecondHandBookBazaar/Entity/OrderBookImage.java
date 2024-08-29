package com.example.SecondHandBookBazaar.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;

@Entity
public class OrderBookImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    @Column(columnDefinition = "LONGBLOB") 
    private byte[] image;  // Use byte[] for binary data

    private String name;
    
    @ManyToOne
    @JoinColumn(name = "order_book_id")
    private OrderBook orderBook;

    public OrderBookImage() {}

    public OrderBookImage(Long id, byte[] image, String name, OrderBook order) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.orderBook = order;
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

    public OrderBook getOrderBook() {
        return orderBook;
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

    public void setOrderBook(OrderBook orderBook) {
        this.orderBook = orderBook;
    }

    @Override
    public String toString() {
        return "OrderBookImage [id=" + id + ", name=" + name + "]";
    }
}
