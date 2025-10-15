package com.lfb241.toDoServer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@SpringBootApplication
@RestController
public class ToDoServerApplication {
	public static void main(String[] args) {
		SpringApplication.run(ToDoServerApplication.class, args);
	}
	@GetMapping("/get/data")
	public String getMethodName(@RequestParam String param) {
		return new String();
	}
	


}
