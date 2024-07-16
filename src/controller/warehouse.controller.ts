/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { WarehouseService } from '../service/warehouse.service';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class WarehouseController {
  constructor(private readonly warehouseService: WarehouseService) {}

  @GrpcMethod('WarehouseService', 'GetAll')
  async getAll(data:any): Promise<any> {
    return this.warehouseService.getAll(data?.query);
  }

  @GrpcMethod('WarehouseService', 'AddNew')
  async addNew(data: any): Promise<any> {
    return this.warehouseService.addNew(data.warehouse);
  }

  @GrpcMethod('WarehouseService', 'GetOne')
  async getOne(data:any): Promise<any> {
    return this.warehouseService.getOne(data.id);
  }

  @GrpcMethod('WarehouseService', 'Update')
  async update(data:any): Promise<any> {
    return this.warehouseService.update(data.id,data.warehouse);
  }

  @GrpcMethod('WarehouseService', 'UpdateStatusOnly')
  async updateStatus(data:any): Promise<any> {
    return this.warehouseService.updateStatus(data.id, data.status);
  }

  @GrpcMethod('WarehouseService', 'Inactive')
  async inactiveWarehouses(data: any): Promise<any> {
    return this.warehouseService.inactiveWarehouses(data.warehouse);
  }

  @GrpcMethod('WarehouseService', 'Delete')
  async delete(data: any): Promise<any> {
    return this.warehouseService.delete(data.id);
  }

  @GrpcMethod('WarehouseService', 'GetOneByName')
  async getOneByName(data: any): Promise<any> {
    return this.warehouseService.getOneByName(data.name);
  }

  @GrpcMethod('WarehouseService', 'GetWarehouseByCompanyId')
  async getWarehouseByCompanyId(data): Promise<any> {
    return this.warehouseService.getWarehouseByCompanyId(data.companyId);
  }
}
