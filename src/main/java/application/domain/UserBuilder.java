package application.domain;

import org.joda.time.DateTime;

public class UserBuilder {
    public static UserBuilder aUser(){
        return new UserBuilder();
    }

    private String name = "emptyName";
    private String lastName = "emptyLastName";
    private String email = "emptyEmail";
    private String password = "emptyPassword";
    private DateTime birthdate = new DateTime("1900-01-01");

    public User build(){
       User user = new User(name,lastName,email,password,birthdate);
       return user;
    }

    public UserBuilder withName(final String aName){
        name = aName;
        return this;
    }

    public UserBuilder withLastName(final String aLastName){
        lastName = aLastName;
        return this;
    }

    public UserBuilder withEmail(final String aEmail){
        email = aEmail;
        return this;
    }

    public UserBuilder withPassword(final String aPassword){
        password = aPassword;
        return this;
    }

    public UserBuilder withBirthdate(final DateTime aBirthdate){
        birthdate = aBirthdate;
        return this;
    }
}
