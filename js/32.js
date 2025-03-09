//async / await

function descargarNuevosClientes() {
    return new Promise ( resolve => {
            console.log("Descargando clientes... espere...");
        setTimeout( () => {
            resolve("Los cientes han sido descargados.. ")
        }, 5000);
        
    });
}

function descargarUltmosPedidos() {
    return new Promise ( resolve => {
            console.log("Descargando pedidos... espere...");
        setTimeout( () => {
            resolve("Los pedidos han sido descargados.. ")
        }, 3000);
        
    });
}

async function app() {
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltmosPedidos();
        // console.log(clientes);
        // console.log(pedidos);
        const resultado = await Promise.all([ descargarNuevosClientes(), descargarUltmosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();

