
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

const btnBorrar = document.getElementById("borrar");

const btnComa = document.getElementById("coma");


let primerNumero;
let segundoNumero;
let operacion;

// btn borrar

btnBorrar.addEventListener("click" , function(){
  
  inputUno.value = "";
});

//! btn coma - hacer

//! btn -/+ - hacer

//! btn C - hacer

//! btn CE - hacer

//! btn % - hacer

//! FALTA: que se escriban tantos n° como botones de n° se toquen

//! FALTA: que se puedan sumar varios numeros y no solo de a dos

//! FALTA: que revise como hacer con los demas botones, no solo suma

//! FALTA: que me fije que otras restricciones faltan

// btn suma

btnSumar.addEventListener("click", function(){
    primerNumero = Number(inputUno.value);
    operacion ="+";
    console.log(primerNumero);
    console.log(operacion);
    inputUno.value = "";


});

btnMultiplicar.addEventListener("click", function(){
    primerNumero = Number(inputUno.value);
    operacion ="mult";
    console.log(primerNumero);
    console.log(operacion);
    inputUno.value = "";

});

  //btn igual

  btnIgual.addEventListener("click", function () {

   segundoNumero = Number(inputUno.value);

  if (operacion === "+") {

    const resultado = primerNumero + segundoNumero;

    inputUno.value = resultado;

  }

  if (operacion === "mult") {

    const resultado = primerNumero * segundoNumero;

    inputUno.value = resultado;

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

    inputUno.value = resultado;

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

    inputUno.value = resultado;

  }

});


btnInverso.addEventListener("click", function(){

    let numero1 = Number(inputUno.value);

    let resultado = 1 / numero1;

    inputUno.value = resultado;
});

btnPotencia.addEventListener("click", function(){

    let numero1 = Number(inputUno.value);

    let resultado =  numero1 * numero1;

    inputUno.value = resultado;

});

btnRaiz.addEventListener("click", function(){

    let numero1 = Number(inputUno.value);

    let resultado = Math.sqrt(numero1);

    inputUno.value = resultado;

});


//-----------------------//
// Botones de los números//
//-----------------------//

const btnSiete = document.getElementById("siete");

btnSiete.addEventListener("click" , function(){

  inputUno.value = "7";
});


const btnOcho = document.getElementById("ocho");

btnOcho.addEventListener("click" , function(){

  inputUno.value = "8";
});



const btnNueve = document.getElementById("nueve");

btnNueve.addEventListener("click" , function(){

  inputUno.value = "9";
});



const btnCuatro = document.getElementById("cuatro");

btnCuatro.addEventListener("click" , function(){

  inputUno.value = "4";
});



const btnCinco = document.getElementById("cinco");

btnCinco.addEventListener("click" , function(){

  inputUno.value = "5";
});



const btnSeis = document.getElementById("seis");

btnSeis.addEventListener("click" , function(){

  inputUno.value = "6";
});



const btnUno = document.getElementById("uno");

btnUno.addEventListener("click" , function(){

  inputUno.value = "1";
});



const btnDos = document.getElementById("dos");

btnDos.addEventListener("click" , function(){

  inputUno.value = "2";
});



const btnTres = document.getElementById("tres");

btnTres.addEventListener("click" , function(){

  inputUno.value = "3";
});

