/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

import { COLORS } from "../helpers/colors.ts";

class Computer {
    public cpu: string = 'cpu - not defined';
    public ram: string = 'ram - not defined';
    public storage: string = 'storage - not defined';
    public gpu?: string;

    displayConfiguration(){
        console.log(`Configuración de la computadora
            CPU: ${ this.cpu },
            RAM: ${ this.ram },
            Almacenamiento: ${ this.storage },
            GPU: ${ this.cpu ?? 'No tiene GPU'},
            `)
    }
}

class ComputerBuilder {
    private computer: Computer;

    constructor(){
        this.computer = new Computer();
    }

    setRam(ram: string):ComputerBuilder{
        this.computer.ram = ram;
        return this;
    }

    setStorage(storage: string):ComputerBuilder{
        this.computer.storage = storage;
        return this;
    }

    setCPU(cpu: string):ComputerBuilder{
        this.computer.cpu = cpu;
        return this;
    }

    setGpu(gpu: string):ComputerBuilder{
        this.computer.gpu = gpu;
        return this;
    }

    build(){
        return this.computer;
    }
}

function main(){

    const computadorMuriel: Computer = new ComputerBuilder()
        .setCPU(' Intel I7-6700')
        .setRam('32 GB')
        .setStorage('512GB SSD')
        .build();

    console.log(`%cComputadora de muriel:`, COLORS.blue);
    computadorMuriel.displayConfiguration();

    const computadorMoix : Computer = new ComputerBuilder()
        .setCPU('Intel i7-13700K')
        .setRam('16 GB Ram')
        .setStorage('512 GB + 1TB SSD M2')
        .setStorage('512')
        .build();

        console.log(`%cComputadora de Flavio:`, COLORS.red);
    computadorMoix.displayConfiguration();
}

main();
