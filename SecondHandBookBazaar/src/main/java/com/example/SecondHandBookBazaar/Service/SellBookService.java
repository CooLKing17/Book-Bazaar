package com.example.SecondHandBookBazaar.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.SecondHandBookBazaar.DataTransferObjects.BookTypeDTO;
import com.example.SecondHandBookBazaar.DataTransferObjects.SellBookDTO;
import com.example.SecondHandBookBazaar.DataTransferObjects.SellBookEdit;
import com.example.SecondHandBookBazaar.Entity.Image;
import com.example.SecondHandBookBazaar.Entity.SellBook;
import com.example.SecondHandBookBazaar.Respo.Response;

@Service
public interface SellBookService {

    public Response newBooKAdd(SellBook sellBook ,Long id);

    public String SaveImages (Image image , Long id);

    public Optional<SellBookDTO> GetBookInfo(Long id);

    public List<BookTypeDTO> getAllBooks();

    public List<SellBookDTO> getUserBookList(Long id);

    public Response EditBook(Long id , SellBookEdit user );

    public Response DeleteBook(Long id);

    
}
