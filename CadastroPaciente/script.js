function getAddress() {
    const cepValue = document.getElementById('cep').value;
    fetch(`https://viacep.com.br/ws/${cepValue}/json/`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('rua').value = data.logradouro;
            document.getElementById('cidade').value = data.localidade;
            document.getElementById('estado').value = data.uf;
        })
        .catch(error => console.error('Erro ao obter endereço:', error));
}