package com.example.SecondHandBookBazaar.Controller;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.SecondHandBookBazaar.Entity.DonateBook;
import com.example.SecondHandBookBazaar.Respo.Response;
import com.example.SecondHandBookBazaar.Service.DonateBookService;
import org.springframework.web.bind.annotation.GetMapping;


@CrossOrigin
@RestController
@RequestMapping("/donateBook/api")
public class DonateController {
    
    @Autowired
    DonateBookService donateBookService;

    @PostMapping("/donate/{id}")
    public Response donate(@RequestBody DonateBook donatebook , @PathVariable ("id") Long id) {
        Response response = donateBookService.donate(donatebook , id);
        return response;
    }
    @GetMapping("/getDonatebookdetails/{id}")
    public List<DonateBook> getBookDetails(@PathVariable ("id") Long id) {
        List<DonateBook> donatebook = donateBookService.getDonatebookdetails(id);

        return donatebook;
    }

   
}
