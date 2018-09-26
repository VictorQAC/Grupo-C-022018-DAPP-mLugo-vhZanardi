package application;

import application.domain.Auction;
import application.domain.User;
import application.repository.AuctionRepository;
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

    @Autowired
    private AuctionRepository auctionRepository;

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
        List<User> users = userRepository.findByLastName("Caneo");

        for (User user : users) {
            log.info(users.toString());
            res = res + " " + users.toString();
        }

        return res;
    }

    @RequestMapping("/userBirthdate")
    public String userBirthdate(){

        String res = "";

        for (User customer : userRepository.findAll()) {
            //log.info(customer.toString());
            res = res + " " + customer.getBirthdate().getDate();
        }

        return res;
    }

    @RequestMapping("/auctionAll")
    public String auctionAll(){

        String res = "";

        for (Auction auction : auctionRepository.findAll()) {
            log.info(auction.toString());
            res = res + " " + auction.getOwner().toString();
        }

        return res;
    }

}
