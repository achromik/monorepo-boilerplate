import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { AppModule } from './app.module';
import { WinstonLogger } from './core/logger/winston.logger';

async function bootstrap() {
  const logLevel = process.env.LOG_LEVEL;

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    logLevel ? { logger: new WinstonLogger(logLevel) } : undefined,
  );

  const configService: ConfigService = app.get<ConfigService>(ConfigService);
  const appPort = configService.get<number>('APP_PORT', 3000);

  await app.listen(appPort, '0.0.0.0');
}
bootstrap();
