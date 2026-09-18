$(document).ready(function() {
    const endpoint = 'https://api.github.com/users/DouglasLopesDRL';

    // Consumindo API do GitHub
    fetch(endpoint)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            $('#name').text(json.name);
            $('#username').text(`@${json.login}`);
            $('#avatar').attr('src', json.avatar_url);

            // Seleciona os itens da lista mantendo o título <h4>
            $('#repositories').html(`<h4>Repositórios</h4> ${json.public_repos}`);
            $('#followers').html(`<h4>Seguidores</h4> ${json.followers}`);
            $('#following').html(`<h4>Seguindo</h4> ${json.following}`);

            // Atualiza o link do perfil
            $('#github').attr('href', json.html_url);
        })
        .catch(function(error) {
            console.error('Erro ao buscar dados do GitHub:', error);
        });
});