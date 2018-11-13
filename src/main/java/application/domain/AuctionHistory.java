package application.domain;

import org.hibernate.annotations.Type;
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

    private String userName;

    private long userId;

    @Type(type="org.jadira.usertype.dateandtime.joda.PersistentDateTime")
    private DateTime date;

    private String dateString;

    private Integer sectionNumber;

    public AuctionHistory(){};

    public AuctionHistory(long id,String userName, DateTime date,Integer section){
        this.userId = id;
        this.userName = userName;
        this.date = date;
        this.sectionNumber = section;
        this.dateString = this.date.toString();
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
        this.dateString = this.date.toString();
    }

    public void setSectionNumber(Integer sectionNumber) {
        this.sectionNumber = sectionNumber;
    }

    public Integer getSectionNumber() {
        return sectionNumber;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getDateString() {
        return dateString;
    }

    public void setDateString(String dateString) {
        this.dateString = dateString;
    }
}
