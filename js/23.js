const metodoPago = "efectivo";

switch(metodoPago) {
    case "tarjeta": 
        console.log("pagaste con tarjeta");
        break;
    case "cheque": 
        console.log("Revisaremos los fondos primero");
        break;
    case "efectivo": 
        console.log("pagaste con efectivo");
        break;
    default:
        console.log("aun no has pagado");
        break;
}
