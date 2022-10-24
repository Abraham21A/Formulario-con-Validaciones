const nombre = document.getElementById("name");
const nick = document.getElementById("nickname");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");
const generoH = document.getElementById("hombre");
const generoM = document.getElementById("mujer");


form.addEventListener('submit', e=> {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if(nombre.value.length < 3) {
        warnings += `-El nombre es muy Corto <br>`
        entrar = true
    }
    if(nick.value.length < 5) {
        warnings += `-El apellido es muy Corto <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)) {
        warnings += `-El Email no es valido <br>`
        entrar = true
    }
    if(pass.value.length < 8){
        warnings += `-La contraseña es muy corta <br>`
        entrar = true
    }
    if(generoH.checked == false && generoM.checked ==false) {
        warnings += `-Eliga un genero <br>`
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }
});