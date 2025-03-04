//POO

function Cliente(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

//object literal colocas los valores
const producto =  {
    nombre: "tablet",
    precio: 500
}

// object constructor
//clase almacenar la forma en que se construye
function Producto(nombre, precio, disponibilidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponibilidad = disponibilidad
}

//prototipe crear funciones que se utilizan en unsolo objeto especifico
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de ${this.precio}`; 
}

const producto2 = new Producto("Monitor 49 pulgadas", 800, true);
const producto3 = new Producto("Laptop", 46, false);
const cliente = new Cliente("Daniel", "Jimenez");

console.log(cliente);



function formatearProducto(producto){
    return `El producto ${producto.nombre} tiene un precio de: $ ${producto.precio}`;
}

console.log(producto2);
console.log(producto3);

// console.log(formatearProducto(producto2));
// console.log(formatearProducto(producto3));



// function Cosas(nombre, lugar) {
//     this.nombre = nombre,
//     this.lugar = lugar
// }

// const cosa1 = new Cosas("bocinas", "mesa");
// const cosa2 = new Cosas("monitor", "organizador");

// console.log(cosa1),
// console.log(cosa2);