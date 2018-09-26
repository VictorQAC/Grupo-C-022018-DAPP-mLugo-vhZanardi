package tests;

import application.domain.*;
import org.joda.time.DateTime;
import java.time.LocalTime;
import java.util.Date;

import org.junit.Before;
import org.junit.Test;

import static application.domain.AuctionBuilder.aAuction;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.*;

public class AuctionTestCase {

    private Auction auction;
    private Auction auctionMock;
    private User owner2;
    private User ownerMock;

    @Before
    public void setUp() throws Exception{
        auction = aAuction().build();
        owner2 = new User("Miguel","Caneo","chinocaneo@qac.com",
                "vamosCervecero78",new Date(1983,8,17));
        //auction.setState(new InProgressAuction());
        ownerMock = mock(User.class);
    }


    /*@Test
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

    @Test
    public void testNewAuction(){
        assertTrue(!auction.getState().isNew());
    }


    @Test
    public void testSetAndGetTitleAuction(){
        auction.setTitle("Test");
        assertEquals("Test",auction.getTitle());
    }

    @Test
    public void testSetAndGetAddress(){
        auction.setAddress("Calle Test");
        assertEquals("Calle Test",auction.getAddress());
    }

    @Test
    public void testSetAndGetDescription(){
        auction.setDescription("Descripcion Test");
        assertEquals("Descripcion Test",auction.getDescription());
    }

    @Test
    public void testSetAndGetOwner(){
        auction.setOwner(owner2);
        assertEquals(owner2,auction.getOwner());
    }

    @Test
    public void testAddPictures(){
        assertEquals(0,auction.getPictures().size());
        auction.addPictures("http://ritmoparana.com/wp-content/uploads/2018/04/Manu-Ginobili-contra-Golden-State-4.jpg");
        assertEquals(1,auction.getPictures().size(),0);
    }

    @Test
    public void testFirstHistoryAuction(){
        auction.makeABid(owner2,25);
        assertEquals(1,auction.getAuctionHistory().size());
    }

    @Test
    public void testGetSectionNumber(){
        auction.makeABid(owner2,25);
        auction.makeABid(ownerMock,20);
        assertEquals(2,auction.lastSectionNumber());
    }*/


}
