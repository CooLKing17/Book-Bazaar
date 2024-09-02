package com.example.SecondHandBookBazaar.Service.ServiceImpl;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.Base64;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.sql.rowset.serial.SerialBlob;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.SecondHandBookBazaar.DataTransferObjects.OrderBookDTO;
import com.example.SecondHandBookBazaar.DataTransferObjects.OrderBookImageDTO;
import com.example.SecondHandBookBazaar.DataTransferObjects.OrderStatusDto;
import com.example.SecondHandBookBazaar.Entity.Image;
import com.example.SecondHandBookBazaar.Entity.OrderBook;
import com.example.SecondHandBookBazaar.Entity.OrderBookImage;
import com.example.SecondHandBookBazaar.Entity.SellBook;
import com.example.SecondHandBookBazaar.Entity.User;
import com.example.SecondHandBookBazaar.Repo.ImageRepo;
import com.example.SecondHandBookBazaar.Repo.OrderBookImageRepo;
import com.example.SecondHandBookBazaar.Repo.OrderBookRepo;
import com.example.SecondHandBookBazaar.Repo.SellBookRepo;
import com.example.SecondHandBookBazaar.Repo.UserRepo;
import com.example.SecondHandBookBazaar.Respo.Response;
import com.example.SecondHandBookBazaar.Service.OrderBookService;

@Service
public class OrderBookServiceImpl implements OrderBookService {

    @Autowired
    OrderBookRepo orderBookRepo;

    @Autowired
    SellBookRepo sellBookRepo;

    @Autowired
    ImageRepo imageRepo;

    @Autowired
    OrderBookImageRepo orderBookImageRepo;
    
    @Autowired
    UserRepo userRepo;

    @Override
    public Response AddOrder(Long sellBookId, Long userId) {
        try {
            // Fetch the SellBook entity by id
            Optional<SellBook> optionalSellBook = sellBookRepo.findById(sellBookId);

            if (!optionalSellBook.isPresent()) {
                return new Response("Book not found", false, null);
            }

            SellBook sellBook = optionalSellBook.get();
            Optional<User> user= userRepo.findById(userId);
            // Check if the user is trying to order their own book
            if (sellBook.getUser().getId().equals(userId)) {
                return new Response("You cannot order your own book", false, userId);
            }
            if (orderBookRepo.existsByUserIdAndBookId(userId, sellBookId)) {
                return new Response("You already added this book to your cart", true, userId);
            }


            // Create a new OrderBook entity
            OrderBook orderBook = new OrderBook();
            orderBook.setBookId(sellBook.getId());
            orderBook.setName(sellBook.getName());
            orderBook.setAuthorName(sellBook.getAuthorName());
            orderBook.setReleaseDate(sellBook.getReleaseDate());
            orderBook.setRating(sellBook.getRating());
            orderBook.setType(sellBook.getType());
            orderBook.setSubType(sellBook.getSubType());
            orderBook.setBookCondition(sellBook.getBookCondition());
            orderBook.setOldbookcondition(sellBook.getOldbookcondition());
            orderBook.setOriginalPrice(sellBook.getOriginalPrice());
            orderBook.setSellingPrice(sellBook.getSellingPrice());
            orderBook.setEdition(sellBook.getEdition());
            orderBook.setDescription(sellBook.getDescription());
            orderBook.setIsbn10(sellBook.getIsbn10());
            orderBook.setIsbn13(sellBook.getIsbn13());
            orderBook.setLanguage(sellBook.getLanguage());
            orderBook.setMissingPages(sellBook.getMissingPages());
            orderBook.setTotalPages(sellBook.getTotalPages());
            orderBook.setStatus(false);
            orderBook.setBookpublisher(sellBook.getBookpublisher());
            orderBook.setQuantity(sellBook.getQuantity()-(sellBook.getQuantity()-1)); // Set quantity to 1 for a new order

            orderBook.setBookuserId(sellBook.getUser().getId());
            orderBook.setUser(user.get());

            orderBookRepo.save(orderBook);

            

            List<Image> images = imageRepo.findBySellId(sellBook.getId());

            // Map images to OrderBookImage and associate with OrderBook
            List<OrderBookImage> orderBookImages = images.stream().map(image -> {
                OrderBookImage orderBookImage = new OrderBookImage();
                orderBookImage.setName(image.getName());

                try {
                    Blob blob = image.getImage(); // Assuming image.getImage() returns a Blob
                    InputStream inputStream = blob.getBinaryStream();
                    byte[] imageData = inputStream.readAllBytes();
                    orderBookImage.setImage(imageData);
                } catch (Exception e) {
                    e.printStackTrace();  // Handle the exception properly
                }

                orderBookImage.setOrderBook(orderBook);
                return orderBookImage;
            }).collect(Collectors.toList());

            // Save images
            orderBookImageRepo.saveAll(orderBookImages);

 
            return new Response("Book added to cart successfully", true, orderBook.getId());

        } catch (Exception e) {
            System.out.print(e);
            return new Response("Failed to add book to cart", false, null);
        }
    }

