package application.domain;

import org.joda.time.DateTime;

public class AuctionHistory {

    private Integer userId;

    private DateTime date;

    private Integer sectionNumber;

    public AuctionHistory(Integer id, DateTime date,Integer section){
        this.userId = id;
        this.date = date;
        this.sectionNumber = section;
    }

    public Integer getSectionNumber() {
        return sectionNumber;
    }
}
