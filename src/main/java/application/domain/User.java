package application.domain;

import org.hibernate.annotations.Type;
import org.joda.time.DateTime;

import javax.persistence.*;
import java.util.Date;
import java.util.Random;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

    private String name;
    private String lastName;
    private String email;
    private String password;
    @Type(type="org.jadira.usertype.dateandtime.joda.PersistentDateTime")
    private DateTime birthdate;

    public User (String name,String lastName, String email, String password, DateTime birthdate){
        this.id = new Random().nextLong();
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.birthdate = birthdate;
    }

    public String getName() {
        return name;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public DateTime getBirthdate() {
        return birthdate;
    }

    public Long getId() {
        return id;
    }

    @Override
    public String toString() {
        return String.format(
                "User[id=%d, name='%s', lastName='%s']",
                id, name, lastName);
    }

}
