package com.example.grupoc022018;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class Grupoc022018Application {

    public static void main(String[] args) {
        SpringApplication.run(Grupoc022018Application.class, args);
    }

    @RequestMapping("/hello")
    public String sayHello(){
        return "ESTO FUNCA";
    }
}
