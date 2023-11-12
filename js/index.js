const cambioImagen = document.querySelector(".img1");

cambioImagen.onmouseover = () => {
    cambioImg()
};

function cambioImg() {
    if (cambioImagen.src.match("robotEstudiando.jpg")) {
        cambioImagen.src = "./multimedia/robotEstudiando2.jpg"
    }
    else {
        cambioImagen.src = "./multimedia/robotEstudiando.jpg"
    }
};

/* flecha hacia arriba */
eventoDeFlecha.onclick = function () {
    window.scrollTo(scrollY, 0);
};

/* Boton modo nocturno */
let buttonNocturne = document.getElementById("botonModoNocturno");

let nocturno = false;

buttonNocturne.addEventListener("click", function () {
    if (nocturno === true) {
        document.body.style.background = 'whitesmoke';
        document.body.style.color = 'black';
        buttonNocturne.innerHTML = "Modo Nocturno"
        nocturno = false;
    }
    else {
        document.body.style.background = 'black';
        document.body.style.color = 'whitesmoke';
        buttonNocturne.innerHTML = "Modo Diurno"
        nocturno = true;
    }
});

/* Login */

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = loginForm.username.value;
    const password = loginForm.password.value;

    const alumnos = [
        {
            usuario: 'Agustina', contraseña: '123'
        },
        {
            usuario: 'Patricia', contraseña: '456'
        },
        {
            usuario: 'Marcos', contraseña: '789'
        }
    ]
    const docentes = [
        {
            usuario: 'Rodrigo', contraseña: '123'
        },
        {
            usuario: 'Patroclo', contraseña: '456'
        },
        {
            usuario: 'Mariano', contraseña: '789'
        }
    ]

    let usuarioValido;

    const alumnoEncontrado = alumnos.find(alumnos => alumnos.usuario === username && alumnos.contraseña === password);
    if (alumnoEncontrado) {
        usuarioValido = alumnoEncontrado;
        let url = 'alumno.html?usuario=' + encodeURIComponent(username);
        window.location.href = url;
    }


    if (!usuarioValido) {
        const docenteEncontrado = docentes.find(docentes => docentes.usuario === username && docentes.contraseña === password);
        if (docenteEncontrado) {
            usuarioValido = docenteEncontrado;
            let url = 'docente.html?usuario=' + encodeURIComponent(username);
            window.location.href = url;
        }
    }

    if (usuarioValido) {
        swal({
            title: "ingresaste correctamente",
            icon: "success",
        });
    } else {
        swal({
            title: "Credenciales incorrectas. Intente nuevamente",
            icon: "error",
        });
    }
});

