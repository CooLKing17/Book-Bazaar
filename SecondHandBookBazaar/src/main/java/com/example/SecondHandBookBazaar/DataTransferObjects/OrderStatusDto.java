package com.example.SecondHandBookBazaar.DataTransferObjects;

import java.util.List;

public class OrderStatusDto {

    private Boolean status;
    private List<OrderBookDTO> orderBookDto;
	public Boolean getStatus() {
		return status;
	}
	public void setStatus(Boolean status) {
		this.status = status;
	}
	public List<OrderBookDTO> getOrderBookDto() {
		return orderBookDto;
	}
	public void setOrderBookDto(List<OrderBookDTO> orderBookDto) {
		this.orderBookDto = orderBookDto;
	}
	public OrderStatusDto(Boolean status, List<OrderBookDTO> orderBookDto) {
		super();
		this.status = status;
		this.orderBookDto = orderBookDto;
	}
	public OrderStatusDto() {
		super();
	}
    
    
    
}
