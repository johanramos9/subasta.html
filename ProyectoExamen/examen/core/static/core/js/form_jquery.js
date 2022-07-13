

$("#formulario_contacto").Validate( {
    rules: {
        nombre: {
            required: true,
            minlength: 4,
            maxlength: 30
        },
        email:{
            required: true,
            email: true
        },
        mensaje:{
            required: true,
            minlength: 5,
            maxlength: 200
        }

    }
});


$("#guardar").click(function() {
    if($("formulario_contacto").valid() == false) {
        return;
    }
    let nombre = $("#nombre").val()
    let email = $("#email").val()
    let tipoSolicitud = $("#tipo_solicitud").val()
    let mensaje = $("#mensaje").val()
    let avisos = $("#avisos").is(":checked")

    console.log(nombre)

});