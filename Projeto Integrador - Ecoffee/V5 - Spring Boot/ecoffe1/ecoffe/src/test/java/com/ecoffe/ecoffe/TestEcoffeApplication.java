package com.ecoffe.ecoffe;

import org.springframework.boot.SpringApplication;

public class TestEcoffeApplication {

	public static void main(String[] args) {
		SpringApplication.from(EcoffeApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
