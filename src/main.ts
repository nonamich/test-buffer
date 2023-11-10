import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Hard fix
// Buffer.prototype.toJSON = () => '';

async function bootstrap() {
  const start = performance.now();

  const app = await NestFactory.create(AppModule);

  await app.listen(3000);

  console.log(
    'NestFactory.create: ',
    ((performance.now() - start) / 1000).toFixed(),
    'seconds',
  );
}
bootstrap();
