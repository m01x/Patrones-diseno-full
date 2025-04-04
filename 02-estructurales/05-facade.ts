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

import { COLORS } from "../helpers/colors.ts";

class Projector {

    turnOn(){
        console.log(`Proyector encendido`);
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
        console.log(`Reproduciendo %c${movie}`);
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
        console.log(`Apagando palomitas`)
    }
}

interface HomeTheaterFacadeOptions{
    projector: Projector;
    soundSystem: SoundSystem;
    videoPlayer: VideoPlayer;
    popcornMaker: PopcornMaker;
}

class HomeTheaterFacade {
    private projector: Projector;
    private soundSystem: SoundSystem;
    private videoPlayer: VideoPlayer;
    private popcornMaker: PopcornMaker;

    constructor({
        popcornMaker,
        projector,
        soundSystem,
        videoPlayer,

    }:HomeTheaterFacadeOptions ){
        this.projector = projector;
        this.soundSystem = soundSystem;
        this.videoPlayer = videoPlayer;
        this.popcornMaker = popcornMaker;
    }

    watchMovie( movie: string ) : void {
        console.log(`%cPreparando para ver una pelicula ▶️`, COLORS.blue);
        this.projector.turnOn();
        this.soundSystem.on();
        this.popcornMaker.poppingPopcorn();
        this.videoPlayer.on();
        this.videoPlayer.play(movie);

        console.log('%cDisfrute la pelicula!',COLORS.green);
    }

    endWatchMovie() : void {
        console.log(`%cDeteniendo la pelicula...⏹️`, COLORS.red);
        this.projector.turnOff();
        this.soundSystem.off();
        this.popcornMaker.turningOffPoppingPopcorn();
        this.videoPlayer.stop();
        this.videoPlayer.off();

        console.log('%cSistema Apagado',COLORS.green);
    }
}

function main(){

    const projector = new Projector();
    const soundSystem = new SoundSystem();
    const popcornMaker = new PopcornMaker();
    const videoPlayer = new VideoPlayer();

    const funcion1 = new HomeTheaterFacade({popcornMaker,projector,soundSystem,videoPlayer});

    funcion1.watchMovie('Corazon Valiente');

    console.log('\n%cLa pelicula ha concluido🍿!\n', COLORS.orange);

    funcion1.endWatchMovie();
}

main();