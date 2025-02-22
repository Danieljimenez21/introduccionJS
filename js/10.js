//objetos 
const nombreProducto = "Monitor de 20 pulgadas";
const precio = 300;
const disponible = true;

const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

//console.log(producto.precio);//accdemos a las propiedades del objeto

//agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg";
console.log(producto);

//eliminar propiedades del objeto
delete producto.disponible;
console.log(producto);