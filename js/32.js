//async / await

function descargarNuevosClientes() {
    return new Promise ( resolve => {
            console.log("Descargando clientes... espere...");
        setTimeout( () => {
            resolve("Los cientes han sido descargados.. ")
        }, 5000);
        
    });
}

async function app() {
    try {
        const resultado = await descargarNuevosClientes();
        console.log("Este codigo se bloquea");
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

app();

function comprarProducto(productoEnStock) {
    return new Promise((resolve, reject) => {
        console.log("procesando compra...");

        setTimeout( () => {
            if (productoEnStock){
                resolve("Compra realizada con éxito.");
            } else {
                reject("Lo sentimos, el producto esta agotado.")
            }
        }, 2000);
    });
}

//consumir la promesa con .then y .catch()

comprarProducto(false)
    .then( mensaje => console.log(mensaje))
    .catch( error => console.log(error));


//usando async y await

async function realizarCompra() {
    try {
        let mensaje = await comprarProducto(false);
        console.log(mensaje)
    } catch (error) {
        console.log(error)
    }
}

realizarCompra();