package com.BookBazaar.BookBazaar.Response;

public class Response {
	
    private String message;
    private boolean status;

    public Response() {
        // Default constructor
    }

    public Response(String message, boolean status) {
        this.message = message;
        this.status = status;
    }

    // Getters and Setters
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Response [Message=" + message + ", status=" + status + "]";
    }
}