    @Override
    public List<OrderStatusDto> getOrderData(Long Id) {
        List<OrderBook> books = orderBookRepo.findByUserId(Id);
        Map<Boolean,List<OrderBook>> map = books.stream().collect(Collectors.groupingBy(OrderBook::getStatus));
        return map.entrySet().stream().map(entry->new OrderStatusDto(entry.getKey(),entry.getValue().stream().map(this::mapTODo).collect(Collectors.toList()))).collect(Collectors.toList());

    
//        List<OrderBookDTO> orderbooks = books.stream().map(this::mapTODo).collect(Collectors.toList());
//        return orderbooks;
    }

    public OrderBookDTO mapTODo(OrderBook books) {
        OrderBookDTO orderBook = new OrderBookDTO();
        orderBook.setId(books.getId());
        orderBook.setBookId(books.getBookId());
        orderBook.setName(books.getName());
        orderBook.setAuthorName(books.getAuthorName());
        orderBook.setReleaseDate(books.getReleaseDate());
        orderBook.setRating(books.getRating());
        orderBook.setType(books.getType());
        orderBook.setSubType(books.getSubType());
        orderBook.setBookCondition(books.getBookCondition());
        orderBook.setOldbookcondition(books.getOldbookcondition());
        orderBook.setOriginalPrice(books.getOriginalPrice());
        orderBook.setSellingPrice(books.getSellingPrice());
        orderBook.setEdition(books.getEdition());
        orderBook.setDescription(books.getDescription());
        orderBook.setIsbn10(books.getIsbn10());
        orderBook.setIsbn13(books.getIsbn13());
        orderBook.setLanguage(books.getLanguage());
        orderBook.setMissingPages(books.getMissingPages());
        orderBook.setTotalPages(books.getTotalPages());
        orderBook.setQuantity(books.getQuantity());
        Long imageId = books.getId();
        List<OrderBookImage> images = orderBookImageRepo.findByOrderBookId(imageId);
        List<OrderBookImageDTO> imageDTOs = images.stream().map(this::mapToDTOi).collect(Collectors.toList());
        orderBook.setImages(imageDTOs);

        return orderBook;  // Make sure to return the orderBook object
    }

    private OrderBookImageDTO mapToDTOi(OrderBookImage image) {
        OrderBookImageDTO orderBookImage = new OrderBookImageDTO();
        orderBookImage.setId(image.getId());
        orderBookImage.setName(image.getName());
        try {
            Blob imageBlob = byteArrayToBlob(image.getImage()); // Convert if necessary
            orderBookImage.setImageBase64(blobToBase64(imageBlob));
        } catch (IOException | SQLException e) {
            e.printStackTrace();
        }
        return orderBookImage;
    }
    private Blob byteArrayToBlob(byte[] imageBytes) throws SQLException {
        if (imageBytes == null) {
            return null;
        }
        return new javax.sql.rowset.serial.SerialBlob(imageBytes);
    }

