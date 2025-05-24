package com.ecoffe.ecoffe;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.ecoffe.ecoffe")
public class EcoffeApplication {
    public static void main(String[] args) {
        SpringApplication.run(EcoffeApplication.class, args);
    }
}