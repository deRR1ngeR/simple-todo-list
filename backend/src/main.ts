import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Разрешаем CORS
  app.enableCors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PATCH,DELETE',
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();