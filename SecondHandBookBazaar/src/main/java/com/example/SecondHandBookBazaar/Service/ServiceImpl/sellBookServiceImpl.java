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

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SecondHandBookBazaar.DataTransferObjects.BookTypeDTO;
import com.example.SecondHandBookBazaar.DataTransferObjects.ImageDTO;
import com.example.SecondHandBookBazaar.DataTransferObjects.SellBookDTO;
import com.example.SecondHandBookBazaar.DataTransferObjects.SellBookEdit;
import com.example.SecondHandBookBazaar.Entity.Image;
import com.example.SecondHandBookBazaar.Entity.SellBook;
import com.example.SecondHandBookBazaar.Entity.User;
import com.example.SecondHandBookBazaar.Repo.ImageRepo;
import com.example.SecondHandBookBazaar.Repo.SellBookRepo;
import com.example.SecondHandBookBazaar.Repo.UserRepo;
import com.example.SecondHandBookBazaar.Respo.Response;
import com.example.SecondHandBookBazaar.Service.SellBookService;

@Service
public class sellBookServiceImpl implements SellBookService {
    @Autowired
    SellBookRepo sellBookRepo;
    @Autowired
    UserRepo userRepo;

    @Autowired
    ImageRepo imagerepo;

    @Override
    public Response newBooKAdd(SellBook sellBook, Long id) {
        Long idLong = (long) 0;
        if (sellBook != null) {
            Optional<User> user = userRepo.findById(id);

            if (user.isPresent()) {
                sellBook.setUser(user.get());
                SellBook savedBook = sellBookRepo.save(sellBook);
                return new Response("Book added successfully", true, savedBook.getId());
            } else {
                return new Response("User not found", false, idLong);
            }
        }
        return new Response("Invalid book details", false, idLong);
    }

    @Override
    public String SaveImages(Image image, Long id) {
        SellBook book = sellBookRepo.findById(id).orElseThrow(() -> new RuntimeException("Book not found"));
        image.setSell(book);
        imagerepo.save(image);
        return "Images uploaded successfully";

    }

    @Override
    public Optional<SellBookDTO> GetBookInfo(Long id) {
        Optional<SellBook> bookOpt = sellBookRepo.findById(id);
        if (bookOpt.isPresent()) {
            SellBook book = bookOpt.get();
            Long bookid = book.getId();
            List<Image> images = imagerepo.findBySellId(bookid);
            SellBookDTO bookDTO = mapToDTO(book, images);
            return Optional.of(bookDTO);
        }
        return Optional.empty();
    }

    private SellBookDTO mapToDTO(SellBook book, List<Image> images) {
        SellBookDTO bookDTO = new SellBookDTO();
        bookDTO.setId(book.getId());
        bookDTO.setName(book.getName());
        bookDTO.setReleaseDate(book.getReleaseDate());
        bookDTO.setAuthorName(book.getAuthorName());
        bookDTO.setRating(book.getRating());
        bookDTO.setType(book.getType());
        bookDTO.setOldbookcondition(book.getOldbookcondition());
        bookDTO.setSubType(book.getSubType());
        bookDTO.setBookCondition(book.getBookCondition());
        bookDTO.setOriginalPrice(book.getOriginalPrice());
        bookDTO.setSellingPrice(book.getSellingPrice());
        bookDTO.setEdition(book.getEdition());
        bookDTO.setDescription(book.getDescription());
        bookDTO.setIsbn10(book.getIsbn10());
        bookDTO.setIsbn13(book.getIsbn13());
        bookDTO.setLanguage(book.getLanguage());
        bookDTO.setMissingPages(book.getMissingPages());
        bookDTO.setTotalPages(book.getTotalPages());
        bookDTO.setBookpublisher(book.getBookpublisher());
        bookDTO.setQuantity(book.getQuantity());
        bookDTO.setUserId(book.getUser().getId());

        List<ImageDTO> imageDTOs = images.stream().map(this::mapToDTOi).collect(Collectors.toList());
        bookDTO.setImages(imageDTOs);

        return bookDTO;
    }

