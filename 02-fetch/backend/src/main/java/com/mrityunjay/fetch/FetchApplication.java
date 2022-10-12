package com.mrityunjay.fetch;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsWebFilter;

@SpringBootApplication
public class FetchApplication {

  public static void main(String[] args) {
    SpringApplication.run(FetchApplication.class, args);
  }

  // Enable to allow cors
  // @Bean
  // CorsWebFilter corsFilter() {
  //   return new CorsWebFilter(exchange -> new CorsConfiguration().applyPermitDefaultValues());
  // }
}
