var titulo = document.querySelector("h1");
			//por classe
var titulo2 = document.querySelector(".titulo");
titulo.textContent = "Banana";
//---------------------Selecionando Elementos----------------------
var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

//---------------------
var pesoEhValido = true;
var alturaEhValida = true;

if(peso <= 0 || peso >= 1000) {
    console.log("peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "peso Inválido";
}

if(altura <= 0 || altura >= 3.00) {
    console.log("altura inválido!");
    alturaEhValida = false;
    tdImc.textContent = "Altura Inválido";
}
//--------------------------Calculando IMC ------------------------
if( alturaEhValida && pesoEhValido){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}
