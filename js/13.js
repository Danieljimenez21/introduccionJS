
const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}



const medidas = {
    peso: "1kg",
    medida:"30cm"
}

const nuevoPoducto = {
    ...producto,
    ...medidas
}

console.log(nuevoPoducto);