    private ImageDTO mapToDTOi(Image image) {
        ImageDTO imageDTO = new ImageDTO();
        imageDTO.setId(image.getId());
        imageDTO.setName(image.getName());
        try {
            imageDTO.setImageBase64(blobToBase64(image.getImage()));
        } catch (IOException | SQLException e) {
            e.printStackTrace();
        }
        return imageDTO;
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
    public List<BookTypeDTO> getAllBooks() {
        List<SellBook> books = sellBookRepo.findAll();
        Map<String,List<SellBook>> map = books.stream().collect(Collectors.groupingBy(SellBook::getType));
        return map.entrySet().stream().map(entry->new BookTypeDTO(entry.getKey(),entry.getValue().stream().map(this::mapToDTO).collect(Collectors.toList()))).collect(Collectors.toList());
    }

    private SellBookDTO mapToDTO(SellBook sellBook) {
        SellBookDTO dto = new SellBookDTO();
        dto.setAuthorName(sellBook.getAuthorName());
        dto.setDescription(sellBook.getDescription());
        dto.setEdition(sellBook.getEdition());
        dto.setId(sellBook.getId());
        dto.setIsbn10(sellBook.getIsbn10());
        dto.setIsbn13(sellBook.getIsbn13());
        dto.setLanguage(sellBook.getLanguage());
        dto.setMissingPages(sellBook.getMissingPages());
        dto.setName(sellBook.getName());
        dto.setSubType(sellBook.getSubType());
        dto.setBookCondition(sellBook.getBookCondition());
        dto.setOldbookcondition(sellBook.getOldbookcondition());
        dto.setOriginalPrice(sellBook.getOriginalPrice());
        dto.setRating(sellBook.getRating());
        dto.setReleaseDate(sellBook.getReleaseDate());
        dto.setSellingPrice(sellBook.getSellingPrice());
        dto.setTotalPages(sellBook.getTotalPages());
        dto.setType(sellBook.getType());
        
        dto.setBookpublisher(sellBook.getBookpublisher());
        dto.setQuantity(sellBook.getQuantity());
        dto.setUserId(sellBook.getUser().getId());

        Long imageId = sellBook.getId();

        List<Image> images = imagerepo.findBySellId(imageId);

        List<ImageDTO> imageDTOs = images.stream().map(this::mapToDTOi).collect(Collectors.toList());
        dto.setImages(imageDTOs);
        return dto;
    }

    @Override
    public List<SellBookDTO> getUserBookList(Long id) {
        List<SellBook> books = sellBookRepo.findByUserId(id);
        List<SellBookDTO> bookDTO = books.stream().map(this::mapToDTO).collect(Collectors.toList());
        return bookDTO;
    }

    @Override
    public Response EditBook(Long id, SellBookEdit user) {
    	Long iid =(long) 0;
        Optional<SellBook> bookOptional = sellBookRepo.findById(id);
    if (bookOptional.isPresent()) {
        SellBook sellBook = bookOptional.get();
        if (user.getSellingPrice() != null) {
        	sellBook.setSellingPrice(user.getSellingPrice());
        	}
        if (user.getDescription() != null) {
        	sellBook.setDescription(user.getDescription());
        	}
        if (user.getMissingPages() != null) {
        	sellBook.setMissingPages(user.getMissingPages());
        	}
        if (user.getQuantity() != null) {
        	sellBook.setQuantity(user.getQuantity());
        	}

        
        // Save the updated book entity
        SellBook updatedBook = sellBookRepo.save(sellBook);

        // Fetch related images
        Long imageID = updatedBook.getId();
        List<Image> images = imagerepo.findBySellId(imageID);

        // Convert to DTO
        SellBookDTO sellBookDTO = mapToDTO(updatedBook, images);
//        System.out.print(sellBookDTO);
        return new Response("Edit Successfully ",true , id);
    } else {
        // Return empty if book is not found
        return new Response("Edit unsuccessfully", false ,iid);
    }
    }

    @Override
    public Response DeleteBook(Long id) {
        if (id != null && sellBookRepo.existsById(id)) {
            sellBookRepo.deleteById(id);
            return new Response("Book is deleted", true, id);
        }
        return new Response("Book is not deleted Or Book is not present", false, id);
    }

   


    
    
}
