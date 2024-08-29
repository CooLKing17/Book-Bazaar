package com.example.SecondHandBookBazaar.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.SecondHandBookBazaar.DataTransferObjects.OrderStatusDto;
import com.example.SecondHandBookBazaar.Respo.Response;

@Service
public interface OrderBookService {

        public Response AddOrder(Long sellBookId ,Long Id);

        public List<OrderStatusDto> getOrderData(Long Id);

        public Response buyBook(Long Id);

        public Response addQty(Long Id);

        public Response ReduceQty(Long Id);

        public Response removeCart(Long Id);

        public Response cancelOrder(Long id);
}
