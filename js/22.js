
const puntuaje = 10;

if(puntuaje === 1000) {
    console.log("Si el puntuaje es mil")
} else {
    console.log("El puntuaje no es mil")
}

const efectivo = 1000;
const carrito = 800;

if(efectivo > carrito) {
    console.log("tiene el saldo suficiente para pagar")
} else {
    console.log("No tiene el saldo suficiente para pagar")
}

const rol = "VISITANTE";

if (rol === "ADMINISTRADOR") {
    console.log("Acceso a todo el sistema")
} else if (rol === "EDITOR") {
    console.log("Eres editor, puedes entrar")
} else {
    console.log("Acceso denegado")
} 

