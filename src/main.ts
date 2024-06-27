import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
// import sequelize from './database';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });
  app.setGlobalPrefix('api/v1');

  // await sequelize.authenticate();

  await app.listen(3000);
}
bootstrap();
