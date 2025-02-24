//Array methods
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

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

//forEach
meses.forEach(function(x){
    console.log(x);
})

meses.forEach(function(mes){
    if(mes === 'Marzo'){
        console.log('Marzo si existe');
    }
});

//includes
let resultado = meses.includes('Enero');
console.log(resultado);

//some ideal para arreglos de objetos
const resultado2 = carrito.some(function(producto){
    return producto.nombre === 'Celular';
});
console.log(resultado2);

//reduce
const resultado3 = carrito.reduce(function(total, producto){
    return total + producto.precio;
}, 0);


//filter
resultado = carrito.filter(function(x){
    return x.nombre !== "Celular";
})

console.log(resultado);