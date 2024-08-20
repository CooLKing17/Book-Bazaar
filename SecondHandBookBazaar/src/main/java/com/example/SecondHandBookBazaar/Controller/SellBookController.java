package com.example.SecondHandBookBazaar.Controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.SecondHandBookBazaar.DataTransferObjects.BookTypeDTO;
import com.example.SecondHandBookBazaar.DataTransferObjects.SellBookDTO;
import com.example.SecondHandBookBazaar.DataTransferObjects.SellBookEdit;
import com.example.SecondHandBookBazaar.Entity.Image;
import com.example.SecondHandBookBazaar.Entity.SellBook;
import com.example.SecondHandBookBazaar.Respo.Response;
import com.example.SecondHandBookBazaar.Service.SellBookService;

import java.io.IOException;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

import javax.sql.rowset.serial.SerialException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
@CrossOrigin
@RequestMapping("/sellBook/api")
public class SellBookController {
    @Autowired
    SellBookService sellBookService;

    @PostMapping("/BookAdd/{id}")
    public Response AddSellBook(@RequestBody SellBook sellBook, @PathVariable("id") Long id) {
        Response book = sellBookService.newBooKAdd(sellBook, id);
        return book;
    }

    @PostMapping("/uploadImage/{id}")
    public String UploadImages(@RequestParam("files") List<MultipartFile> files, @PathVariable Long id)
            throws IOException, SerialException, SQLException {

        for (MultipartFile file : files) {

            byte[] bytes = file.getBytes();
            Image image = new Image();

            Blob blob = new javax.sql.rowset.serial.SerialBlob(bytes);
            image.setImage(blob);
            image.setName(file.getOriginalFilename());
            sellBookService.SaveImages(image, id);
        }
        return "Image successfully uploaded";

    }

    @GetMapping("/getbookDetails/{bookid}")
    public ResponseEntity<?> getBookInfo(@PathVariable("bookid") Long bookid) {
        if (bookid == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Book ID is required");
        }

        Optional<SellBookDTO> book = sellBookService.GetBookInfo(bookid);
        if (book.isPresent()) {
            return ResponseEntity.ok(book.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Book not found");
        }
    }

    @GetMapping("/getAllBooks")
    public List<BookTypeDTO> getAllBooks() {
        return sellBookService.getAllBooks();
    }

    @GetMapping("/getBookList/{id}")
    public List<SellBookDTO> getMethodName(@PathVariable ("id") Long id) {
        return sellBookService.getUserBookList(id);
    }

    @PutMapping("/editBook/{id}")
    public Optional<SellBookDTO> EditBook(@PathVariable ("id") Long id, @RequestBody SellBookEdit sellBookEdit) {
        Optional<SellBookDTO> book =sellBookService.EditBook(id,sellBookEdit);
        return book;
    }

    @DeleteMapping("/DeleteBook/{id}")
    public Response DelatedBook(@PathVariable("id") Long id){
        Response response = sellBookService.DeleteBook(id);
        return response;
    }
    
}
