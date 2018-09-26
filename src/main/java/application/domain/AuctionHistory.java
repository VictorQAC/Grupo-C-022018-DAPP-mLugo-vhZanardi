package application.domain;

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

    private Date date;

    private Integer sectionNumber;

    public AuctionHistory(long id, Date date,Integer section){
        this.userId = id;
        this.date = date;
        this.sectionNumber = section;
    }

    public Integer getSectionNumber() {
        return sectionNumber;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
