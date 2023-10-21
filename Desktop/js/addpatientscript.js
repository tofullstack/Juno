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

const input = document.querySelector('#CPFfield')

input.addEventListener('keypress', ()=>{
    let inputlength = input.value.length

    if(inputlength==3){
        input.value += '.'
    }

    if(inputlength==7){
        input.value += '.'
    }
    if(inputlength==11){
        input.value += '-'
    }
    console.log(inputlength)
});



