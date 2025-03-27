document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value.trim();
    let confirmarSenha = document.getElementById("confirmarSenha").value.trim();

    if (nome === "" || email === "" || senha === "" || confirmarSenha === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem.");
        return;
    }

    alert("Cadastro atualizado com sucesso!");
});
