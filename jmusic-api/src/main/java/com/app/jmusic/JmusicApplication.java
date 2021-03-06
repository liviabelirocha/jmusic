package com.app.jmusic;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class JmusicApplication {

	public static void main(String[] args) {
		SpringApplication.run(JmusicApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {

		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry
								.addMapping("/**")
								.allowedOrigins("*")
								.maxAge(3600)
								.allowedMethods("POST", "GET", "OPTIONS", "DELETE", "PATCH")
								.allowCredentials(true)
								.allowedHeaders("*");

			}
		};
	}
}
