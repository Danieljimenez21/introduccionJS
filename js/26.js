//this

//Arroy funcion devulve undefined
const reservacion = {
    nombre: "Daniel",
    apellido: "Jimenez",
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservo y su total a pagar es: ${this.total}`);
    }
}

reservacion.informacion();