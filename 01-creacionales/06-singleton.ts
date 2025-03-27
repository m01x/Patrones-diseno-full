/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */

import { COLORS } from "../helpers/colors.ts";


class DragonBalls {

    private static instance: DragonBalls;
    private ballsCollected: number;

    /**
     * Constructor privado, porque solo se debe llamar desde dentro de la clase.
     * Entonces como hacemos una instancia?? Se consulta si ya existe UNA instancia
     * sino existe, la crea.
     */

    private constructor(){
        this.ballsCollected = 0;
    }

    public static getInstance(): DragonBalls {
        if( !DragonBalls.instance ){
            DragonBalls.instance = new DragonBalls();
            console.log('%cLas pelotas del dragón han sido creadas.', COLORS.green);
        }
        return DragonBalls.instance;
    }

    collectBall():void {
        if( this.ballsCollected < 7){
            this.ballsCollected++;
            console.log(`Pelota recolectada. Total de pelotas: ${this.ballsCollected}`);
            return;
        }

        console.log(`Ya se han recolectado las 7 esferas del dragon! Invoca a shenlong 🐲`);
    }

    summonShenLong(){
        if (this.ballsCollected === 7){
            console.log(`\nShenlong ha sido invocado, pide tu deseo!`);
            this.ballsCollected = 0;
            return;
        }
        console.log(`\nOh.. todavia no. Aun faltan ${7 - this.ballsCollected } pelotas.`)
    }

}

function main(){

    const gokuDragonBalls = DragonBalls.getInstance();

    //usage..
    gokuDragonBalls.collectBall();
    gokuDragonBalls.collectBall();
    gokuDragonBalls.collectBall();
    gokuDragonBalls.collectBall();

    gokuDragonBalls.summonShenLong();

    const vegetaDragonBalls = DragonBalls.getInstance();
    vegetaDragonBalls.collectBall();
    vegetaDragonBalls.collectBall();
    vegetaDragonBalls.collectBall();

    gokuDragonBalls.summonShenLong();

    vegetaDragonBalls.summonShenLong();
}

main();