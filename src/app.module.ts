import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { CompanyModule } from './module/company.module';
import { AddressModule } from './module/address.module';
import { WarehouseModule } from './module/warehouse.module';
import { TimeTableModule } from './module/timetable.module';

@Module({
  imports: [
    CompanyModule,
    AddressModule,
    WarehouseModule,
    TimeTableModule,
    RouterModule.register([
      {
        path: 'company',
        module: CompanyModule,
      },
      {
        path: 'address',
        module: AddressModule,
      },
      {
        path: 'warehouse',
        module: WarehouseModule,
      },
      {
        path: 'timetable',
        module: TimeTableModule,
      },
    ]),
  ],
})
export class AppModule {}
