
// LLama a los input

const inputUno = document.getElementById("numero1");


// Llama h3 resultado

const rest = document.getElementById("Resultado");

// llamo a los botones

const btnSumar = document.getElementById("suma");

const btnRestar = document.getElementById("resta");

const btnDividir = document.getElementById("division");

const btnMultiplicar = document.getElementById("multiplicacion");

const btnIgual = document.getElementById("igual");

const btnInverso = document.getElementById("inverso");

const btnPotencia = document.getElementById("potencia");

const btnRaiz = document.getElementById("raiz");


let primerNumero;
let segundoNumero;
let operacion;

// btn suma

btnSumar.addEventListener("click", function(){
    primerNumero = Number(inputUno.value);
    operacion ="+";
    console.log(primerNumero);
    console.log(operacion);
    inputUno.value = "";


});



  btnIgual.addEventListener("click", function () {

  segundoNumero = Number(inputUno.value);

  if (operacion === "+") {

    const resultado = primerNumero + segundoNumero;

    rest.textContent = resultado;

  }

});

btnDividir.addEventListener("click", function () {

    primerNumero = Number(inputUno.value);
    operacion ="/";
    console.log(primerNumero);
    console.log(operacion);
    inputUno.value ="";


});


btnIgual.addEventListener("click", function () {

  segundoNumero = Number(inputUno.value);

  if (operacion === "/") {

    const resultado = primerNumero / segundoNumero;

    rest.textContent = resultado;

  }

});


btnRestar.addEventListener("click", function () {

    primerNumero = Number(inputUno.value);
    operacion ="-";
    console.log(primerNumero);
    console.log(operacion);
    inputUno.value ="";


});


btnIgual.addEventListener("click", function () {

  segundoNumero = Number(inputUno.value);

  if (operacion === "-") {

    const resultado = primerNumero - segundoNumero;

    rest.textContent = resultado;

  }

});


btnInverso.addEventListener("click", function(){

    let numero1 = Number(inputUno.value);

    let resultado = 1 / numero1;

    rest.textContent = resultado;
});

btnPotencia.addEventListener("click", function(){

    let numero1 = Number(inputUno.value);

    let resultado =  numero1 * numero1;

    rest.textContent = resultado;

});

btnRaiz.addEventListener("click", function(){

    let numero1 = Number(inputUno.value);

    let resultado = Math.sqrt(numero1);

    rest.textContent = resultado;

});


