/**
 * ! Patrón Command
 * Este patrón encapsula una solicitud como un objeto,
 * lo que le permite parametrizar otros objetos con diferentes solicitudes,
 * encolar solicitudes, o registrar solicitudes, y soporta operaciones que pueden deshacerse.
 *
 * Me gustó mucho la explicación de Refactoring Guru
 * https://refactoring.guru/es/design-patterns/command
 *
 * * Es útil cuando se necesita desacoplar el objeto que invoca
 * * la operación del objeto que sabe cómo realizarla.
 *
 *
 */

import { COLORS } from "../helpers/colors.ts";

interface Command {
    execute(): void;
}

class Light {
    turnOn(): void{
        console.log(`%cLa luz está encendida`, COLORS.blue);
    }

    turnOff(): void{
        console.log(`%cLa luz está apagada`, COLORS.red);
    }
}

class Fan {
    on(): void{
        console.log(`%cEl ventilador está encendido`, COLORS.green);
    }

    off(): void{
        console.log(`%cEl ventilador está apagado`, COLORS.violet);
    }
}


//Comandos

class LightOnCommand implements Command{

    constructor( private light:Light ){}

  execute(): void {
    this.light.turnOn();
  }
}

class LightOffCommand implements Command{

    constructor( private light:Light ){}

  execute(): void {
    this.light.turnOff();
  }
}

class FanOffCommand implements Command{

    constructor( private fan:Fan ){}

  execute(): void {
    this.fan.off();
  }
}

class FanOnCommand implements Command{

    constructor( private fan:Fan ){}

  execute(): void {
    this.fan.on();
  }
}

//Crearemos un control universal que ejecute cada uno de estos comandos.
class RemoteControl {

    private commands: Record<string, Command> = {};

    setCommand( button: string, command: Command ){
        this.commands[button] = command;
    }

    pressButton( button:string ): void{
        if( this.commands[button]){
            this.commands[button].execute();
            return;
        }

        console.log(`%cNO SE HA ASIGNADO UN COMANDO A ESE BOTON`, COLORS.orange);
    }
}


//Implementacion: crearemos un control remoto que nos permita manipulas la domotica de una casa, como ejemplo.
function main(){

    const remoteControl = new RemoteControl();
    const light = new Light();
    const fan = new Fan();

    //Crear los comandos para los dispositivos
    const lightOnCommand = new LightOnCommand(light);
    const lightOffCommand = new LightOffCommand(light);

    const fanOnCommand = new FanOnCommand(fan);
    const fanOffCommand = new FanOffCommand(fan);

    //Asignar las acciones al control remoto

    remoteControl.setCommand('1', lightOnCommand);
    remoteControl.setCommand('2', lightOffCommand);
    remoteControl.setCommand('3', fanOnCommand);
    remoteControl.setCommand('4', fanOffCommand);

    let continueProgram = true;

    do {
        console.clear();
        const pressedButton = prompt(
            `Presiona un botón del control:
            1. Encender luz
            2. Apagar luz
            3. Encender ventilador
            4. Apagar ventilador

            boton:
        
            `)??'';
        
        remoteControl.pressButton(pressedButton);

        const continueProgramResponse = prompt(
            `\n ¿Deseas continuar utilizando el control? (y/n):`
        )?.toLowerCase();

        continueProgram = continueProgramResponse === 'n' ? false : true;
    } while (continueProgram);

}

main();