package domain;

import org.joda.time.DateTime;

import java.time.LocalTime;

public class User {

    private String name;
    private String lastName;
    private String email;
    private String password;
    private DateTime birthdate;

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

}
