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

            User user = new User("Facundo","Diz","chinocaneo@qac.com",
                    "vamosCervecero78",new DateTime("1983-08-17"));
            Auction auction = new Auction("Bocha","Subasta de prueba",
                    "Calle Falsa 123",10,new DateTime("2018-08-25"),
                    new DateTime("2018-08-27"),LocalTime.parse("22:00:00"),user);

            auction.addPictures("https://http2.mlstatic.com/pelota-adidas-mundial-rusia-2018-glider-cosida-n5-adidas-D_NQ_NP_710631-MLA26534253069_122017-F.jpg");
            repository.save(auction);

            User user2 = new User("Homero","Simpsons","chinocaneo@qac.com",
                    "vamosCervecero78",new DateTime("1983-08-17"));
            Auction auction2 = new Auction("Guante de Arquero","Subasta de prueba",
                    "Calle Falsa 123",10,new DateTime("2018-08-25"),
                    new DateTime("2018-08-27"),LocalTime.parse("22:00:00"),user2);

            auction2.addPictures("https://http2.mlstatic.com/guante-arquero-adidas-ace-transition-pro-mn-tienda-arquero-D_NQ_NP_694859-MLA25942266858_092017-F.jpg");
            repository.save(auction2);

            User user3 = new User("Bart","Simpsons","chinocaneo@qac.com",
                    "vamosCervecero78",new DateTime("1983-08-17"));
            Auction auction3 = new Auction("Camiseta de Quilmes","Subasta de prueba",
                    "Calle Falsa 123",10,new DateTime("2018-08-25"),
                    new DateTime("2018-08-27"),LocalTime.parse("22:00:00"),user3);

            auction3.addPictures("https://http2.mlstatic.com/camiseta-quilmes-hummel-titular-2018-original-D_NQ_NP_632125-MLA26282962594_112017-F.jpg");
            repository.save(auction3);

            User user4 = new User("Jose","Lopez","josel@qac.com",
                    "jlp123",new DateTime("1983-08-17"));
            Auction auction4 = new Auction("Bolso","Subasta de prueba",
                    "Calle 4",10,new DateTime("2018-08-25"),
                    new DateTime("2018-08-27"),LocalTime.parse("22:00:00"),user4);

            auction4.addPictures("https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/dpfvrklvlgde4x9vdedh/bolso-de-lona-de-entrenamiento-brasilia-89TqJzBV.jpg");
            repository.save(auction4);
/*
            User user2 = new User("Homero","Simpsons","chinocaneo@qac.com",
                    "vamosCervecero78",new DateTime("1983-08-17"));
            Auction auction2 = new Auction("Guante de Arquero","Subasta de prueba",
                    "Calle Falsa 123",10,new DateTime("2018-08-25"),
                    new DateTime("2018-08-27"),LocalTime.parse("22:00:00"),user2);

            auction2.addPictures("https://http2.mlstatic.com/guante-arquero-adidas-ace-transition-pro-mn-tienda-arquero-D_NQ_NP_694859-MLA25942266858_092017-F.jpg");
            repository.save(auction2);

            User user3 = new User("Bart","Simpsons","chinocaneo@qac.com",
                    "vamosCervecero78",new DateTime("1983-08-17"));
            Auction auction3 = new Auction("Camiseta de Quilmes","Subasta de prueba",
                    "Calle Falsa 123",10,new DateTime("2018-08-25"),
                    new DateTime("2018-08-27"),LocalTime.parse("22:00:00"),user3);

            auction3.addPictures("https://http2.mlstatic.com/camiseta-quilmes-hummel-titular-2018-original-D_NQ_NP_632125-MLA26282962594_112017-F.jpg");
            repository.save(auction3);
     */
        };
    }
}
