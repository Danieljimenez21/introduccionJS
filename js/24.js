//for loop
// for(let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for(let i = 1; i <= 100; i++) {
//     if(i % 2 == 0){
//         console.log(`El indice actual ${i} es par`)
//     } else {
//         console.log(`El numero ${i} es impar`)
//     }
// }

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

console.log(`ejecucion del bucle for: `)

for (let i = 0; i < carrito.length; i++){
    console.log(carrito[i].nombre);
}

console.log(`ejecucion del while loop: `)
//while loop
let x = 0; //Indice o valor inicial

while(x < carrito.length){ //condicion
    console.log(carrito[x].precio);
    x++;//incremento
}

console.log("bloque de ejecucion del bucle do while: ")

//do while loop

let i = 100;

do {
    console.log(i);
    i++;
} while(i < 10); 

let a = 1;

while(a <= 10){
    console.log(a);
    a++;
}



let b = 500;
do{
    console.log("Desde el bucle do while")
    console.log(b)
    b++;
}while(b<20);

