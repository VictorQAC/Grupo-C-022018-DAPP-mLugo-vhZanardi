package tests;

import application.domain.User;
import org.joda.time.DateTime;
import org.junit.Before;
import org.junit.Test;

import java.util.Date;

import static application.domain.UserBuilder.aUser;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

public class UserTestCase {

    private User user;
    private User userMock;

    /**
     *
     */
    @Before
    public void setUp() throws Exception {
        userMock = mock(User.class);
        user = aUser().build();

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
    public void testNewUserCreated_WithLastName() {
        user = aUser().withName("Jose").withLastName("Lopez").build();
        assertEquals("Lopez", user.getLastName());

    }

    @Test
    public void testNewUserCreated_WithEmail() {
        user = aUser().withName("Jose").withLastName("Lopez").withEmail("jose.lopez@gmail.com").build();
        assertEquals("jose.lopez@gmail.com", user.getEmail());

    }

    @Test
    public void testNewUserCreated_WithPassword() {
        user = aUser().withName("Jose").withLastName("Lopez").withEmail("jose.lopez@gmail.com").withPassword("1234").build();
        assertEquals("1234", user.getPassword());

    }

    @Test
    public void testNewUserCreated_WithBirthdate() {
        user = aUser().withName("Jose").withLastName("Lopez").withEmail("jose.lopez@gmail.com").withPassword("1234").
                withBirthdate(new DateTime("1983-08-17")).build();
        assertEquals(new DateTime("1983-08-17"), user.getBirthdate());

    }

}