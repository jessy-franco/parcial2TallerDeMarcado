/* flecha hacia arriba */
eventoDeFlecha.onclick = function () {
    window.scrollTo(scrollY, 0);
};

/* Boton modo nocturno */
let buttonNocturne4 = document.getElementById("botonModoNocturno4");

let nocturno4 = false;

buttonNocturne4.addEventListener("click", function(){
    if(nocturno4 === true){
        document.body.style.background ='whitesmoke';
        document.body.style.color = 'black';
        buttonNocturne4.innerHTML = "Modo Nocturno"
        nocturno4 = false;
    }
    else{
        document.body.style.background ='black';
        document.body.style.color = 'whitesmoke';
        buttonNocturne4.innerHTML = "Modo Diurno"
        nocturno4 = true;
    }
});
/* formulario */
let form2 = document.querySelector(".formulario2")
document.addEventListener("DOMContentLoaded", function() {
    let buttonSub2 = document.querySelector(".btnSubmit2");
    let span2 = document.querySelector(".mensaje2");

    buttonSub2.addEventListener("click", function (e) {
        e.preventDefault();
        const nombre = document.querySelector("#exampleFormControlInput1").value;
        const correo = document.querySelector("#exampleFormControlInput2").value;
        const mensaje = document.querySelector("#exampleFormControlTextarea1").value;

        if (nombre && correo && mensaje) {
            swal({
                title: "Gracias por contactarte con nosotros!",
                icon: "success",
            });
            
            form2.reset();
        } else {
            swal({
                title: "Por favor, completa todos los campos",
                icon: "warning",
            });
        }
    });
});
