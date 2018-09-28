package application.domain;

import org.joda.time.DateTime;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class AuctionHistory {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;

    private long userId;

    private DateTime date;

    private Integer sectionNumber;

    public AuctionHistory(long id, DateTime date,Integer section){
        this.userId = id;
        this.date = date;
        this.sectionNumber = section;
    }

    public Integer getSectionNumber() {
        return sectionNumber;
    }

}
