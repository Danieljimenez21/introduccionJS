function sumar(n1, n2){
    return n1 + n2;
}

const resultado = sumar(2, 3);

console.log(resultado);


let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(total){
    return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(300);
total = agregarCarrito(25);

console.log(total);

const totalAPagar = calcularImpuesto(total);

console.log(totalAPagar);

console.log(`El total a pagar es de $ ${totalAPagar}`)