package application;

import application.domain.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import application.repository.UserRepository;

import java.util.List;

@SpringBootApplication
@RestController
public class Application {

    private static final Logger log = LoggerFactory.getLogger(Application.class);

    @Autowired
    private UserRepository userRepository;

    public static void main(String[] args) {
        SpringApplication.run(Application.class);
    }


    @RequestMapping("/userAll")
    public String userAll(){

        String res = "";

        for (User customer : userRepository.findAll()) {
            log.info(customer.toString());
            res = res + " " + customer.toString();
        }

        return res;
    }

    @RequestMapping("/userFindByLastName")
    public String userFindByLastName(){

        String res = "";
        List<User> users = userRepository.findByLastName("Bauer");

        for (User user : users) {
            log.info(users.toString());
            res = res + " " + users.toString();
        }

        return res;
    }

}
