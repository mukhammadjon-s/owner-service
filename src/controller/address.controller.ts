/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { ResponseDto } from '../dto/ResponseDto';
import { AddressService } from '../service/address.service';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @GrpcMethod('AddressService', 'GetAll')
  async getAll(data: any): Promise<any> {
    return this.addressService.getAll(data?.query);
  }

  @GrpcMethod('AddressService', 'AddNew')
  async addNew(data: any): Promise<any> {
    return this.addressService.addNew(data.address);
  }

  @GrpcMethod('AddressService', 'GetOne')
  async getOne(data: any): Promise<any> {
    return this.addressService.getOne(data.id);
  }

  @GrpcMethod('AddressService', 'Update')
  async update(data: any): Promise<any> {
    return this.addressService.update(data.id, data.address);
  }

  @GrpcMethod('AddressService', 'Delete')
  async delete(data: any): Promise<any> {
    return this.addressService.delete(data.id);
  }
}
