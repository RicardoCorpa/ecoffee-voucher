document.addEventListener("DOMContentLoaded", function () {
    
    
    // Dados do histórico de descartes (Precisa de mais exemplos linkados com o banco de dados)
    const dadosDescartes = [
        { data: "25/02/2025", local: "OXXO - Praça da Sé", quantidade: "5 cápsulas / 50g", pontos: "+70 pontos" },
        { data: "22/02/2025", local: "OXXO - Av. Paulista", quantidade: "8 cápsulas / 80g", pontos: "+110 pontos" },
        { data: "18/02/2025", local: "OXXO - Vila Mariana", quantidade: "4 cápsulas / 40g", pontos: "+50 pontos" },
        { data: "15/02/2025", local: "OXXO - Pinheiros", quantidade: "6 cápsulas / 60g", pontos: "+80 pontos" }
    ];

    // Corpo da tabela
    const tabela = document.getElementById("tabela-dados");

    // Adicionar os dados na tabela
    dadosDescartes.forEach(dado => {
        let linha = document.createElement("tr");
        linha.innerHTML = `
            <td>${dado.data}</td>
            <td>${dado.local}</td>
            <td>${dado.quantidade}</td>
            <td>${dado.pontos}</td>
        `;
        tabela.appendChild(linha);
    });
});
