package com.example.SecondHandBookBazaar.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.SecondHandBookBazaar.DataTransferObjects.OrderStatusDto;
import com.example.SecondHandBookBazaar.Respo.Response;
import com.example.SecondHandBookBazaar.Service.OrderBookService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;





@RestController
@CrossOrigin
@RequestMapping("/order/api")
public class OrderBookController {
	
	@Autowired
	OrderBookService orderBookService;

	@PostMapping("/addOrder/{bookid}/{userid}")
	public Response addOrdeString(@PathVariable("bookid") Long bookId, @PathVariable("userid")Long Id) {
		Response response = orderBookService.AddOrder(bookId,Id);
		
		return response;
	}
	
	@GetMapping("/orderData/{id}")
	public List<OrderStatusDto> getOrderData(@PathVariable("id") Long id) {
		return orderBookService.getOrderData(id);
	}

	@PutMapping("/buyBook/{id}")
	public Response putMethodName(@PathVariable("id") Long id) {
		Response response = orderBookService.buyBook(id);
		return response;
	}

	@PutMapping("/addQty/{id}")
	public Response  addBooksqty(@PathVariable ("id") Long id) {
		Response response = orderBookService.addQty(id);
		return response;
	}

	@PutMapping("/ReduceQty/{id}")
	public Response ReduceQtyBook(@PathVariable("id") Long id) {
		Response response = orderBookService.ReduceQty(id);
		return response;
		
		
	}

	@DeleteMapping("/remove/{id}")
	public Response postMethodName(@PathVariable("id") Long id) {
		Response response = orderBookService.removeCart(id);
		return response;
		
		
	}

	@DeleteMapping("/cancelOrder/{id}")
    public Response cancelOrder(@PathVariable("id") Long id){
        Response response = orderBookService.cancelOrder(id);
        return response;
    }
	

}
