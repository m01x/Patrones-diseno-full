/**
 * ! Patron Chain of Responsibility
 * Es un patrón de diseño de comportamiento que te permite pasar solicitudes
 * a lo largo de una cadena de manejadores.
 *
 * * Es útil cuando se necesita procesar datos de diferentes maneras, pero no
 * * se sabe de antemano qué tipo de procesamiento se necesita o en qué orden
 * * pero se sabe que se necesita procesar en una secuencia.
 *
 * https://refactoring.guru/es/design-patterns/chain-of-responsibility
 */

interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: string): void;
}

abstract class BaseHandler implements Handler {


    private nextHandler?: Handler;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }
    handle(request: string): void {
        if (this.nextHandler) {
            this.nextHandler.handle(request);
        }
    }
}


//Eslabones, ver refactoring gurú!
//Soporte básico.

class BasicSupport extends BaseHandler {
    override handle(request: string): void {
        if (request === 'basico') {
            console.log('Soporte basico: resolviendo problema de 1er nivel.');
            return;
        }
        console.log(' Soporte básico, llamando al soporte avanzado');
        super.handle(request);
    }
}


class AdvancedSupport extends BaseHandler {
    override handle(request: string): void {
        if (request === 'avanzado') {
            console.log('Soporte avanzado: resolviendo problema de 2do nivel.');
            return;
        }
        console.log(' Soporte avanzado, llamando al soporte experto');
        super.handle(request);
    }
}

class ExpertSupport extends BaseHandler {
    override handle(request: string): void {
        if (request === 'experto') {
            console.log('Soporte experto: resolviendo problema de 3er nivel.');
            return;
        }
        console.log(' Soporte experto, no hay nada que hacer... bye bye');
        super.handle(request);
    }
}

function main(){

    const basicSupport = new BasicSupport();
    const advancedSupport = new AdvancedSupport();
    const expertSupport = new ExpertSupport();

    //chaining
    basicSupport.setNext( advancedSupport).setNext(expertSupport);

    basicSupport.handle('avanzado');

}

main();