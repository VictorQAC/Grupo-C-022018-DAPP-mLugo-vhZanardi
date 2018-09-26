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
    private Date dateInit = new Date(2018,7,9);
    private Date dateFinal = new Date(2018,7,10);
    private LocalTime hoursFinal = LocalTime.parse("22:00:00");
    private User owner = new User("emptyName","emptyLastName","emptyEmail",
            "emptyPassword",new Date(1983,8,17));
    public Auction build(){

        Auction auction = new Auction(title,description,address,priceInit,dateInit,dateFinal,hoursFinal);
        return auction;

    }

}
