let total = 0;

function agregarCarrito(precio){
    return total + precio;
}

total = agregarCarrito(300);
total = agregarCarrito(400);
total = agregarCarrito(200);

console.log(total);


function calcularImpuesto(total){
    return 1.15 * total;
}

const totalAPagar = calcularImpuesto(total);

console.log(`El total a pagar con impuestos es de $${totalAPagar}`)