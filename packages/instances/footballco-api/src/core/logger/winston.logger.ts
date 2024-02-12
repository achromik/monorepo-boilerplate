import { Injectable, LoggerService } from '@nestjs/common';
import * as winston from 'winston';

@Injectable()
export class WinstonLogger implements LoggerService {
  private readonly winston;

  constructor(level: string) {
    this.winston = winston.createLogger({
      level,
      format: winston.format.json(),
      transports: [new winston.transports.Console()],
    });
  }

  debug(message: any, ...optionalParams: any[]): any {
    this.winston.log({
      level: 'debug',
      message,
      ...this.filterOptionalParams(optionalParams),
    });
  }

  error(message: any, ...optionalParams: any[]): any {
    this.winston.log({
      level: 'error',
      message,
      ...this.filterOptionalParams(optionalParams),
    });
  }

  log(message: any, ...optionalParams: any[]): any {
    this.winston.log({
      level: 'info',
      message,
      ...this.filterOptionalParams(optionalParams),
    });
  }

  warn(message: any, ...optionalParams: any[]): any {
    this.winston.log({
      level: 'warn',
      message,
      ...this.filterOptionalParams(optionalParams),
    });
  }

  private filterOptionalParams(optionalParams: any[]): Record<string, any> {
    const copy = [...optionalParams];

    return {
      context:
        typeof copy[copy.length - 1] === 'string' ? copy.pop() : undefined,
      data: copy.shift(),
      optionalParams: copy,
    };
  }
}
