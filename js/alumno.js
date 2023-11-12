eventoDeFlecha.onclick = function () {
    window.scrollTo(scrollY, 0);
};

/* Boton modo nocturno */
let buttonNocturne2 = document.getElementById("botonModoNocturno2");
let tarjetas = document.querySelectorAll(".tarjeta");
let nocturno2 = false;

buttonNocturne2.addEventListener("click", function(){
    if(nocturno2 === true){
        document.body.style.background ='whitesmoke';
        document.body.style.color = 'black';
        tarjetas.forEach(tarjeta => {
            tarjeta.style.background = 'whitesmoke';
            tarjeta.style.color = 'black';
        });
        nocturno2 = false;
    }
    else{
        document.body.style.background ='black';
        document.body.style.color = 'whitesmoke';
        tarjetas.forEach(tarjeta => {
            tarjeta.style.background = 'black';
            tarjeta.style.color = 'whitesmoke';
        });
        
        nocturno2 = true;
    }
});

let params = new URLSearchParams(window.location.search);
let usuarioLogueado = params.get('usuario');

const tituloPrincipal = document.querySelector("#titulo");

tituloPrincipal.innerHTML = `<h1>Bienvenido/a  ${usuarioLogueado}</h1>`; 


/* formulario */
let form = document.querySelector(".formulario")
document.addEventListener("DOMContentLoaded", function() {
let buttonSub = document.querySelector(".btnSubmit");


    buttonSub.addEventListener("click", function (e) {
        e.preventDefault();
        const nombre = document.querySelector("#exampleFormControlInput1").value;
        const fecha = document.querySelector("#exampleFormControlInput2").value;
        const seminario = document.querySelector("#exampleFormControlInput3").value;
        const correo = document.querySelector("#exampleFormControlInput5").value;
        const mensaje = document.querySelector("#exampleFormControlTextarea1").value;

        if (nombre != "" && fecha != "" && seminario != "" && correo != "" && mensaje != "") {
            swal({
                title: "Asistencia reservada correctamente",
                icon: "success",
            });
            setTimeout(function () {
                window.location.reload();
            }, 2000);
        } else {
            swal({
                title: "Verifique los datos del formulario",
                icon: "warning",
            });
        }
    });
});

/* boton de cerrar sesion */
let mainElement2 = document.querySelector("main");
let botonDeCierre2 = document.querySelector("#botonSesion2"); 

botonDeCierre2.onclick = function (){
    mainElement2.innerHTML= `<h1>Sesión cerrada ${usuarioLogueado}</h1><a href="./index.html"><button class="btnVolver">Volver a Home</button></a>`
}; 
/* boton de cancelar clase */
let botonesCancelar = document.querySelectorAll(".btnCancelar");

botonesCancelar.forEach(function(boton) {
    boton.addEventListener("click", function() {
        swal({
            title: "La clase será borrada a la brevedad",
            text: "pronto te llegara un mail confirmando la cancelación",
            icon: "success",
        });
    });
});