package com.ecoffe.ecoffe.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth.anyRequest().permitAll())
            /* .authorizeHttpRequests(auth -> auth
            .requestMatchers("/", "/index", "/cadastro", "/logout", "/logout.html", "/login", "/css/**", "/js/**", "/img/**").permitAll()
            .anyRequest().authenticated()
            )*/
            .formLogin(login -> login
                .loginPage("/login")
                .defaultSuccessUrl("/", false) // Redireciona para a página anterior ao login, se houver
                .permitAll()
            )
            .logout(logout -> logout
                .logoutUrl("/logout")
                .logoutSuccessUrl("/")
                .permitAll()
            );

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}