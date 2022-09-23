function getCity() {
    var estado = document.getElementById('estado').value  //Salva o valor do input do usuário
    var cidade = document.getElementById('cidade').value
    var rualog = document.getElementById('rua').value

    fetch(`https://viacep.com.br/ws/${estado}/${cidade}/${rualog}/json/`).then(resposta =>
    resposta.json())
    .then(dados => {
        document.getElementById('cepfinder').innerHTML = `SEU CEP: ${(JSON.stringify(dados[0].cep)).replace(/[-\"]/g, '')}`;
    })
}