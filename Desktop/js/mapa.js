var elementos = document.querySelectorAll('.sugestoes');
var inputElement = document.getElementById('barra-de-pesquisa');
function mostrarsugestoes() {
    var textoDigitado = inputElement.value;

    if (textoDigitado !== "") {
        elementos.forEach(function(elemento) {
            elemento.style.opacity = 1;
        });
    }else{
        elementos.forEach(function(elemento) {
            elemento.style.opacity = 0;
        });
    }
}
function limparInput() {
    inputElement.value = ""; // Define o valor do input como vazio
    elementos.forEach(function(elemento) {
        elemento.style.opacity = 0;
    });
}