package com.example.SecondHandBookBazaar.Service.ServiceImpl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SecondHandBookBazaar.Entity.DonateBook;
import com.example.SecondHandBookBazaar.Entity.User;
import com.example.SecondHandBookBazaar.Repo.DonateBookRepo;
import com.example.SecondHandBookBazaar.Repo.UserRepo;
import com.example.SecondHandBookBazaar.Respo.Response;
import com.example.SecondHandBookBazaar.Service.DonateBookService;

@Service
public class DonateBookServiceImpl implements DonateBookService {

    @Autowired
    DonateBookRepo donateBookRepo;
    
    @Autowired
    UserRepo userRepo;

    @Override
    public List<DonateBook> getDonatebookdetails(Long id) {
        List<DonateBook> donateBooks = donateBookRepo.findByUserId(id);
        List<DonateBook> books = donateBooks.stream().map(this::mapToDo).collect(Collectors.toList());

        return books;

    }

    public DonateBook mapToDo(DonateBook donateBook) {
        DonateBook donateDto = new DonateBook();

        donateDto.setId(donateBook.getId());
        donateDto.setBookname(donateBook.getBookname());
        donateDto.setAuthorname(donateBook.getAuthorname());
        donateDto.setBookquantity(donateBook.getBookquantity());
        donateDto.setType(donateBook.getType());
        donateDto.setBookcondition(donateBook.getBookcondition());
        donateDto.setOrphanagename(donateBook.getOrphanagename());
        donateDto.setEdition(donateBook.getEdition());
        donateDto.setDescription(donateBook.getDescription());
        donateDto.setLanguage(donateBook.getLanguage());
        donateDto.setBookpublisher(donateBook.getBookpublisher());
//        donateDto.setUser(donateBook.getUser());
        return donateDto;
    }

    @Override
    public Response donate(DonateBook donatebook, Long id) {
        Long idd = (long) 0;
        Optional<User> user = userRepo.findById(id);
        if (id != null) {
        	donatebook.setUser(user.get());
            DonateBook donateBook2 = donateBookRepo.save(donatebook);
            return new Response("Book donated successfully", true, donateBook2.getId());
        }
        return new Response("Book not Unsuccessful ", false, idd);
    }

}
