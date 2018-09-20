package application.domain;

import org.joda.time.DateTime;

import javax.persistence.*;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

    private String name;
    private String lastName;
    private String email;
    private String password;
    private DateTime birthdate;

    public User(){

    }

    public User (String name,String lastName){

        this.name = name;
        this.lastName = lastName;
    }

    public User (String name,String lastName, String email, String password, DateTime birthdate){

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

    public int getId() {
        return this.hashCode();
    }

    @Override
    public String toString() {
        return String.format(
                "User[id=%d, name='%s', lastName='%s']",
                id, name, lastName);
    }

}
