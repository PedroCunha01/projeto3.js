const form = document.getElementById('valid-form')
const campoA = document.getElementById('campo-A')
const campoB = document.getElementById('campo-B')

let formEValido = false;


function validaCampos(){
    if (campoB.value > campoA.value ) {
        return formEValido = true

} else {
    return formEValido = false

    };
}

form.addEventListener('submit' , function(e) {

    e.preventDefault()

    validaCampos()



if (formEValido) {
    const mensagem = `Valor do campo B (${campoB.value}) é maior do que o valor do campo A (${campoA.value})`
    const containerMensagem = document.querySelector('.system-message')
    containerMensagem.innerHTML = mensagem
    containerMensagem.style.display = 'block'
    containerMensagem.style.background = '#27ae60'
    campoA.value = ''
    campoB.value = ''

} else {

    const mensagem = `valor do campo A(${campoA.value}) deve ser maior do que o valor do campo B(${campoB.value})`
    const containerMensagem = document.querySelector('.system-message')
    containerMensagem.innerHTML = mensagem
    containerMensagem.style.display = 'block'
    containerMensagem.style.background = 'red'
    campoA.value = '';
    campoB.value = '';
}

})