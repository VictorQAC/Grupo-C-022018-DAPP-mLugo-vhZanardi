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
import java.util.Optional;

@Configuration
@EnableAutoConfiguration
public class UserConfig {

    @Bean
    public CommandLineRunner demo(UserRepository repository) {
        return (args) -> {

            repository.save(new User("Miguel","Caneo","chinocaneo@qac.com",
                    "vamosCervecero78",new DateTime("1983-8-17")));
            repository.save(new User("Martin","Cauterruccio","caute07@qac.com",
                    "vamosCervecero79",new DateTime("1984-9-01")));
            repository.save(new User("Rodrigo","Brania","chapu18@qac.com",
                    "vamosCervecero80",new DateTime("1985-10-22")));
        };
    }

    @Bean
    public CommandLineRunner demo1(AuctionRepository repository) {
        return (args) -> {

            User user = new User("Miguel","Caneo","chinocaneo@qac.com",
                    "vamosCervecero78",new DateTime("1983-08-17"));

            repository.save(new Auction("Auction 1","Subasta de prueba",
                    "Calle Falsa 123",10,new DateTime("2018-08-25"),
                    new DateTime("2018-08-27"),LocalTime.parse("22:00:00"),user));
        };
    }
}
