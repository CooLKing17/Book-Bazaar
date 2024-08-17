package com.example.SecondHandBookBazaar.Respo;

public class Response {
    private String massage;
    private boolean status;
    private Long id;
    
    
	public Response() {
		super();
	}
	public Response(String massage, boolean status, Long id) {
		super();
		this.massage = massage;
		this.status = status;
		this.id = id;
	}
	public String getMassage() {
        return massage;
    }
    public void setMassage(String massage) {
        this.massage = massage;
    }
    public boolean isStatus() {
        return status;
    }
    public void setStatus(boolean status) {
        this.status = status;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    
}
