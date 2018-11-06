package application.controller;

import application.dto.AuctionDTO;
import application.domain.Auction;
import application.repository.AuctionRepository;
import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Optional;
import java.util.stream.Collectors;
import java.time.LocalTime;

@Transactional
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
        a.addPictures(auction.getPicture());
        a.setDateInit(new DateTime(auction.getDateInit()));
        a.setDateFinal(new DateTime(auction.getDateFinal()));
        a.setHoursFinal(LocalTime.parse(auction.getHoursFinal()));
        repository.save(a);

    }

    @RequestMapping(method=RequestMethod.DELETE, path="/auctionDelete/{id}")
    public void delete(@PathVariable String id) {
        repository.deleteById(Long.parseLong(id));
    }

    @GetMapping("/auctionBy/{id}")
    public Optional<Auction> auctionList(@PathVariable String id) {
        return repository.findById(Long.parseLong(id));
    }

    @PostMapping(path ="/auctionUpdate/{id}")
    public void auctionUpdate(@PathVariable String id, @RequestBody AuctionDTO auction) {

        Optional<Auction> a = repository.findById(Long.parseLong(id));
        a.get().setTitle(auction.getTitle());
        a.get().setDescription(auction.getDescription());
        a.get().setPriceInit(auction.getPriceInit());
        a.get().setPictures(new ArrayList<String>());
        a.get().addPictures(auction.getPicture());
        a.get().setDateInit(new DateTime(auction.getDateInit()));
        a.get().setDateFinal(new DateTime(auction.getDateFinal()));
        a.get().setHoursFinal(LocalTime.parse(auction.getHoursFinal()));
        repository.save(a.get());
    }


}
