/* =========================
   ABRIR CARTA
========================= */

function abrirCarta() {

    document.getElementById("inicio").style.display = "none";

    document.getElementById("carta").style.display = "flex";

}


/* =========================
   MOSTRAR SORPRESA
========================= */

function mostrarSorpresa() {

    document.getElementById("carta").style.display = "none";

    document.getElementById("sorpresa").style.display = "flex";

}


/* =========================
   ESTRELLAS
========================= */

const contenedorEstrellas =
    document.getElementById("estrellas");


for (let i = 0; i < 120; i++) {

    const estrella =
        document.createElement("div");

    estrella.classList.add("estrella");

    estrella.style.left =
        Math.random() * 100 + "%";

    estrella.style.top =
        Math.random() * 100 + "%";

    estrella.style.animationDelay =
        Math.random() * 2 + "s";

    contenedorEstrellas.appendChild(estrella);

}


/* =========================
   CORAZONES AL HACER CLIC
========================= */

document.addEventListener("click", function(event) {

    const corazon =
        document.createElement("div");

    corazon.textContent = "💗";

    corazon.classList.add("corazon");

    corazon.style.left =
        event.clientX + "px";

    corazon.style.top =
        event.clientY + "px";

    document.body.appendChild(corazon);

    setTimeout(() => {

        corazon.remove();

    }, 1500);

});


/* =========================
   ABRIR SOBRE
========================= */

function abrirSobre() {

    const sobre =
        document.querySelector(".sobre");

    sobre.classList.add("abierto");


    setTimeout(() => {

        sobre.style.display = "none";

        mostrarSorpresa();

    }, 1200);

}


/* =========================
   MOSTRAR FINAL
========================= */

function mostrarFinal() {

    const mensaje =
        document.querySelector(".mensaje-final");

    const final =
        document.getElementById("final-pagina");


    /* DESAPARECER MENSAJE */

    mensaje.classList.add("desaparecer");


    /* ESPERAR A QUE TERMINE */

    setTimeout(() => {

        mensaje.style.display = "none";


        /* MOSTRAR FINAL */

        final.style.display = "flex";


        /* ACTIVAR ANIMACION */

        setTimeout(() => {

            final.classList.add("aparecer-final");

        }, 50);

    }, 1200);

}