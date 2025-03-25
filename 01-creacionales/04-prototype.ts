/**
 * ! Patrón Prototype:

 * Es un patrón de diseño creacional que nos permite copiar objetos existentes sin hacer
 * que el código dependa de sus clases.
 * 
 * * Es útil cuando queremos duplicar el contenido, 
 * * el título y el autor de un documento, por ejemplo o cualquier objeto complejo.
 * 
 * https://refactoring.guru/es/design-patterns/prototype
 */

class Document {

    public title: string;
    private content: string;
    public author: string;

    constructor( title: string, content:string, author: string){
        this.title = title;
        this.content = content;
        this.author = author;
    }

    //METODO IMPORTANTE PARA CREAR LOS CLONES
    clone():Document {
        return new Document(this.title, this.content, this.author);
    }

    displayInfo(){
        console.log(`
            Title: ${ this.title },
            Content: ${ this.content },
            Author: ${ this.author }
        `);
    }
}

function main(){
    const document1 = new Document('Cotización', '500 dolares', 'Flavio');

    console.log({ document1 });
    document1.displayInfo();

    //const document2 = {...document1}; //Haciendo spread copio los valores, pero document2 NO ES de tipo Document, cmo lo es document1

    const document2 = document1.clone(); //Utilizando el metodo que contruimos, mantenemos el tipo, el ADN y si tiene objetos anidados, todo se respeta y se mantienen los accesos que la clase posee. Patron prototype.
    document2.title = 'Nueva cotizacion 2';

    console.log({ document2 });
    document1.displayInfo();

    
}

main();


