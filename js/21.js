//arroy function 

const sumar2 = (n1 = 0, n2 = 0) => console.log( n1 + n2);
sumar2(5, 10);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);

aprendiendo("JavaScript");

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

meses.forEach( mes =>{
    if(mes === 'Marzo'){
        console.log('Marzo si existe');
    }
});


//some ideal para arreglos de objetos
resultado2 = carrito.some( producto => producto.nombre === 'Celular'); 

console.log(resultado2);



//reduce
const resultado3 = carrito.reduce((total, producto) => total + producto.precio, 0);

console.log(resultado3);

//filter
resultado4 = carrito.filter(producto => producto.precio < 400);
console.log(resultado4);

resultado5 = carrito.filter(producto => producto.nombre === "Celular");

console.log(resultado5);

