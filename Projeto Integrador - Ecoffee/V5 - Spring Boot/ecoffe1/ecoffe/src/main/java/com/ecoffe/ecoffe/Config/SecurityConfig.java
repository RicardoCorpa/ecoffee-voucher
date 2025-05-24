package com.ecoffe.ecoffe.Config; // Confirme se este é o seu pacote correto

import com.ecoffe.ecoffe.Repository.UsuarioRepository; // Confirme se este é o seu repositório correto
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity 
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests((authorize) -> authorize
                .requestMatchers("/css/**", "/js/**", "/img/**", "/webjars/**").permitAll() 
                .requestMatchers("/", "/index", "/login", "/cadastro").permitAll() 
                .requestMatchers("/logout").authenticated() 
                .anyRequest().authenticated() 
            )
            .formLogin((formLogin) -> formLogin
                .loginPage("/login") 
                .loginProcessingUrl("/login") 
                .usernameParameter("email") 
                .passwordParameter("senha") 
                .defaultSuccessUrl("/logout", true) 
                .failureUrl("/login?error=true") 
                .permitAll() 
            )
            .logout((logout) -> logout
                .logoutUrl("/logout") 
                .logoutSuccessUrl("/login?logout=true") 
                .invalidateHttpSession(true) 
                .deleteCookies("JSESSIONID") 
                .permitAll() 
            )
            .rememberMe((rememberMe) -> rememberMe 
                .key("suaChaveSecretaParaRememberMe") 
                .tokenValiditySeconds(86400) // Validade do token "lembrar-me" em segundos (ex: 1 dia)
            );

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public UserDetailsService userDetailsService(UsuarioRepository usuarioRepository) {
        return email -> usuarioRepository.findByEmail(email) // 'email' é o que o usuário digita no campo de login
                .map(usuario -> User.builder()
                        .username(usuario.getEmail()) 
                        .password(usuario.getSenha()) 
                        .roles("USER") // Mantenha simples por agora se não tiver um sistema de papéis complexo
                        .build())
                .orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado com o e-mail: " + email));
    }
}