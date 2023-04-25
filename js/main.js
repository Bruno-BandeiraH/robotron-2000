const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const robo = document.querySelector("[data-robo]");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

const coresRobo = ["Robotron-amarelo.png", "Robotron-azul.png", "Robotron-vermelho.png",
    "Robotron-rosa.png", "Robotron-preto.png", "Robotron-branco.png"];

robo.addEventListener("click", (evento) => {
    const corAtual = evento.target.src.split("/").pop();
    index = coresRobo.indexOf(corAtual);
    console.log(index);
    if (index + 1 >= coresRobo.length) {
        evento.target.src = `file:///D:/Estudos/FULLSTACK%20JS%20BOTICARIO/JavaScript%20manipulando%20o%20DOM/robotron-2000-projeto_inicial/cores/${coresRobo[0]}`;
    } else {
        evento.target.src = `file:///D:/Estudos/FULLSTACK%20JS%20BOTICARIO/JavaScript%20manipulando%20o%20DOM/robotron-2000-projeto_inicial/cores/${coresRobo[index + 1]}`;
    }
})


function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]");

    if (operacao === "-" && peca.value > 0) {
        peca.value = parseInt(peca.value) - 1;
    } else if(operacao === "+" && peca.value < 99){
        peca.value = parseInt(peca.value) + 1;
    } 
}

function atualizaEstatisticas(peca, operacao, controle) {
    const contador = controle.querySelector("[data-contador]");

    estatisticas.forEach((elemento) => {
        if (operacao === "+") {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
        } else if(operacao === "-") {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
        } 
        
    })
}

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca, evento.target.dataset.controle, evento.target.parentNode);
    })
})

