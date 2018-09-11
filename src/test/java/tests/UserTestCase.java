package tests;

import domain.Auction;
import domain.AuctionBuilder;
import domain.User;
import org.joda.time.DateTime;
import java.time.LocalTime;
import org.junit.Before;
import org.junit.Test;

import static domain.AuctionBuilder.aAuction;
import static domain.UserBuilder.aUser;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

public class UserTestCase {

    private User user;
    private User userMock;
    private Auction auction;
    private AuctionBuilder auctionBuilder;

    /**
     *
     */
    @Before
    public void setUp() throws Exception {
        userMock = mock(User.class);
        user = aUser().build();
        auctionBuilder = aAuction();

    }

    @Test
    public void testNewUserCreated_WithoutParameters() {

        assertEquals("emptyName", user.getName());

    }

    @Test
    public void testNewUserCreated_WithName() {
        user = aUser().withName("Jose").build();
        assertEquals("Jose", user.getName());

    }

    @Test
    public void testCreateAuction() {
        auction = user.createAuction("Guitarra Electrica", "Guitarra Electrica Marca: Gibson", "Lavalle 123", 3000,
                new DateTime("2018-09-09"), new DateTime("2018-09-30"), LocalTime.parse("19:00"), user);


        assertEquals("Guitarra Electrica", auction.getTitle());

    }
}