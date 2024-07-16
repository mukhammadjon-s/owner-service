import { Module } from '@nestjs/common';
import { CompanyService } from '../service/company.service';
import { CompanyController } from '../controller/company.controller';
import { PrismaService } from '../service/prisma.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { GRPC_PRODUCT_PACKAGE, productMsUrl } from '../utils/constants';
import { join } from "path";

@Module({
  imports:[
    ClientsModule.register([
      {
        name: GRPC_PRODUCT_PACKAGE,
        transport: Transport.GRPC,
        options: {
          package: 'product',
          protoPath: join(
            process.cwd(),
            'node_modules/@padishah/toolbox/grpc/product.proto',
          ),
          url: productMsUrl,
          loader: {
            objects: true,
          },
        },
      },
    ]),
  ],
  controllers: [CompanyController],
  providers: [CompanyService, PrismaService],
})
export class TimeTableModule {}
