/* flecha hacia arriba */
eventoDeFlecha.onclick = function () {
    window.scrollTo(scrollY, 0);
};

/* Boton modo nocturno */
let buttonNocturne3 = document.getElementById("botonModoNocturno3");
let tarjetas = document.querySelectorAll(".tarjeta")
let nocturno3 = false;

buttonNocturne3.addEventListener("click", function(){
    if(nocturno3 === true){
        document.body.style.background ='whitesmoke';
        document.body.style.color = 'black';
        tarjetas.forEach(tarjeta => {
            tarjeta.style.background = 'whitesmoke';
            tarjeta.style.color = 'black';
        });
        nocturno3 = false;
    }
    else{
        document.body.style.background ='black';
        document.body.style.color = 'whitesmoke';
        tarjetas.forEach(tarjeta => {
            tarjeta.style.background = 'black';
            tarjeta.style.color = 'whitesmoke';
        });
        
        nocturno3 = true;
    }
});

/* parametros de url */
let params2 = new URLSearchParams(window.location.search);
let usuarioParametro2 = params2.get('usuario');

const tituloPrincipal2 = document.querySelector("#titulo2");

tituloPrincipal2.innerHTML = `<h1>Bienvenido/a  ${usuarioParametro2}</h1>`; 

/* boton de cerrar sesion */
let mainElement = document.querySelector("main");
let botonDeCierre = document.querySelector("#botonSesion");

botonDeCierre.onclick = function (){
    mainElement.innerHTML= `<h1>Sesión cerrada ${usuarioParametro2}</h1><a href="./index.html"><button class="btnVolver">Volver a Home</button></a>`
}; 