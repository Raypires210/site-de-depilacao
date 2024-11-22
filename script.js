const fotos = ["baner.PNG","buco.PNG"]

const tempointervalo = 2000

var indice = 0, temporizador;

window.onload = () => {

    const moldura = document.getElementById("moldura")
    const botaoVoltar = document.getElementById("btnVoltar")
    const botaoAvancar = document.getElementById("btnAvancar")

    const MostrarFoto = () => {
        moldura.src = "img/" + fotos[indice]
    }

    const automaticoFoto = () => {
        clearInterval(temporizador)
        temporizador = setInterval(() => AvancarFoto(), tempointervalo)
    }

    const AvancarFoto = () => {
        indice = (indice + 1) % fotos.length
        MostrarFoto()
        automaticoFoto()
    }

    const VoltarFoto = () => {
        indice = (indice - 1 + fotos.length) % fotos.length
        MostrarFoto()
        automaticoFoto()
    }

    botaoAvancar.onclick = AvancarFoto
    botaoVoltar.onclick = VoltarFoto
    MostrarFoto()
    AvancarFoto()
}