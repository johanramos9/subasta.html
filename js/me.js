const formulario = document.getElementById('formulario'); //acceso al formulario
const inputs = document.querySelectorAll('#formulario input'); //almacena todos los inputs


const expresiones = {
usuario: /^[a-zA-z8-9\_\-]{4,16}$/, //letras, numeros, guion y guion abajo.
nombre: /^[a-zA-ZÁ-ÿ\s]{1,48}$/ , //letras y espacios, pueden llevar acentos.
password:/^.{4,12}$/ , // 4 a 12 digitos.
correo: /^[a-zA-Z8-9_.+-]+@[a-zA-Z8-9-]+\.[a-zA-Z8-9-.]+$/, // letras numeros, @ y punto letras.
telefono: /^\d{7,14}$/  //7 a 14 digitos.
}

const campos = {
    usuario: false,
    nombre: false,
    password: false,
    correo: false,
    telefono: false
}

const validarFormulario = (e) => {
    switch (e.target.name) { //lo que quiero comprobar
        case "usuario": 
        if(expresiones.usuario.test(e.target.value)){
            document.getElementById('grupo__usuario').classList.remove('formulario__grupo-incorrecto');
            document.getElementById('grupo__usuario').classList.add('formulario__grupo-correcto');
            document.querySelector('#grupo__usuario i').classList.remove('fa-solid fa-circle-xmark');
            document.querySelector('#grupo__usuario i').classList.add('fa-solid fa-circle-check');
            document.querySelector('#grupo__usuario .formulario__input-error').classList.remove('formulario__input-error-activo');
        }else {
            document.getElementById('grupo__usuario').classList.add('formulario__grupo-incorrecto');
            document.getElementById('grupo__usuario').classList.remove('formulario__grupo-correcto');
            document.querySelector('#grupo__usuario i').classList.add('fa-solid fa-circle-xmark');
            document.querySelector('#grupo__usuario i').classList.remove('fa-solid fa-circle-check');
            document.querySelector('#grupo__usuario .formulario__input-error').classList.add('formulario__input-error-activo');

        }       
        break;

        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('grupo__nombre').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__nombre').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__nombre i').classList.add('fa-solid fa-circle-xmark');
                document.querySelector('#grupo__nombre i').classList.remove('fa-solid fa-circle-check');
                document.querySelector('#grupo__nombre .formulario__input-error').classList.remove('fa-solid fa-circle-check');
            }else {
                document.getElementById('grupo__nombre').classList.add('formulario__grupo-incorrecto');
                document.getElementById('grupo__nombre').classList.remove('formulario__grupo-correcto');
                document.querySelector('#grupo__nombre i').classList.add('fa-solid fa-circle-xmark');
                document.querySelector('#grupo__nombre i').classList.remove('fa-solid fa-circle-check');
                document.querySelector('#grupo__nombre .formulario__input-error').classList.add('formulario__input-error-activo');
            }  

        break;

        case "password":
            if(expresiones.password.test(e.target.value)){
                document.getElementById('grupo__password').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__password').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__password i').classList.add('fa-solid fa-circle-xmark');
                document.querySelector('#grupo__password i').classList.remove('fa-solid fa-circle-check');
                document.querySelector('#grupo__password .formulario__input-error').classList.remove('fa-solid fa-circle-check');
            }else {
                document.getElementById('grupo__password').classList.add('formulario__grupo-incorrecto');
                document.getElementById('grupo__password').classList.remove('formulario__grupo-correcto');
                document.querySelector('#grupo__password i').classList.add('fa-solid fa-circle-xmark');
                document.querySelector('#grupo__password i').classList.remove('fa-solid fa-circle-check');
                document.querySelector('#grupo__password .formulario__input-error').classList.add('formulario__input-error-activo');
            }  
        break;

        case "password2":
            if(expresiones.password2.test(e.target.value)){
                document.getElementById('grupo__password2').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__password2').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__password2 i').classList.add('fa-solid fa-circle-xmark');
                document.querySelector('#grupo__password2 i').classList.remove('fa-solid fa-circle-check');
                document.querySelector('#grupo__password2 .formulario__input-error').classList.remove('formulario__input-error-activo');
            }else {
                document.getElementById('grupo__password2').classList.add('formulario__grupo-incorrecto');
                document.getElementById('grupo__password2').classList.remove('formulario__grupo-correcto');
                document.querySelector('#grupo__password2 i').classList.add('fa-solid fa-circle-xmark');
                document.querySelector('#grupo__password2 i').classList.remove('fa-solid fa-circle-check');
                document.querySelector('#grupo__password2 .formulario__input-error').classList.add('formulario__input-error-activo');
            }
          
        break;

        case "correo":
            if(expresiones.correo.test(e.target.value)){
                document.getElementById('grupo__correo').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__correo').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__correo i').classList.add('fa-solid fa-circle-xmark');
                document.querySelector('#grupo__correo i').classList.remove('fa-solid fa-circle-check');
                document.querySelector('#grupo__correo .formulario__input-error').classList.remove('fa-solid fa-circle-check');
            }else {
                document.getElementById('grupo__correo').classList.add('formulario__grupo-incorrecto');
                document.getElementById('grupo__correo').classList.remove('formulario__grupo-correcto');
                document.querySelector('#grupo__correo i').classList.add('fa-solid fa-circle-xmark');
                document.querySelector('#grupo__correo i').classList.remove('fa-solid fa-circle-check');
                document.querySelector('#grupo__correo .formulario__input-error').classList.add('formulario__input-error-activo');
            } 
        break;

        case "telefono":
            if(expresiones.telefono.test(e.target.value)){
                document.getElementById('grupo__telefono').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__telefono').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__telefono i').classList.add('fa-solid fa-circle-xmark');
                document.querySelector('#grupo__telefono i').classList.remove('fa-solid fa-circle-check');
                document.querySelector('#grupo__telefono .formulario__input-error').classList.remove('fa-solid fa-circle-check');
            }else {
                document.getElementById('grupo__telefono').classList.add('formulario__grupo-incorrecto');
                document.getElementById('grupo__telefono').classList.remove('formulario__grupo-correcto');
                document.querySelector('#grupo__telefono i').classList.add('fa-solid fa-circle-xmark');
                document.querySelector('#grupo__telefono i').classList.remove('fa-solid fa-circle-check');
                document.querySelector('#grupo__telefono .formulario__input-error').classList.add('formulario__input-error-activo');
            } 
        break;
    }
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    //e.preventDefault();

    const terminos = document.getElementById('terminos');
    if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked ){
        formulario.reset();

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
    }
});

//const validarPassword2 = () => {
  //  const inputPassword1 = document.getElementById('password');
    //const inputPassword2 = document.getElementById('password2');
    //if(inputPassword1.value !== inputPassword2.value){
      //  document.getElementById('grupo__password2').classList.add('formulario__grupo-incorrecto');
        //document.getElementById('grupo__password2').classList.remove('formulario__grupo-correcto');
        //document.querySelector('#grupo__password2 i').classList.add('fa-solid fa-circle-xmark');
        //document.querySelector('#grupo__password2 i').classList.remove('fa-solid fa-circle-check');
        //document.querySelector('#grupo__password2 .formulario__input-error').classList.add('formulario__input-error-activo');
    //} else {
      //  document.getElementById('grupo__password2').classList.remove('formulario__grupo-incorrecto');
        //document.getElementById('grupo__password2').classList.add('formulario__grupo-correcto');
        //document.querySelector('#grupo__password2 i').classList.remove('fa-solid fa-circle-xmark');
        //document.querySelector('#grupo__password2 i').classList.add('fa-solid fa-circle-check');
        //document.querySelector('#grupo__password2 .formulario__input-error').classList.add('formulario__input-error-activo');
    //}
    //}