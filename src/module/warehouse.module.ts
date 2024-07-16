import { Module } from '@nestjs/common';
import { WarehouseController } from '../controller/warehouse.controller';
import { WarehouseService } from '../service/warehouse.service';
import { PrismaService } from '../service/prisma.service';

@Module({
  controllers: [WarehouseController],
  providers: [WarehouseService, PrismaService],
})
export class WarehouseModule {}
