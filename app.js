const form = document.getElementById('form')
const username = document.getElementById('name') //seleccionando el input, mas no el valor de input
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password-check')
const container = document.getElementById('container')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    //validar
    check()
})

function check() {
    const ArrayDeMensajes= [];
    const UsernameValue = username.value;
    const StringSinEspacios = username.value.replace(/\s/g, ""); //replace quita todo espacio en blanco
    if(UsernameValue === '') {
        console.log('error')
        alertaEror(username, 'No dejes en blanco')
    } else if (UsernameValue != StringSinEspacios) {
        console.log('error')
        alertaEror(username, 'No dejes espacios en blanco')
    }else {
        console.log('bien')
        alertaCorrecto(username);
        ArrayDeMensajes.push(1)
    }

    const emailValue = email.value;
    if(emailValue === '') {
        alertaEror(email, 'email vacio')
    }
    else {
        alertaCorrecto(email)
        ArrayDeMensajes.push(2)
    }

    const passwordValue = password.value;
    if(passwordValue === '') {
        alertaEror(password, 'contraseña vacia')
    }else if(passwordValue.length <= 5) {
        alertaEror(password, 'debe tener al menos 6 caracteres')
    }
    else {
        alertaCorrecto(password)
        ArrayDeMensajes.push(3)
    }

    const password2Value = password2.value;
    if(password2Value != passwordValue || passwordValue === '') {
        alertaEror(password2, 'la contraseña no coincide')
    }else if(password2Value.length <= 5) {
        alertaEror(password2, 'debe tener al menos 6 caracteres')
    }
     else {
        alertaCorrecto(password2)
        ArrayDeMensajes.push(4)
    }

    //show succes alert
    showAlert(ArrayDeMensajes, 'Se ha enviado correctamente')
    console.log(ArrayDeMensajes)
    
}


function alertaEror(user, message) {
    const formSection = user.parentElement; //seleccionando el div del input del parametro
    const small = formSection.querySelector('.small') //seleccionando el small del parametro


    formSection.classList.add('error')

    small.textContent = message;


    setTimeout(() => {
        formSection.classList.remove('error')
    }, 3000)
}



function alertaCorrecto(user) {
    const formSection = user.parentElement;

    formSection.classList.add('success')

    setTimeout(() => {
        formSection.classList.remove('success')
    }, 3000)
}

function showAlert(array, msg) {
    if(array.length === 4) {
        const enviado = document.createElement('P')
        enviado.classList.add('mensajeFinal')
        enviado.textContent = msg;
        container.appendChild(enviado)
        console.log('enviado')

        setTimeout(() => {
            enviado.remove()
        }, 3000)
    }
}






