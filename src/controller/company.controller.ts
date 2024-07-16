/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { CompanyService } from '../service/company.service';
import { GrpcMethod } from '@nestjs/microservices';
import { CompanyAddNewRequest } from 'build/company';
import { CatchExceptions } from '../utils/error-decorator';
// import { Metadata } from '@grpc/grpc-js';

@Controller()
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @GrpcMethod('CompanyService', 'GetAll')
  @CatchExceptions()
  async getAll(data: any): Promise<any> {
    return this.companyService.getAll(data?.query);
  }

  @GrpcMethod('CompanyService', 'AddNew')
  @CatchExceptions()
  async addNew(data: CompanyAddNewRequest): Promise<any> {
    return this.companyService.addNew(data);
  }

  @GrpcMethod('CompanyService','Update')
  @CatchExceptions()
  async update(data: any): Promise<any> {
    return this.companyService.update(data.id, data.company);
  }

  @GrpcMethod('CompanyService', 'GetOne')
  @CatchExceptions()
  async getOne(data: any): Promise<any> {
    return this.companyService.getOne(data.id);
  }

  @GrpcMethod('CompanyService', 'GetOneByName')
  @CatchExceptions()
  async getOneByName(data: any): Promise<any> {
    return this.companyService.getOneByName(data.legalName);
  }

  @GrpcMethod('CompanyService', 'Delete')
  @CatchExceptions()
  async delete(data: any): Promise<any> {
    return this.companyService.delete(data.id);
  }
  
  @GrpcMethod('CompanyService', 'GetCompaniesByIds')
  @CatchExceptions()
  async getCompaniesByIds(data: {companyIds: number[]}): Promise<any> {
    return this.companyService.getCompaniesByIds(data.companyIds);
  }

  @GrpcMethod('CompanyService', 'RegisterCompanyPaymentData')
  @CatchExceptions()
  async registerCompanyPaymentData(data: any): Promise<any> {
    return this.companyService.registerCompanyPaymentData(data);
  }

  @GrpcMethod('CompanyService', 'GetCompanyInfo')
  @CatchExceptions()
  async getCompanyInfo(data: any): Promise<any> {
    return this.companyService.getCompanyInfo(data.companyId);
  }
}
