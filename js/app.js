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

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "peso Inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("altura inválido!");
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválido";
        paciente.classList.add("paciente-invalido");
    }
    //--------------------------Calculando IMC ------------------------
    if (alturaEhValida && pesoEhValido){
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }

    //-----------------------Adicionando Evento no botão-------------//
    var botaoAdicionar = document.querySelector("#adicionar-paciente");

    var botaoAdicionar = document.querySelector("#adicionar-paciente");
    botaoAdicionar.addEventListener("click", function(event) {
        event.preventDefault();
    
        var form = document.querySelector("#form-adiciona");
    
        var nome = form.nome.value;
        var peso = form.peso.value;
        var altura = form.altura.value;
        var gordura = form.gordura.value;
    
        var pacienteTr = document.createElement("tr");
    
        var nomeTd = document.createElement("td");
        var pesoTd = document.createElement("td");
        var alturaTd = document.createElement("td");
        var gorduraTd = document.createElement("td");
        var imcTd = document.createElement("td");
    
        nomeTd.textContent = nome;
        pesoTd.textContent = peso;
        alturaTd.textContent = altura;
        gorduraTd.textContent = gordura;
    
        pacienteTr.appendChild(nomeTd);
        pacienteTr.appendChild(pesoTd);
        pacienteTr.appendChild(alturaTd);
        pacienteTr.appendChild(gorduraTd);
    
        var tabela = document.querySelector("#tabela-pacientes");
    
        tabela.appendChild(pacienteTr);
    
    });
}
