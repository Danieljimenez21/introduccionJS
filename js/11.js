
//objetos
const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}



const precioProducto = producto.precio;
console.log(precioProducto);

// const nombreProducto = producto.nombreProducto;
// console.log(nombreProducto);


//destructuring
const {precio, nombreProducto} = producto;
console.log(precio, nombreProducto);

