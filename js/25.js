//metodos exclusivos de arreglos
const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 500},
    {nombre: 'Television 50 Pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800}
];

//for each 
// carrito.forEach(x => console.log(x.precio));
// carrito.forEach(function(producto){
//     console.log(producto);
// })
// carrito.forEach(producto => console.log(producto));

//map crea un nuevo arreglo foreach no 

carrito.forEach(producto => console.log(producto.nombre));
let carrito2 = carrito.map(producto =>`${producto.nombre} - ${producto.precio}`);
console.log(carrito2);








console.log(`Ejecucion map`)


//map
carrito.map(x => console.log(x.precio));