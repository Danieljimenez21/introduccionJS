//modo estricto
"use strict";

const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

//bloquear la modificación de un objeto seal tambien bloquea la eliminación de propiedades
Object.freeze(producto);

//seal permite modificar las propiedades de un objeto

// producto.imagen = "imagen.jpg";

console.log(producto);

//saber si un objeto esta congelado
console.log(Object.isFrozen(producto));