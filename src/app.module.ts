import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { BIG_PACKAGE_NAME, protobufPackage } from './_proto/big.pb';
import { resolve } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: protobufPackage,
        transport: Transport.GRPC,
        options: {
          url: 'localhost:50057',
          package: [BIG_PACKAGE_NAME],
          protoPath: [resolve(__dirname, '_proto/big.proto')],
          loader: {
            keepCase: true,
            longs: String,
            defaults: true,
            oneofs: true,
          },
        },
      },
    ]),
    ClientsModule.register([
      {
        name: protobufPackage,
        transport: Transport.GRPC,
        options: {
          url: 'localhost:50057',
          package: [BIG_PACKAGE_NAME],
          protoPath: [resolve(__dirname, '_proto/big.proto')],
          loader: {
            keepCase: true,
            longs: String,
            defaults: true,
            oneofs: true,
          },
        },
      },
    ]),
    ClientsModule.register([
      {
        name: protobufPackage,
        transport: Transport.GRPC,
        options: {
          url: 'localhost:50057',
          package: [BIG_PACKAGE_NAME],
          protoPath: [resolve(__dirname, '_proto/big.proto')],
          loader: {
            keepCase: true,
            longs: String,
            defaults: true,
            oneofs: true,
          },
        },
      },
    ]),
    ClientsModule.register([
      {
        name: protobufPackage,
        transport: Transport.GRPC,
        options: {
          url: 'localhost:50057',
          package: [BIG_PACKAGE_NAME],
          protoPath: [resolve(__dirname, '_proto/big.proto')],
          loader: {
            keepCase: true,
            longs: String,
            defaults: true,
            oneofs: true,
          },
        },
      },
    ]),
    ClientsModule.register([
      {
        name: protobufPackage,
        transport: Transport.GRPC,
        options: {
          url: 'localhost:50057',
          package: [BIG_PACKAGE_NAME],
          protoPath: [resolve(__dirname, '_proto/big.proto')],
          loader: {
            keepCase: true,
            longs: String,
            defaults: true,
            oneofs: true,
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
