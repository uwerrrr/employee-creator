package employeecreator.employeecreatorbackend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer{
	// browser security, by default, blocks requests from different origin address
	// -> config that allows requests from our frontend origin address
	
	// configuring CORS (Cross-Origin Resource Sharing) settings for a web application
	
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		// List of URL of the domain from which we want to allow requests to access our server
		String[] allowedOrigins = {"http://localhost:5173/"}; 
			
		registry.addMapping("/**") // /** : any endpoint on the server is affected by these settings.
			.allowedOrigins(allowedOrigins)
			.allowedMethods("GET", "POST", "DELETE", "PATCH")
			.allowedHeaders("*");
	}
}
