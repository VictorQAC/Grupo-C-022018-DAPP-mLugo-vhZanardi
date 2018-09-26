package application.domain;

import org.joda.time.DateTime;

import javax.persistence.*;
import java.util.Date;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

    private String name;
    private String lastName;
    private String email;
    private String password;
    private Date birthdate;

    public User(){

    }

    public User (String name,String lastName){

        this.name = name;
        this.lastName = lastName;
    }

    public User (String name,String lastName, String email, String password, Date birthdate){

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

    public Date getBirthdate() {
        return birthdate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return String.format(
                "User[id=%d, name='%s', lastName='%s']",
                id, name, lastName);
    }

}
