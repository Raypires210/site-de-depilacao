var moldura
var fotos
var indice
var temporizador
var botaoVoltar
var botaoAvancar

const tempointervalo = 2000

botaoVoltar = document.getElementById("btnVoltar");
botaoAvancar = document.getElementById("btnAvancar");
moldura = document.getElementById("moldura")

indice = 0

fotos = ["baner.jpeg", "mulher.png"]

window.onload = inicio()

function inicio() {
   botaoAvancar.onclick=Avancarfoto
   botaoVoltar.onclick=Voltarfoto
   mostrafoto()
   Automaticofoto()

}

function Avancarfoto() {
    if(indice<fotos.length-1){
        indice++
    }
    else{
        indice=0
    }

    mostrafoto()
    clearInterval(temporizador)
    Automaticofoto()
}

function Voltarfoto() {
    if(indice >0)
    {
        indice--
    }
    else{
        indice=fotos.length-1
    }
    mostrafoto()
    clearInterval(temporizador)
    Automaticofoto()
}

function Automaticofoto(){
    temporizador=setInterval(Avancarfoto,tempointervalo)
}

function mostrafoto() {
    moldura.src = "img/" + fotos[indice]
}


// script.js
document.getElementById("menu").addEventListener("click", function() {
    document.getElementById("sidebar").classList.toggle("active");
});
