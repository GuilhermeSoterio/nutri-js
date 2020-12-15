//var titulo = document.querySelector("h1");
			//por classe
//var titulo2 = document.querySelector(".titulo");
//titulo.textContent = "Banana";
//------Selecionando todos os pcientes de uma vez.--------
var pacientes = document.querySelectorAll(".paciente");
//---------------------Selecionando Elementos----------------------
for (var i = 0; i < pacientes.length; i++) {    

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    

    if (!pesoEhValido) {
        console.log("peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "peso Inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }
    //--------------------------Calculando IMC ------------------------
    if ( alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc.toFixed(2);
    }
    
function calculaImc(peso, altura){
        var imc = 0;
        imc = peso / (altura * altura);
    
        return imc;
    }

function validaPeso(peso){
        if (peso >= 0 && peso <= 1000) {
            return true;
        } else {
            return false;
        }
    }
    
function validaAltura(altura) {
        if (altura >= 0 && altura <= 3.0) {
            return true;
        } else {
            return false;
        }
    }
};
