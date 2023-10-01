document.addEventListener("DOMContentLoaded", () => {
    const divcuadros = document.querySelector("div")
    
    const urlParams = new URLSearchParams(window.location.search);
    const idProducto = urlParams.get("id");

    const datosProductos = JSON.parse(localStorage.getItem("productos"));
    
    const productoSeleccionado = datosProductos.productos.find(
        (producto) => producto.id == idProducto
    );
        
    if (productoSeleccionado) {
         const imgproducto = document.createElement("img");
         imgproducto.classList.add("card-img-top");
         imgproducto.setAttribute("src", `${productoSeleccionado.imagen}`);
         divcuadros.appendChild(imgproducto);
         const divcardbody = document.createElement("div");
         divcardbody.classList.add("card-body");
         divcuadros.appendChild(divcardbody);
         const h5titulo = document.createElement("h5");
         h5titulo.classList.add("card-title");
         divcardbody.appendChild(h5titulo);
         const titulo = "Título: " + `${productoSeleccionado.titulo}`;
         h5titulo.innerHTML += titulo;
         const parrafoTecnica = document.createElement("p");
         parrafoTecnica.classList.add("card-text");
         divcardbody.appendChild(parrafoTecnica);
         const tecnica = "Técnica: " + `${productoSeleccionado.tecnica}`;
         parrafoTecnica.innerHTML += tecnica;
         const parrafoMedidas = document.createElement("p");
         parrafoMedidas.classList.add("card-text");
         divcardbody.appendChild(parrafoMedidas);
         const medidas = "Medidas: " + `${productoSeleccionado.medidas}`;
         parrafoMedidas.innerHTML += medidas;
         const parrafoDescripcion = document.createElement("p");
         parrafoDescripcion.classList.add("card-text");
         divcardbody.appendChild(parrafoDescripcion);
         const descripcion = "Descripción: " + `${productoSeleccionado.descripcion}`;
         parrafoDescripcion.innerHTML += descripcion;
         const h5precio = document.createElement("h5");
         h5precio.classList.add("card-title");
         divcardbody.appendChild(h5precio);
         const precio = "Precio: " + `${productoSeleccionado.precio}`;
         h5precio.innerHTML += precio;

         const abtn = document.createElement("a");
         abtn.classList.add("btn");
         abtn.classList.add("btn-primary");
         divcardbody.appendChild(abtn);
         const botonVolver = document.createTextNode("Volver");
         abtn.appendChild(botonVolver);

         abtn.addEventListener("click", () => {
            window.location.href = `index.html`; 
        });
    }

})

