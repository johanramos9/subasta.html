
$("#formulario_contacto").validate({
    rules: {
        nombre: {
            required: true,
            minlength: 3,
            maxlength: 30
        },
        email: {
            required: true,
            email: true
        },
        tipo_documento: {
            required: true

        },

        tipo_documento: {
            required: true

        },
        telefono: {
            required: true,
            minlength: 8,
            maxlength: 11,
            number: true
        },
        ciudad: {
            required: true
        },
        mensaje: {
            minlength: 10,
            maxlength: 50
        }
    }
})


$("#enviar").click(function() {
    if($("#formulario_contacto").valid() == false) {
        return;
    }
    let nombre = $("#nombre").val()
    let email = $("#email").val()
    let tipoDocumento = $("#tipo_documento").val()
    let mensaje = $("#mensaje").val()

})
