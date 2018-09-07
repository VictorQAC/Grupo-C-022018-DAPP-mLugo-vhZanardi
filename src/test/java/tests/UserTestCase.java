package tests;

import domain.User;
import domain.UserBuilder;
import org.junit.Before;
import org.junit.Test;

import java.lang.reflect.Method;

import static domain.UserBuilder.aUser;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

public class UserTestCase {

    private User user;
    private User userMock;
    /**
     *
     */
    @Before
    public void setUp() throws Exception{
     userMock  = mock(User.class);
     user = aUser().build();
    }

    @Test
    public void testNewUserCreated_WithoutParameters(){

        assertEquals("emptyName",user.getName());

    }

    @Test
    public void testNewUserCreated_WithName(){
        user = aUser().withName("Jose").build();
        assertEquals("Jose",user.getName());

    }
}
