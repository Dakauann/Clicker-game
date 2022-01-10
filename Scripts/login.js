const username = document.getElementById('usuario')
const senha = document.getElementById('senha')
const enviar = document.getElementById('enviar')

enviar.addEventListener('click', () => {
    if(
        username.value === undefined || 
        username.value == '' ||
        senha.value === undefined ||
        senha.value === '')return alert('Defina seu usuario e senha')
    prompt(`
    Sua senha é: ` + username.value + `` +
    `
    Seu nome de usuario é: ` + senha.value)
    setTimeout(()=> {
       window.location.href = 'fim.html'
    }, 6000)
})
