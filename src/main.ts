import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Privality')
    .setDescription(
      'Trabalho de Conclusão de Curso apresentado ao Núcleo de Pós-grduação do Instituto Federal de Educação, Ciência e Tecnologia do Sudeste de Minas Gerais, Campus Manhuaçu, como parte dos requisitos para obtenção do título de Especialista em Desenvolvimento de Sistemas Web.',
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();
