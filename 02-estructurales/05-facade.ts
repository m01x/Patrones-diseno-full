/**
 * ! Patrón Facade
 * Este patrón proporciona una interfaz unificada para un conjunto de interfaces
 * en un subsistema.
 *
 * Facade define una interfaz de nivel más alto que hace que el subsistema
 * sea más fácil de usar.
 *
 * * Es útil cuando un subsistema es complejo o difícil de entender para
 * * proporcionar una interfaz simplificada para el cliente.
 *
 * https://refactoring.guru/es/design-patterns/facade
 */

class Projector {

    turnOn(){
        console.log(`Proyector encendido`;)
    }
    turnOff(){
        console.log(`Proyector apagado`);
    }
}

class SoundSystem {
    on(){
        console.log(`Sistema de sonido encendido`);
    }

    off(){
        console.log(`Sistema de sonido apagado`);
    }
}

class VideoPlayer {
    on(){
        console.log(`Video player encendido`);
    }

    play(movie: string){
        console.log(`Reproduciendo %c`);
    }

    stop(){
        console.log(`Pelicula detenida`);
    }

    off(){
        console.log(`Video player apagado`);
    }

}

class PopcornMaker {
    poppingPopcorn(){
        console.log(`Haciendo palomitas`);
    }

    turningOffPoppingPopcorn(){
        //TODO implementar metodo... clase a medias!
    }
}