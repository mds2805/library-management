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
import com.example.entity.User;
import com.example.repository.UserRepository;

@CrossOrigin(origins = {"*"})
@RestController()
@RequestMapping("/user")
public class UserController {

	@Autowired
	UserRepository userRepository;
	
	@GetMapping(produces= {"application/json"})
	public List<User> getAllUsers(){
		return userRepository.findAll();
		
	}
	@GetMapping(value="/{id}",produces = {"application/json"})  
	public User getUser(@PathVariable("id") String id)   
	{  
	return userRepository.findById(id).get(); 
	}
	@DeleteMapping(value="/{id}",produces = {"application/json"})  
	public StatusInfo deleteUser(@PathVariable("id") String id)   
	{  
		userRepository.deleteById(id); 
		StatusInfo statusInfo=new StatusInfo();
		statusInfo.setMessage("Deleted successfully");
		return statusInfo;
	} 
	@PostMapping("/add")  
	public StatusInfo saveBook(@RequestBody User user)   
	{  
	userRepository.save(user); 
	StatusInfo statusInfo=new StatusInfo();
	statusInfo.setMessage("Added successfully");
	return statusInfo;
	 
	}
}
