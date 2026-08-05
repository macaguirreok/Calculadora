
// LLama a los input

const inputUno = document.getElementById("numero1");


// llamo a los botones

const btnSumar = document.getElementById("suma");

const btnRestar = document.getElementById("resta");

const btnDividir = document.getElementById("division");

const btnMultiplicar = document.getElementById("multiplicacion");

const btnIgual = document.getElementById("igual");

const btnInverso = document.getElementById("inverso");

const btnPotencia = document.getElementById("potencia");

const btnRaiz = document.getElementById("raiz");

const btnCE = document.getElementById("CE");

const btnC = document.getElementById("C");

const btnComa = document.getElementById("coma");

const btnCambiarSigno = document.getElementById("cambiarSigno");

const btnBorrar = document.getElementById("borrar");

const btnPorcentaje = document.getElementById("porcentaje");



// función para que no se dupliquen los operadores

function agregarOperacion(operador){

  let ultimoCaracter = inputUno.value.slice(-1);


  /* El return corta la ejecución:
  Si el contenido del input es 0, salí de la función y no ejecutes
  nada más (no llega a agregar el "+" por ejemplo) */
  if(inputUno.value === "0"){
      return;
  }


  if(ultimoCaracter === "+" || 
     ultimoCaracter === "-" || 
     ultimoCaracter === "*" || 
     ultimoCaracter === "/"){

      //salgo de la función y no hacemos nada:
      return;

  }


  inputUno.value += operador;

}

// btn %

btnPorcentaje.addEventListener("click" , function(){

  let numero = Number(inputUno.value);

  let resultado = numero / 100 ;

  inputUno.value = resultado;

});


// btn C : borra todo

btnC.addEventListener("click", function(){

  inputUno.value ="0";

});


// btn CE: borra solo las entradas

btnCE.addEventListener("click" , function(){
  
   inputUno.value = "0";
});

// btn coma

btnComa.addEventListener("click" , function(){

let cuenta = inputUno.value;

if(cuenta === ""){

 inputUno.value = "0.";

 return;

}

//numeros se convierte en un array
let numeros = cuenta.split(/[+\-*/]/); 

// "ultimoNumero = dame el numero de la última posición del array, por eso menos uno"
let ultimoNumero = numeros[numeros.length - 1 ];

if(!ultimoNumero.includes(".")){
  inputUno.value += ".";
}

});

// btn borrar: borrar de a un caracter
//texto.slice(inicio, final)

btnBorrar.addEventListener("click", function(){

  inputUno.value = inputUno.value.slice(0, -1);

});




// btn suma

btnSumar.addEventListener("click", function(){
    
    agregarOperacion("+");


});

// btn multiplicar

btnMultiplicar.addEventListener("click", function(){
    
    agregarOperacion("*");

});

  //*btn igual

  btnIgual.addEventListener("click" , function(){

    //guarda en la variable cuenta, la cuenta completa de 8+8-9 ejemplo

    let cuenta = inputUno.value;

    try{

      let resultado = eval(cuenta);

      inputUno.value = resultado;

    }
    catch(error){

      inputUno.value = "Error";

    }

  });

  


//* btn dividir

btnDividir.addEventListener("click", function () {

  
   agregarOperacion("/");


});

//* btn restar

btnRestar.addEventListener("click", function () {

    
   agregarOperacion("-");


});


//* btn potencia

btnPotencia.addEventListener("click",function(){

let cuenta = inputUno.value;

let resultado = eval(cuenta);

inputUno.value = resultado * resultado;

});

//* btn raiz

btnRaiz.addEventListener("click",function(){

let cuenta = inputUno.value;

let resultado = eval(cuenta);


if(resultado < 0){

 inputUno.value = "Error";

}else{

 inputUno.value = Math.sqrt(resultado);

}

});

//* btn inverso

btnInverso.addEventListener("click",function(){

let cuenta = inputUno.value;

let resultado = eval(cuenta);


if(resultado === 0){

 inputUno.value = "Error";

 return;

}


inputUno.value = 1 / resultado;


});

//* btn cambiarSigno

btnCambiarSigno.addEventListener("click" , function(){

let cuenta = inputUno.value;

let resultado = eval(cuenta);

inputUno.value = resultado * -1;

});


//-----------------------//
// Botones de los números//
//-----------------------//

const btnSiete = document.getElementById("siete");

btnSiete.addEventListener("click" , function(){

  inputUno.value += "7";
});


const btnOcho = document.getElementById("ocho");

btnOcho.addEventListener("click" , function(){

  inputUno.value += "8";
});



const btnNueve = document.getElementById("nueve");

btnNueve.addEventListener("click" , function(){

  inputUno.value += "9";
});



const btnCuatro = document.getElementById("cuatro");

btnCuatro.addEventListener("click" , function(){

  inputUno.value += "4";
});



const btnCinco = document.getElementById("cinco");

btnCinco.addEventListener("click" , function(){

  inputUno.value += "5";
});



const btnSeis = document.getElementById("seis");

btnSeis.addEventListener("click" , function(){

  inputUno.value += "6";
});



const btnUno = document.getElementById("uno");

btnUno.addEventListener("click" , function(){

  inputUno.value += "1";
});



const btnDos = document.getElementById("dos");

btnDos.addEventListener("click" , function(){

  inputUno.value += "2";
});



const btnTres = document.getElementById("tres");

btnTres.addEventListener("click" , function(){

  inputUno.value += "3";
});



const btnCero = document.getElementById("cero");

btnCero.addEventListener("click" , function(){

  inputUno.value += "0";
});


