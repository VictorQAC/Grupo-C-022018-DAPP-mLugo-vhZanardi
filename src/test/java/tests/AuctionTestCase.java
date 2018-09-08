package tests;

import domain.Auction;
import domain.User;
import org.joda.time.DateTime;
import org.junit.Before;
import org.junit.Test;

import static domain.AuctionBuilder.aAuction;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.mock;

public class AuctionTestCase {

    private Auction auction;
    private Auction auctionMock;
    private User owner2;

    @Before
    public void setUp() throws Exception{
        auction = aAuction().build();
        owner2 = new User("Miguel","Caneo","chinocaneo@qac.com",
                "vamosCervecero78",new DateTime("1983-09-17"));
    }


    @Test
    public void testUserBidInAuctionInWhickHeNotIsOwner(){

        assertEquals(10,auction.getPriceInit(),0);
        auction.makeABid(owner2,20);
        assertEquals(10.5,auction.getPriceInit(),0);
    }

    @Test
    public void testUserBidInAuctionInWhickHeIsOwner(){
        assertEquals(10,auction.getPriceInit(),0);
        auction.makeABid(owner2,20);
        assertEquals(10.5,auction.getPriceInit(),0);
        auction.makeABid(owner2,20);
        assertEquals(10.5,auction.getPriceInit(),0);
    }

}
