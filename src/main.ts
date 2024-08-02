import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from 'dotenv';

config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Simple PSP')
    .setDescription(
      'Simple Payment Service Provider (PSP) using NestJS to apply some concepts',
    )
    .setVersion('1.0')
    .addTag('Payment Service Provider')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {
    jsonDocumentUrl: 'docs/json',
  });

  await app.listen(process.env.APP_PORT);
}
bootstrap();
