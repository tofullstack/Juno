
/*Extraído do código fonte do site da receita federal*/
/*
function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;

  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}
var strCPF = "12345678909";
alert(TestaCPF(strCPF));
*/


/*Adiciona os pontos e traços conforme o CPF é preenchido*/

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

