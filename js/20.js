
//metodos de propiedad
const reproductor = {
    reproducir : function(x){
        console.log(`reproduciendo cancion con el ID: ${x}`)
    },
    pausar : function(){
        console.log("pausando...")
    },
    crearPlaylist : function(nombre){
        console.log(`Creando playlist ${nombre}`)
    },
    reproducirPlaylist : function(nombre){
        console.log(`Reproduciendo Playlist ${nombre}`)
    }

}

// console.log(reproductor);

reproductor.borrarCancion = function(x){
    console.log(`Borrando la concion con el ID: ${x}`)
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(54);
reproductor.crearPlaylist("BabyMetal");
reproductor.reproducirPlaylist("BabyMetal");