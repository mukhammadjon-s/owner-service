import { Injectable } from '@nestjs/common';
import companyCreate from '../validation/company.validation';
import { RpcException } from '@nestjs/microservices';
import grpc from 'grpc';
import addressCreate from '../validation/address.validation';
import { PrismaService } from './prisma.service';

interface QueryInterface {
  companyId?: number;
}

const getAddress = (data: any) => {
  return data?.address || {};
};

@Injectable()
export class TimeTableService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(query: QueryInterface): Promise<any> {
    const getQuery: any = {
      companyId: query?.companyId,
    };
    !getQuery.companyId && delete getQuery.companyId;
    const data = await this.prisma.timeTable
      .findMany({
        where: getQuery,
      })
      .catch((error) => {
        // return { address: {}, company: {} };
        throw new RpcException({
          code: grpc.status.NOT_FOUND,
          message: error.message,
        });
      });
    return { company: data, address: getAddress(data) };
  }

  async getOne(id?: any): Promise<any> {
    const data = await this.prisma.timeTable
      .findUnique({
        where: {
          id: +id,
        },
      })
      .catch((error) => {
        throw new RpcException({
          code: grpc.status.NOT_FOUND,
          message: error.message,
        });
      });
    return { company: data };
  }

  async update(id: any, body: any): Promise<any> {
    const data = await this.prisma.timeTable
      .update({
        where: {
          id: +id,
        },
        data: body,
      })
      .catch((error) => {
        throw new RpcException({
          code: grpc.status.NOT_FOUND,
          message: error.message,
        });
      });
    return { timeTable: data };
  }

  async delete(id: number): Promise<any> {
    const data = await this.prisma.company
      .deleteMany({ where: { id: +id } })
      .catch((error) => {
        throw new RpcException({
          code: grpc.status.NOT_FOUND,
          message: error.message,
        });
      });
    if (data.count === 0) {
      throw new RpcException({
        code: grpc.status.NOT_FOUND,
        message: 'not found',
      });
    }
    return { result: 'ok' };
  }

  async addNew(body?: any): Promise<any> {
    const { error: errorAddress, value: valueAddress } = addressCreate.validate(
      body.address,
    );
    const { error, value } = companyCreate.validate(body.company);
    let data: any;
    let result: any;
    if (!error && !errorAddress) {
      data = await this.prisma.address
        .create({
          data: valueAddress,
        })
        .catch((error) => {
          throw new RpcException({
            code: grpc.status.NOT_FOUND,
            message: error.message,
          });
        });
      result = await this.prisma.company
        .create({
          data: {
            ...value,
            addressId: data.id,
          },
        })
        .catch((error) => {
          throw new RpcException({
            code: grpc.status.NOT_FOUND,
            message: error.message,
          });
        });
    } else {
      throw new RpcException({
        code: grpc.status.NOT_FOUND,
        message: errorAddress?.message || error.message,
      });
    }
    return { company: result, address: data };
  }
}
