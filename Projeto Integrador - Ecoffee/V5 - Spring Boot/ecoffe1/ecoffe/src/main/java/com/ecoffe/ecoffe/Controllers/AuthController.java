package com.ecoffe.ecoffe.Controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.ecoffe.ecoffe.Model.Usuario;
import com.ecoffe.ecoffe.Repository.UsuarioRepository;

@Controller
public class AuthController {
    
    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @PostMapping("/login")
    public String autenticarUsuario(@RequestParam String email,
                                    @RequestParam String senha,
                                    Model model) {
        
        Optional<Usuario> optionalUsuario = usuarioRepository.findByEmail(email);
        
        
        if (optionalUsuario.isPresent()) {
            Usuario usuario = optionalUsuario.get();
            
            if (passwordEncoder.matches(senha, usuario.getSenha())) {
                model.addAttribute("usuario", usuario);
                return "redirect:/logout"; 
            }
        }
        

        model.addAttribute("erro", "E-mail ou senha inválidos");
        return "login"; 
    }
}
