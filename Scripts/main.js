const botao = document.getElementById('botao-aumentar')
const botaoX2 = document.getElementById('x2')
const botaoX3 = document.getElementById('x3')
const botaoX4 = document.getElementById('x4')

const multiplicador = document.getElementById('multiplicador')

const total = document.getElementById('dinheiro')

let clicks = 1;
let initialMoney = 1;

let mainMulti = 1; 
let multix2 = false 
let multix3 = false
let multix4 = false

let colors = ['blue', 'gray', 'red', 'yellow', 'green', 'purple', 'magenta']

botaoX2.disabled = true; botaoX2.innerText += ' (Bloqueado) ';
botaoX3.disabled = true; botaoX3.innerText += ' (Bloqueado) ';
botaoX4.disabled = true; botaoX4.innerText += ' (Bloqueado) ';

botao.addEventListener('click', () => {
    clicks += mainMulti > 0 
    ? mainMulti * 1
    : 1
    if (clicks > 99) {
        botaoX2.disabled = false
        botaoX2.innerText = 'X2 dinheiro (Acessavel) ';
    }
    if (clicks > 199) {
        botaoX3.disabled = false
        botaoX3.innerText = 'X4 dinheiro (Acessavel) ';
    }
    if (clicks > 299) {
        botaoX4.disabled = false
        botaoX4.innerText = 'X5 dinheiro (Acessavel) ';
    }

    total.innerText = clicks

    total.style = 'background-color: ' + colors[colors.length * Math.random() | 0]

    total.style.transition = '1s'
    console.log(initialMoney + ' foi adicionado, total atual: ' + clicks, color)
})

// Multiplicadores

botaoX2.addEventListener('click', () => {
    multix2 = true 
    botaoX2.style = `
    background-color: green;
    transition: 1s`
    botaoX2.innerText = 'X2(comprado)'
    botaoX2.disabled = true
    mainMulti = mainMulti * 2
    clicks = clicks - 100
    total.innerText = clicks
    multiplicador.innerText = 'Multiplicador: ' + mainMulti + 'x'
})

botaoX3.addEventListener('click', () => {
    multix3 = true 
    botaoX2.style = `
    background-color: green;
    transition: 1s`
    botaoX3.innerText = 'X3(comprado)'
    botaoX3.disabled = true
    mainMulti = mainMulti *  3
    clicks = clicks - 200
    total.innerText = clicks
    multiplicador.innerText = 'Multiplicador: ' + mainMulti + 'x'
})

botaoX4.addEventListener('click', () => {
    multix4 = true 
    botaoX2.style = `
    background-color: green;
    transition: 1s`
    botaoX4.innerText = 'X4(comprado)'
    botaoX4.disabled = true
    mainMulti = mainMulti * 4
    clicks = clicks - 300
    total.innerText = clicks
    multiplicador.innerText = 'Multiplicador: ' + mainMulti + 'x'
})


