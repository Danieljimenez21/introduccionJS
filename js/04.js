//string o cadenas de texto
const producto = "Monitor de 20\" pulgadas"; //escape de comillas
const producto2 = String('Monitor de 30 pulgadas');
const producto3 = new String('Monitor de 50 pulgadas');

console.log(producto);
console.log(producto2);
console.log(producto3);

const product = 'aprendiendo java con el curso de desarrollo web completo';
const product2 = 'Monitor HD';

console.log(product.length);
console.log(product2.length);

//saber si un apalabra existe en una cadena de texto 

const tweet = "Aprendiendo javascript con el curso de desarrollo web completo";

//indextOF saber en que parte del texto se encuentra 
console.log(tweet.indexOf('javascript'));
console.log(producto2.indexOf('javascript'));

//include retorna true o false 
console.log(tweet.includes('javascript'));
console.log(producto2.includes('javascript'));