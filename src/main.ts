import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Hard fix
// import * as util from 'node:util';

// Buffer.prototype.toJSON = function () {
//   return util.inspect(this); // '<Buffer 00 00 00 00 00 00 ... 5 more bytes>' as string
// };

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
