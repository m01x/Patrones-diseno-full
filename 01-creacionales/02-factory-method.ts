/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

import { COLORS } from "../helpers/colors.ts";

interface Hamburger {
    prepare(): void;

}


class ChickenHamburger implements Hamburger{
  prepare(): void {
    console.log('Preparando hamburguesa de %cPollo', COLORS.orange);
  }
    
}
class BeefHamburger implements Hamburger{
  prepare(): void {
    console.log('Preparando hamburguesa de %cRes', COLORS.brown);
  }
    
}

class BeanHamburger implements Hamburger{
    prepare(): void {
      console.log('Preparando hamburguesa de %cFriijol', COLORS.red);
    }
      
  }

abstract class Restaurant{

    protected abstract createHamburger(): Hamburger;

    orderHamburger():void{
        const hamburger = this.createHamburger();
        hamburger.prepare();
    }
}

class ChickenRestaurant extends Restaurant{

    override createHamburger(): Hamburger {
      return new ChickenHamburger();
    }
}

class BeefRestaurant extends Restaurant{

    override createHamburger(): Hamburger {
      return new BeefHamburger();
    }
}

class BeanRestaurant extends Restaurant{

    override createHamburger(): Hamburger {
      return new BeanHamburger();
    }
}

/**
 * 
 * * Implementacion
 * 
 */

function main(){

    let restaurant: Restaurant;

    const burgerType = prompt ( 'Seleccione tipo de hamburguesa ( chicken | beef | bean )' );
    switch(burgerType){

        case 'chicken':
            restaurant = new ChickenRestaurant();
            break;

        case 'beef':
            restaurant = new BeefRestaurant();
            break;
        
        case 'bean':
            restaurant = new BeanRestaurant();
            break;
        
        default:
            throw new Error('Opción no válida!');
    }

    restaurant.orderHamburger();

}

main();
