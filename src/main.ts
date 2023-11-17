import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import * as compression from 'compression';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  app.use(compression());
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: false,
      transform: true,
      whitelist: true
    })
  );

  const configService = app.get(ConfigService);
  const appPort = configService.get<string>('port');
  const appEnv = configService.get<string>('appEnv');
  
  if(appEnv !== 'prod'){
    const swaggerOptions = new DocumentBuilder()
    .setTitle('TMDB Service Documentation')
    .setDescription('TMDB Service')
    .setVersion('0.1')
    .build();

    const document =SwaggerModule.createDocument(app, swaggerOptions);
    SwaggerModule.setup('swagger', app, document);

  }

  await app.listen(appPort, '0.0.0.0');

}
bootstrap();
