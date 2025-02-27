function initMap() {
    // Mapa inicializado apenas na cidade de São Paulo (Onde vamos testar o projeto, com sucesso, terá que ser feito para outros estados)
    const sp = { lat: -23.55052, lng: -46.633308 };

    // Criando o mapa
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: sp,
    });

    // Lista de pontos de coleta OXXO - Colocar os de interlagos, perto do Senac (Miguel Yunes)
    const oxxoLocations = [
        { lat: -23.550520, lng: -46.633308, title: "OXXO - Praça da Sé" },
        { lat: -23.548048, lng: -46.639890, title: "OXXO - Av. Paulista" },
        { lat: -23.543592, lng: -46.644043, title: "OXXO - Vila Mariana" },
        { lat: -23.562083, lng: -46.654774, title: "OXXO - Pinheiros" }
    ];

    // Criando marcadores (Pontos vermelhos) no mapa para os pontos de coleta
    oxxoLocations.forEach(location => {
        new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.title
        });
    });
}



/* KAYK E JAPA o mapa não carrega, precisa ser feito isso na API: -->

<!-- Carregar a API do Google Maps, fazerrequisições à API;
Usar função initMap como parâmetro de callback na URL da API;
Substituir YOUR_GOOGLE_MAPS_API_KEY pela chave de API;
A URL do script da API do Google Maps inclui callback=initMap, assim a função initMap() é executada quando o script for carregado;
O mapa fica dentro da div com id map;
Os Marcadores (Pontinhos vermelhos) ficam destacados nos pontos de coleta das lojas OXXO com a lista definida na variável oxxoLocations.

--> */