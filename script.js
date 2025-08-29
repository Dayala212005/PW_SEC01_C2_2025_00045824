
    function cambiarTitulo() {
        const titulo = document.getElementById("titulo");
        titulo.textContent = "Titulo Nuevo";
    }

    function cambiarLayout() {
        const contenedor = document.getElementById("contenedor")
        if (contenedor.style.display === "block") {
            contenedor.style.display = "grid";
            contenedor.style.gridTemplateColumns = "25% 70%";
            contenedor.style.gap = "5%";
        } else {
            contenedor.style.display = "block";
        }
    }

    function cambiarSubtitulo() {
        const subtitulo = document.getElementById("subtitulo");
        subtitulo.style.color = subtitulo.style.color === "red" ? "black" : "red";

        const parrafo = subtitulo.nextElementSibling;
        parrafo.style.color = parrafo.style.color === "blue" ? "black" : "blue";

        parrafo.style.fontFamily = parrafo.style.fontFamily === "Courier New, monospace"
            ? "Arial, sans-serif"
            : "Courier New, monospace";
    }

    function agregarImagen() {
        const aside = document.querySelector("aside");
        if (!document.getElementById("img-extra")) {
            const img = document.createElement("img");
            img.src = "Logo.jpg";
            img.alt = "Imagen HTML";
            img.id = "img-extra";
            img.style.width = "100%";
            img.style.marginTop = "10px";
            aside.appendChild(img);
        }
    }