    private String blobToBase64(Blob blob) throws IOException, SQLException {
        if (blob == null) {
            return null;
        }
    
        try (InputStream inputStream = blob.getBinaryStream();
                ByteArrayOutputStream outputStream = new ByteArrayOutputStream()) {
    
            byte[] buffer = new byte[4096];
            int bytesRead;
    
            while ((bytesRead = inputStream.read(buffer)) != -1) {
                outputStream.write(buffer, 0, bytesRead);
            }
    
            return Base64.getEncoder().encodeToString(outputStream.toByteArray());
        }
    }

  
  @Override
  public Response buyBook(Long id) {
      try {
          Optional<OrderBook> optionalOrderBook = orderBookRepo.findById(id);
  
          if (!optionalOrderBook.isPresent()) {
              return new Response("OrderBook not found", false, id);
          }
  
          OrderBook orderBook = optionalOrderBook.get();
          Long sellbookId = orderBook.getBookId();
          
          Optional<SellBook> optionalSellBook = sellBookRepo.findById(sellbookId);
          if (!optionalSellBook.isPresent()) {
              return new Response("SellBook not found", false, sellbookId);
          }
  
          SellBook sellBook = optionalSellBook.get();
          
          // Check if the book is already marked as bought
          if (orderBook.getStatus()) {
              return new Response("Book has already been bought", false, id);
          }
  
          // Update the status to 'bought'
          orderBook.setStatus(true);
  
          // Reduce the quantity of the SellBook
          Long remainingQuantity = sellBook.getQuantity() - orderBook.getQuantity();
          sellBook.setQuantity(remainingQuantity);
          
          // Save the updated orderBook
          orderBookRepo.save(orderBook);
  
          // If the quantity of SellBook is 0, delete the SellBook
          if (remainingQuantity <= 0) {
              sellBookRepo.delete(sellBook);
          } else {
              // Otherwise, save the updated SellBook
              sellBookRepo.save(sellBook);
          }
  
          return new Response("Book bought successfully", true, id);
  
      } catch (Exception e) {
          e.printStackTrace(); // Handle the exception properly
          return new Response("Failed to buy book", false, id);
      }
  }
  

@Override
public Response addQty(Long id) {
    Optional<OrderBook> optionalOrderBook = orderBookRepo.findById(id);
    
    if (optionalOrderBook.isPresent()) {
        OrderBook orderBook = optionalOrderBook.get();
        Long sellBookId = orderBook.getBookId();
        
        Optional<SellBook> optionalSellBook = sellBookRepo.findById(sellBookId);
        if (!optionalSellBook.isPresent()) {
            return new Response("SellBook not found", false, sellBookId);
        }

        SellBook sellBook = optionalSellBook.get();
        
        // Check if the SellBook has enough quantity to allow the increase
        if (sellBook.getQuantity() > orderBook.getQuantity()) {
            orderBook.setQuantity(orderBook.getQuantity() + 1);
            orderBookRepo.save(orderBook);
            return new Response("Quantity added successfully", true, id);
        } else {
            return new Response("Insufficient quantity in stock", false, id);
        }
    }

    return new Response("OrderBook not found", false, id);
}


@Override
public Response ReduceQty(Long Id) {
    Optional<OrderBook> books = orderBookRepo.findById(Id);
    OrderBook orderBook = books.get();

    if (books.isPresent()) {
    	if(orderBook.getQuantity()>=1) {
        OrderBook book = books.get();
        book.setQuantity(book.getQuantity() - 1);
        orderBookRepo.save(book);
        return new Response("Quantity reduced successfully", true, Id);
    	}
    	return new Response("Quantity reduced unsuccessfully", true, Id);
    }
    return null;
}

@Override
public Response removeCart(Long Id) {
    Optional<OrderBook> books = orderBookRepo.findById(Id);
    if (books.isPresent()) {
        OrderBook book = books.get();
        orderBookRepo.delete(book);
        return new Response("Cart removed successfully", true, Id);
    }
    return new Response("Some problem", false, Id);

}
@Override 


public Response cancelOrder(Long id) {
    Optional<OrderBook> orderBookOpt = orderBookRepo.findById(id);
    
    if (orderBookOpt.isPresent()) {
        OrderBook orderBook = orderBookOpt.get();
        Long bookId = orderBook.getBookId();
        Long userId = orderBook.getBookuserId();

        Optional<SellBook> sellBookOpt = sellBookRepo.findById(bookId);
        SellBook sellBook;

        if (sellBookOpt.isPresent()) {
            sellBook = sellBookOpt.get();
            sellBook.setQuantity(sellBook.getQuantity() + orderBook.getQuantity());
            orderBookRepo.delete(orderBook);
            return new Response("Order cancelled successfully good", true, id);
        } else {
            sellBook = new SellBook();
            Optional<User> userOpt = userRepo.findById(userId);
            if (userOpt.isPresent()) {
                User user = userOpt.get();
             
            sellBook.setAuthorName(orderBook.getAuthorName());
            sellBook.setName(orderBook.getName());
            sellBook.setDescription(orderBook.getDescription());
            sellBook.setQuantity(orderBook.getQuantity());
            sellBook.setReleaseDate(orderBook.getReleaseDate());
            sellBook.setUser(user);
            sellBook.setType(orderBook.getType());
            sellBook.setSubType(orderBook.getSubType());
            sellBook.setBookCondition(orderBook.getBookCondition());
            sellBook.setOldbookcondition(orderBook.getOldbookcondition());
            sellBook.setOriginalPrice(orderBook.getOriginalPrice());
            sellBook.setSellingPrice(orderBook.getSellingPrice());
            sellBook.setRating(orderBook.getRating());
            sellBook.setEdition(orderBook.getEdition());
            sellBook.setIsbn10(orderBook.getIsbn10());
            sellBook.setIsbn13(orderBook.getIsbn13());
            sellBook.setLanguage(orderBook.getLanguage());
            sellBook.setMissingPages(orderBook.getMissingPages());
            sellBook.setTotalPages(orderBook.getTotalPages());
            sellBook.setBookpublisher(orderBook.getBookpublisher());
            SellBook save = sellBookRepo.save(sellBook);

            List<OrderBookImage> orderBookImages = orderBookImageRepo.findByOrderBookId(orderBook.getId());
        List<Image> images = orderBookImages.stream().map(orderBookImage -> {
            Image image = new Image();
            image.setName(orderBookImage.getName());
            try {
                byte[] imageData = orderBookImage.getImage(); // Assuming it returns byte[]
                
                // Convert byte[] to Blob
                Blob blob = new SerialBlob(imageData);
                image.setImage(blob);
                
                // Set the association
                image.setSell(save); // Associate with SellBook
            } catch (Exception e) {
                e.printStackTrace();  // Handle the exception properly
            }
            return image;
        }).collect(Collectors.toList());
        imageRepo.saveAll(images);
        orderBookRepo.delete(orderBook);
        return new Response("Order cancelled successfully done", true, id);
            } else {
                return new Response("User not found", false, null);
            }
        }

       
       
        
    }
    
    return new Response("Order not found", false, null);
}




}
