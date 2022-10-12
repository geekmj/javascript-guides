package com.mrityunjay.fetch;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

import static org.springframework.web.reactive.function.server.RequestPredicates.GET;
import static org.springframework.web.reactive.function.server.RequestPredicates.accept;

@Configuration(proxyBeanMethods = false)
public class HelloRouter {

  @Bean
  public RouterFunction<ServerResponse> route(HelloHandler helloHandler) {

    return RouterFunctions
        .route(GET("/hello").and(accept(MediaType.APPLICATION_JSON)), helloHandler::hello);
  }
}