package application.controller;

import application.dto.AuctionDTO;
import application.domain.Auction;
import application.repository.AuctionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Collection;
import java.util.stream.Collectors;

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

    @GetMapping("/auctionList")
    public Collection<Auction> auctionList() {
        return (Collection<Auction>) repository.findAll().stream()
                .collect(Collectors.toList());
    }

    @PostMapping(path ="/auctionCreate")
    public void auctionCreate(@RequestBody AuctionDTO auction) {

        Auction a = new Auction();
        a.setTitle(auction.getTitle());
        a.setDescription(auction.getDescription());
        a.setPriceInit(auction.getPriceInit());
        repository.save(a);

    }


    @RequestMapping(method=RequestMethod.DELETE, path="/auctionDelete/{id}")
    public void delete(@PathVariable String id) {
        repository.deleteById(Long.parseLong(id));
    }
}
