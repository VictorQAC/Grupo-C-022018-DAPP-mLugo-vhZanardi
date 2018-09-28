package application.domain;

import org.joda.time.DateTime;

import java.time.LocalTime;
import java.util.Date;

public class AuctionBuilder {

    public static AuctionBuilder aAuction(){
        return new AuctionBuilder();
    }

    private String title = "Builder Auction";
    private String description = "Esto es un builder de una subasta";
    private String address = "Calle Falsa 123";
    private double priceInit = 10;
    private DateTime dateInit = new DateTime("2018-7-9");
    private DateTime dateFinal = new DateTime("2018-7-10");
    private LocalTime hoursFinal = LocalTime.parse("22:00:00");
    private User owner = new User("emptyName","emptyLastName","emptyEmail",
            "emptyPassword",new DateTime("1983-8-17"));
    public Auction build(){

        Auction auction = new Auction(title,description,address,priceInit,dateInit,dateFinal,hoursFinal,owner);
        return auction;

    }

}
