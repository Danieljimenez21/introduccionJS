const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = false;
    if(auth){
        resolve(`usuario autenticado`); //EL PROMISE SE COMPLE
    } else {
        reject("No se pudo iniciar sesion"); //EL PROMISE NO SE CUMPLE
    }
}) 

usuarioAutenticado
    .then( resultado => console.log(resultado))
    .catch( error => console.log(error))
// console.log(usuarioAutenticado)

//En los promises existen 3 valores posibles
//pending: esta en espera no se cumplio pero no se rechazo 
//fullfied: se cumplio el promise 
//reject: se ha rechazado y no se puede cumplir 
