package example.gateway;

import io.micronaut.http.HttpRequest;
import io.micronaut.http.client.RxHttpClient;
import io.micronaut.http.client.annotation.Client;
import io.micronaut.test.annotation.MicronautTest;
import org.junit.jupiter.api.Test;

import javax.inject.Inject;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@MicronautTest
public class GreetControlerTest {

    @Inject
    @Client("/")
    RxHttpClient client;

    @Test
    public void greetTest(){
        HttpRequest<String> request = HttpRequest.GET("/hello");
        String response = client.toBlocking().retrieve(request);

        assertNotNull(response);
        assertEquals("Hello there",response);
    }
}
