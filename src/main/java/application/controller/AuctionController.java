package application.controller;

import application.Aspect.LogExecutionTime;
import application.Aspect.LogExecutionTimeAnnotation;
import application.domain.AuctionHistory;
import application.domain.InProgressAuction;
import application.domain.User;
import application.dto.AuctionDTO;
import application.domain.Auction;
import application.repository.AuctionRepository;
import org.joda.time.DateTime;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Transactional
@RestController
public class AuctionController {

    static Logger logger = LoggerFactory.getLogger(LogExecutionTimeAnnotation.class);

    @Autowired
    private AuctionRepository repository;

    @LogExecutionTime
    @GetMapping("/auctionList")
    public Collection<Auction> auctionList() {
        return (Collection<Auction>) repository.findAll().stream()
                .collect(Collectors.toList());
    }

    @LogExecutionTime
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

    @LogExecutionTime
    @RequestMapping(method=RequestMethod.DELETE, path="/auctionDelete/{id}")
    public void deleteAuction(@PathVariable String id) {
        repository.deleteById(Long.parseLong(id));
    }

    @LogExecutionTime
    @GetMapping("/auctionBy/{id}")
    public Optional<Auction> auctionBy(@PathVariable String id) {
        return repository.findById(Long.parseLong(id));
    }

    @LogExecutionTime
    @GetMapping("/auctionHistoryBy/{id}")
    public Collection<AuctionHistory> auctionHistoryBy(@PathVariable String id) {
        return repository.findById(Long.parseLong(id))
                .get()
                .getAuctionHistory()
                .stream()
                .collect(Collectors.toList());
    }

    @LogExecutionTime
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

    @LogExecutionTime
    @GetMapping(path ="/auctionMakeABid/{id}")
    public String auctionMakeABid(@PathVariable String id) {

        User user5 = new User("Elad","Haim","ehaim@qac.com",
                "jlp123",new DateTime("1980-10-10"));

        Optional<Auction> a = repository.findById(Long.parseLong(id));

        a.get().setState(new InProgressAuction());

        String result = a.get().makeABid(user5,1000);

        repository.save(a.get());

        return result;
    }

}
