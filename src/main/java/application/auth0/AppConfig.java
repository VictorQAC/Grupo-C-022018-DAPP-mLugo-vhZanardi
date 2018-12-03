package application.auth0;

import com.sun.deploy.net.HttpResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import com.auth0.spring.security.api.JwtWebSecurityConfigurer;

import java.util.Arrays;


@EnableWebSecurity(debug = true)
@ComponentScan(basePackages = "application.config")
@Configuration
public class AppConfig extends WebSecurityConfigurerAdapter {

    @Value(value = "${auth0.apiAudience}")
    private String apiAudience;
    @Value(value = "${auth0.issuer}")
    private String issuer;

     @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
        configuration.setAllowedMethods(Arrays.asList("GET","POST"));
        configuration.setAllowCredentials(true);
        configuration.addAllowedHeader("Authorization");
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors();
         JwtWebSecurityConfigurer
                .forRS256(apiAudience, issuer)
                .configure(http)
                .authorizeRequests()
                .antMatchers(HttpMethod.GET,"/api/auctionList").authenticated()
                .antMatchers(HttpMethod.POST,"/api/auctionCreate").authenticated()
                .antMatchers(HttpMethod.DELETE,"/api/auctionDelete/{id}").authenticated()
                .antMatchers(HttpMethod.GET,"/api/auctionBy/{id}").authenticated()
                .antMatchers(HttpMethod.POST,"/api/auctionUpdate/{id}").authenticated()
                .antMatchers(HttpMethod.GET,"/api/auctionMakeABid/{id}/{nickName}").authenticated();
     }
}