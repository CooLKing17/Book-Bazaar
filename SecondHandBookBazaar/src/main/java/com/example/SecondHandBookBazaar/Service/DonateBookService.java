package com.example.SecondHandBookBazaar.Service;

import java.util.List;

import com.example.SecondHandBookBazaar.Entity.DonateBook;
import com.example.SecondHandBookBazaar.Respo.Response;

public interface DonateBookService {
    
    public Response donate(DonateBook donatebook , Long id);

    public List<DonateBook> getDonatebookdetails(Long id);
}
