function somar(){
  let num1 = document.querySelector('input#txtn1');
  let num2 = document.querySelector('input#txtn2');
  let res = document.querySelector('div#res');

  if(num1.value.length == 0 || num2.value.length == 0){
    window.alert('[ERRO] Digite números que sejam válidos!');
  }else{
    res.innerHTML = '';
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);
    res.innerHTML = `A soma entre ${n1} e ${n2} é ${n1+n2}`;
  }
}
function subtrair(){
  let num1 = document.querySelector('input#txtn1');
  let num2 = document.querySelector('input#txtn2');
  let res = document.querySelector('div#res');

  if(num1.value.length == 0 || num2.value.length == 0){
    window.alert('[ERRO] Digite números que sejam válidos!');
  }else{
    res.innerHTML = '';
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);
    res.innerHTML = `A subtração entre ${n1} e ${n2} é ${n1-n2}`;
  }

}
function multiplicar(){
  let num1 = document.querySelector('input#txtn1');
  let num2 = document.querySelector('input#txtn2');
  let res = document.querySelector('div#res');

  if(num1.value.length == 0 || num2.value.length == 0){
    window.alert('[ERRO] Digite números que sejam válidos!');
  }else{
    res.innerHTML = '';
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);
    res.innerHTML = `A multiplicação entre ${n1} e ${n2} é ${n1*n2}`;
  }

}
function dividir(){
  let num1 = document.querySelector('input#txtn1');
  let num2 = document.querySelector('input#txtn2');
  let res = document.querySelector('div#res');

  if(num1.value.length == 0 || num2.value.length == 0){
    window.alert('[ERRO] Digite números que sejam válidos!');
  }else{
    res.innerHTML = '';
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);
    res.innerHTML = `A divisão entre ${n1} e ${n2} é ${n1/n2}`;
  }

}