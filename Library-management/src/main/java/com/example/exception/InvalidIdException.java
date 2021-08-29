package com.example.exception;

public class InvalidIdException extends RuntimeException {
	 

	
	public InvalidIdException(String id) {
		super("Invalid id: "+id);
	}
}
