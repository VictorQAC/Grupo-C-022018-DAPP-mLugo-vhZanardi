package application.controller;

import application.Aspect.LogExecutionTime;
import application.domain.Auction;
import application.domain.User;
import application.dto.UserDTO;
import application.repository.UserRepository;
import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalTime;
import java.util.Optional;
import java.util.Collection;
import java.util.stream.Collectors;


@RestController
public class UserController {

    @Autowired
    private UserRepository repository;


    @GetMapping("/userBy/{name}")
    User findByNickName1(@PathVariable String name) {

        User res = repository.findByNickName(name);

        if (res != null) {
            return repository.findByNickName(name);
        } else {
            return new User();
        }

    }

    @GetMapping(path="/userList")
    public Collection<User> auctionList() {
        return (Collection<User>) repository.findAll().stream()
                .collect(Collectors.toList());
    }


    @PostMapping(path ="/userCreate")
    public void userCreate(@RequestBody UserDTO user) {

        User usr = new User();
        usr.setName(user.getName());
        usr.setLastName(user.getLastName());
        usr.setEmail(user.getEmail());
        usr.setNickName(user.getNickName());
        repository.save(usr);
    }

}
