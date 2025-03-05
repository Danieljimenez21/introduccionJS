//clase

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    formatarProducto(){
        return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
    }
    //retornar el precio de un producto 
    precioProducto(){
        return this.precio;
    }
}

const producto2 = new Producto("Monitor curso de 49", 800);
const producto3 = new Producto("Laptop", 200);


// Herencia
class Libro extends Producto {
    constructor(nombre, precio, isbn){
        super(nombre, precio);
        this.isbn = isbn;
    }

    formatarProducto(){
        return `${super.formatarProducto() } y su ISBN ${this.isbn}`;
    }

    precioProducto(){
        super.precioProducto();
        console.log(` Y si hay en existencia`)
    }
}

const libro = new Libro("JavaScript la revolucion", 500, "146516516");

console.log(libro.formatarProducto())
console.log(libro.precioProducto())
console.log(producto2.formatarProducto())
