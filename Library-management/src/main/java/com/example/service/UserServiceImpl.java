package com.example.service;

import org.springframework.stereotype.Service;

import com.example.entity.User;
import com.example.repository.UserRepository;
@Service
public class UserServiceImpl implements UserService  {
	UserRepository userRepository;
	
	public UserServiceImpl(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}

	@Override
	public void doAdd(String id, String name, String Address) {
		
		
		User user=new User();
		user.setId(id);
		user.setName(name);
		user.setAddress(Address);
		userRepository.save(user);
	}

	

}
