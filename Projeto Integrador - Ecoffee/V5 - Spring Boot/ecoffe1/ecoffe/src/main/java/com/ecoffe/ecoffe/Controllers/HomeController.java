package com.ecoffe.ecoffe.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String index() {
        return "index"; // Página inicial (index.html)
    }

    @GetMapping("/login")
    public String login() {
        return "login"; // Página de login (login.html)
    }   
    
    @GetMapping("/logout")
    public String logout() {
        return "logout";
    }
    
}

