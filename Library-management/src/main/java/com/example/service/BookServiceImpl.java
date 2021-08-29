package com.example.service;

import org.springframework.stereotype.Service;

import com.example.entity.Book;
import com.example.repository.BookRepository;
@Service
public class BookServiceImpl implements BookService{
	
	BookRepository bookRepository;
	

	public BookServiceImpl(BookRepository bookRepository) {
		super();
		this.bookRepository = bookRepository;
	}


	@Override
	public void addBook(String b_id, String b_name, String Author) {
		  Book book =new Book();
		  book.setB_id(b_id);
		  book.setB_name(b_name);
		  book.setAuthor(Author);
		  bookRepository.save(book);
		
	}
	

}
