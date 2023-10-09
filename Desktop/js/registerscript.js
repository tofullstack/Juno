/*Adiciona os pontos(.) e traços(-) conforme o CPF é preenchido*/

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


