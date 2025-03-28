import { Logger } from 'jsr:@deno-library/logger';

// TODO: Implementar el LoggerAdapter

interface ILoggerAdapter {
    file: string;
    writeLog: (msg: string) => void;
    writeWarning: (msg: string) => void;
    writeError: (msg: string) => void;
}

export class DenoLoggerAdapter implements ILoggerAdapter {
    
    public file: string;
    private logger = new Logger();

    constructor(file:string){
        this.file = file;
    }

    writeLog(msg: string) {
        this.logger.info(`[${this.file} Log] %c${msg}`);
    };
    writeWarning(msg: string) {
        this.logger.warn(`[${this.file} Warning] %c${msg}`);
    };
    writeError(msg: string) {
        this.logger.error(`[${this.file} Error] %c${msg}`);
    };


}

// const logger = new Logger();

// logger.info('');
// logger.warn('');
// logger.error('');

