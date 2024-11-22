var moldura
var fotos
var indice
var temporizador
var botaoVoltar
var botaoAvancar

const tempointervalo = 2000

var indice = 0, temporizador;

window.onload = () => {

    const moldura = document.getElementById("moldura")
    const botaoVoltar = document.getElementById("btnVoltar")
    const botaoAvancar = document.getElementById("btnAvancar")

    const MostrarFoto = () => {
        moldura.src = "imagem/" + fotos[indice]
    }

    const automaticoFoto = () => {
        clearInterval(temporizador)
        temporizador = setInterval(() => AvancarFoto(), tempointervalo)
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