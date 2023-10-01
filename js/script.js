fetch("obras.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(information) {
            localStorage.setItem("productos", JSON.stringify(information));
        })

    document.addEventListener("DOMContentLoaded", () => {   
            const card = document.querySelector(".card");
            const datosProductos = JSON.parse(localStorage.getItem("productos"));
            
    if (datosProductos) {
        datosProductos.productos.forEach((producto) => {
            const divcontenedor = document.createElement("div");
            divcontenedor.classList.add("contenedor");
            card.appendChild(divcontenedor);
            const h5codigo = document.createElement("h5");
            h5codigo.classList.add("card-header");
            divcontenedor.appendChild(h5codigo);
            const id = producto.id;
            h5codigo.innerHTML += id;
            const divcardbody = document.createElement("div");
            divcardbody.classList.add("card-body");
            divcontenedor.appendChild(divcardbody);
            const h5titulo = document.createElement("h5");
            h5titulo.classList.add("card-title");
            divcardbody.appendChild(h5titulo);
            const titulo = producto.titulo;
            h5titulo.innerHTML += titulo;
            const abtn = document.createElement("button");
            abtn.classList.add("btn");
            abtn.classList.add("btn-primary");
            divcardbody.appendChild(abtn);
            const botonVerMas = document.createTextNode("Ver Más");
            abtn.appendChild(botonVerMas);
            
            abtn.addEventListener("click", () => {
                detallesProducto(producto); 
            });
      
        });                           
    }
    });

    function detallesProducto(producto) {
    window.location.href = `cuadros.html?id=${producto.id}`;
    }
