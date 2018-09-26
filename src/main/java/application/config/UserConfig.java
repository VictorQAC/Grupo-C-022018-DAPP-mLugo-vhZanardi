package application.config;

import application.domain.Auction;
import application.domain.User;
import application.repository.AuctionRepository;
import org.joda.time.DateTime;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import application.repository.UserRepository;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Configuration;

import java.time.LocalTime;
import java.util.Date;

@Configuration
@EnableAutoConfiguration
public class UserConfig {

    @Bean
    public CommandLineRunner demo(UserRepository repository) {
        return (args) -> {
            // save a couple of customers
            /*repository.save(new User("Jack", "Bauer"));
            repository.save(new User("Chloe", "O'Brian"));
            repository.save(new User("Kim", "Bauer"));
            repository.save(new User("David", "Palmer"));
            repository.save(new User("Michelle", "Dessler"));*/

            repository.save(new User("Miguel","Caneo","chinocaneo@qac.com",
                    "vamosCervecero78",new Date(1983,8,17)));
            repository.save(new User("Martin","Cauterruccio","caute07@qac.com",
                    "vamosCervecero79",new Date(1984,9,01)));
            repository.save(new User("Rodrigo","Brania","chapu18@qac.com",
                    "vamosCervecero80",new Date(1985,10,22)));
        };
    }

    @Bean
    public CommandLineRunner demo1(AuctionRepository repository) {
        return (args) -> {
            // save a couple of customers

            User user = new User("Miguel","Caneo","chinocaneo@qac.com",
                    "vamosCervecero78",new Date(1983,8,17));

            repository.save(new Auction("Auction 1","Subasta de prueba",
                    "Calle Falsa 123",10,new Date(2018,8,25),
                    new Date(2018,8,27),LocalTime.parse("22:00:00"),user));
        };
    }
}
