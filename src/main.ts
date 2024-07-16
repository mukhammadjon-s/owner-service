import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import path from 'path';
import { PrismaService } from './service/prisma.service';
async function bootstrap() {
  const reqPath = path.join(__dirname, '../../');
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: `${process.env.HOST}:${process.env.PORT}`,
      protoPath: path.join(reqPath, 'proto/company.proto'),
      package: 'company',
    },
  });
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  await app.listen();
  console.log(`Running on ${process.env.HOST}:${process.env.PORT}`);
}
bootstrap();
