var elementos = document.querySelectorAll('.suggestions');
var inputElement = document.getElementById('search-bar');
function showsuggestions() {
    var textTyped = inputElement.value;

    if (textTyped !== "") {
        elementos.forEach(function(elemento) {
            elemento.style.opacity = 1;
        });
    }else{
        elementos.forEach(function(elemento) {
            elemento.style.opacity = 0;
        });
    }
}
function clearInput() {
    inputElement.value = ""; // Define o valor do input como vazio
    elementos.forEach(function(elemento) {
        elemento.style.opacity = 0;
    });
}