import { Injectable } from '@nestjs/common';
import addressCreate from '../validation/address.validation';
import { RpcException } from '@nestjs/microservices';
import * as grpc from 'grpc';
import { PrismaService } from './prisma.service';

interface QueryInterface {
  page?: number;
  pagesize: number;
}

@Injectable()
export class AddressService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(query: QueryInterface): Promise<any> {
    const data = await this.prisma.address
      .findMany({
        take: query.pagesize,
        skip: query.page * query.pagesize,
      })
      .catch((error) => {
        throw new RpcException({
          code: grpc.status.NOT_FOUND,
          message: error.message,
        });
      });
    const total = await this.prisma.address.count().catch((error) => {
      throw new RpcException({
        code: grpc.status.NOT_FOUND,
        message: error.message,
      });
    });
    return { data, total: total || 0 };
  }

  async getOne(id?: any): Promise<any> {
    const data = await this.prisma.address
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
    return { address: data };
  }

  async update(id: any, body: any): Promise<any> {
    const data = await this.prisma.address
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
    return { address: data };
  }

  async delete(id: number): Promise<any> {
    console.log(id);
    const data = await this.prisma.address
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
    const { error, value } = addressCreate.validate(body);
    let data: any;
    if (!error) {
      data = await this.prisma.address
        .create({
          data: {
            // address: value.address,
            latitude: value.latitude,
            longitude: value.longitude,
            name: value.name,
            street: value.street,
            city: value.city,
            home: value.home,
            apartment: value.apartment,
            comment: value.comment,
            domofon: value.domofon,
            address: value.address,
            regionId: value.regionId,
            districtId: value.districtId,
            postalCode: value.postalCode,
          },
          include: {
            company: true,
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
        message: error.message,
        error,
      });
    }
    return { address: data };
  }
}
