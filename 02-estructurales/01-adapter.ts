/**
 * ! Patrón Adapter
 *  Permite que objetos con interfaces incompatibles trabajen juntos, también es muy
 *  util para utilizar librerías de terceros en nuestra aplicación sin depender
 *  directamente de ellas.
 *
 * * Es útil cuando se quiere reutilizar una clase que no tiene la interfaz que
 * * necesitamos o cuando queremos crear una capa de abstracción para una librería
 * * de terceros.
 *
 * https://refactoring.guru/es/design-patterns/adapter
 */

//import { LocalLogger } from "./adapter-files/local-logger.ts"; //hecho por nosotros , como ejemplo
import { DenoLoggerAdapter } from "./adapter-files/logger-adapter.ts"; //logger de Deno.


const logger = new DenoLoggerAdapter('01-adapter.ts');

logger.writeLog('Mensaje de un log normal')
logger.writeWarning('Mensaje de un log de alerta')
logger.writeError('Mensaje de un log critico - error')