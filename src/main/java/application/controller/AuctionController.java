package application.controller;

import application.domain.Auction;
import application.repository.AuctionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuctionController {

    @Autowired
    private AuctionRepository repository;

    @GetMapping("/auctionAll")
    Iterable<Auction> all(){
        return repository.findAll();
    }

    @RequestMapping("/auctionAllString")
    public String auctionAll(){

        String res = "";

        for (Auction auction : repository.findAll()) {
            res = res + " " + auction.toString();
        }

        return res;
    }


}
