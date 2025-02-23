//areglos o array 

const numeros = [10, 20, 30, 40, 50];


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
// console.table(meses);

// const arreglo = ["hola", 10, true, "si", null, {nombre: "Daniel", trabajo: "programador"}, [1,2,3,4,5]];

// console.table(arreglo);

// //acceder a los valores de un arreglo
// console.log(numeros[4]);

// //conocer la extension de un arreglo
// console.log(meses.length);

// numeros.forEach(function(numeros){
//     console.log(numeros);
// });

// //agregar elementos a un arreglo
numeros[5] = 60;

 
numeros.push(70); //agreagar elemento al final del arreglo
numeros.unshift(-10,-20,-30); //agregar elementos al inicio del arreglo

meses.pop(); //eliminar el ultimo elemento del arreglo
meses.shift(); //eliminar el primer elemento del arreglo

// meses.splice(2, 1); //eliminar un elemento en una posicion especifica
//splice (comienzo, cantidad de elementos a eliminar)
console.table(meses);

//rest operator o spread operator
const nuevoArreglo = ['Agosto', ...meses];
console.table(nuevoArreglo);

console.table(numeros);

