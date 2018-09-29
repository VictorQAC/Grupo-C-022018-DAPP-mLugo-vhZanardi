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

    public AuctionHistory(){};

    public AuctionHistory(long id, DateTime date,Integer section){
        this.userId = id;
        this.date = date;
        this.sectionNumber = section;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public DateTime getDate() {
        return date;
    }

    public void setDate(DateTime date) {
        this.date = date;
    }

    public void setSectionNumber(Integer sectionNumber) {
        this.sectionNumber = sectionNumber;
    }

    public Integer getSectionNumber() {
        return sectionNumber;
    }

}
