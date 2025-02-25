
//declaracion de funcion 
sumar();
function sumar() {
    console.log(10 + 10);
}



//expresion de la funcion 

let sumar2 = function(){
    console.log( 3 + 3 );
}
sumar2();

//IIFE se mandan a llamar ellas mismas, no permiten llamar variables de otro archivo
(function() {
    console.log("Esto es una funcion")
})();

