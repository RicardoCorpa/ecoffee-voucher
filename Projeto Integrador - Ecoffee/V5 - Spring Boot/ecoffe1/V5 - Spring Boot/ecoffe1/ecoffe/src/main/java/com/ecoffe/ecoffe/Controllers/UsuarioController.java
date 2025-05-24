package com.ecoffe.ecoffe.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import com.ecoffe.ecoffe.Model.Usuario;
import com.ecoffe.ecoffe.Service.UsuarioService;

@Controller
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping("/cadastro")
    public String exibirFormularioCadastro(Model model) {
        model.addAttribute("usuario", new Usuario());
        return "cadastro";
    }

    @PostMapping("/cadastro")
    public String cadastrarUsuario(@ModelAttribute("usuario") Usuario usuario,
                                   @RequestParam("confirmar_senha") String confirmarSenha,
                                   Model model) {
    
        // DEBUG: Imprime os dados do usuário recebido
        System.out.println("Usuário recebido: " + usuario);
        System.out.println("Confirmação de senha recebida: " + confirmarSenha);
    
        if (!usuario.getSenha().equals(confirmarSenha)) {
            model.addAttribute("mensagem", "As senhas não coincidem!");
            return "cadastro";
        }
    
        usuarioService.salvar(usuario);
        model.addAttribute("mensagem", "Usuário cadastrado com sucesso!");
    
        return "login"; // redireciona para a página de login após o cadastro
    }
}
