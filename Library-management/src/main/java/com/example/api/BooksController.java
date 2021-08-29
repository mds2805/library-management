package com.example.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Book;
import com.example.repository.BookRepository;

@CrossOrigin(origins = {"*"})
@RestController()
@RequestMapping("/book")
public class BooksController {

	@Autowired
	BookRepository bookRepository;
	
	@GetMapping(produces= {"application/json"})
	public List<Book> getAllBooks(){
		return bookRepository.findAll();
		
	}
	@GetMapping(value="/{id}",produces = {"application/json"})  
	public Book getBook(@PathVariable("id") String id)   
	{  
	return bookRepository.findById(id).get();
		
	}
	@DeleteMapping(value="/{id}",produces = {"application/json"})  
	public StatusInfo deleteBook(@PathVariable("id") String id)   
	{  
		bookRepository.deleteById(id); 
		StatusInfo statusInfo=new StatusInfo();
		statusInfo.setMessage("Deleted successfully");
		return statusInfo;
	} 
	@PostMapping("/add")  
	public StatusInfo saveBook(@RequestBody Book book)   
	{  
	bookRepository.save(book);
	StatusInfo statusInfo=new StatusInfo();
	statusInfo.setMessage("Added successfully");
	return statusInfo;
	 
	}
	
}
