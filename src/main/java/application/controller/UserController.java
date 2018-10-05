package application.controller;

import application.domain.User;
import application.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;
import java.util.Collection;
import java.util.stream.Collectors;


@RestController
public class UserController {

    @Autowired
    private UserRepository repository;


    @GetMapping("/usersAll")
    Iterable<User> all(){
        return repository.findAll();
    }

    @GetMapping("/user/{id}")
    Optional<User> one(@PathVariable Long id) {

        return repository.findById(id);
    }

    @RequestMapping("/usersAllString")
    public String userAll(){

        String res = "";

        for (User customer : repository.findAll()) {
            res = res + " " + customer.toString();
        }

        return res;
    }

    @GetMapping("/good-users")
    @CrossOrigin(origins = "http://localhost:3000")
    public Collection<User> goodBeers() {
        return (Collection<User>) repository.findAll().stream()
                .collect(Collectors.toList());
    }

}
