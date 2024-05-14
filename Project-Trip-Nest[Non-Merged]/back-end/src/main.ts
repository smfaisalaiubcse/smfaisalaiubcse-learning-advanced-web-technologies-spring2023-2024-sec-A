import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for specific domains
  app.enableCors({
    origin: ['http://localhost:3001'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true, // enable set cookie and allow credentials
  });
  
  await app.listen(3000);
}
bootstrap();
