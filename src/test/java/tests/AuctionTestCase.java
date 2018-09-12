package tests;

import domain.*;
import org.joda.time.DateTime;
import java.time.LocalTime;
import org.junit.Before;
import org.junit.Test;

import static domain.AuctionBuilder.aAuction;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
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
        auction.setState(new InProgressAuction());
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

    @Test
    public void testBidAuctionThatHasFiveMinutesToClose(){

        LocalTime extendsFiveMinutes = LocalTime.now().plusMinutes(4);
        auction.setHoursFinal(extendsFiveMinutes);
        LocalTime extendFiveMinutes = auction.getHoursFinal().plusMinutes(5);
        assertEquals(10,auction.getPriceInit(),0);
        auction.makeABid(owner2,20);
        assertEquals(10.5,auction.getPriceInit(),0);
        assertEquals(extendFiveMinutes,auction.getHoursFinal());
    }

    @Test
    public void testBidAtAuctionWithTheEndDate(){

        assertEquals(10,auction.getPriceInit(),0);
        auction.setState(new CloseAuction());
        auction.makeABid(owner2,20);
        assertEquals(10,auction.getPriceInit(),0);

    }

    @Test
    public void testInProgressAuction(){
        DateTime dateCurrent = DateTime.now();
        auction.setDateInit(dateCurrent);
        auction.inProgress();
        assertTrue(auction.getState().isInProgress());
    }

    @Test
    public void testCloseAuction(){
        auction.close();
        assertTrue(!auction.getState().isClose());
    }

}
