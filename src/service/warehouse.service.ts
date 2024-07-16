import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { WarehouseStatus } from '@prisma/client';
import grpc from 'grpc';
import warehouseCreate from '../validation/warehouse.validation';
import { PrismaService } from './prisma.service';

@Injectable()
export class WarehouseService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(query?: any): Promise<any> {
    const getQuery: any = {
      status: query?.status,
      companyId: +query?.companyId,
    };
    !getQuery.status && delete getQuery.status;
    !getQuery.companyId && delete getQuery.companyId;
    const data = await this.prisma.warehouse
      .findMany({
        where: getQuery,
        take: query.pagesize,
        skip: query.page * query.pagesize,
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
    const total = await this.prisma.warehouse
      .count({
        where: getQuery,
      })
      .catch((error) => {
        throw new RpcException({
          code: grpc.status.NOT_FOUND,
          message: error.message,
        });
      });
    return { data, total: total || 0 };
  }

  async getOne(id?: any): Promise<any> {
    const data = await this.prisma.warehouse
      .findUnique({
        where: {
          id: +id,
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
    return { data };
  }

  async update(id: any, body: any): Promise<any> {
    const company = await this.prisma.company.findFirst({
      where: {
        id: body.companyId,
      },
    });

    if (body.companyId && !company) {
      return {
        errors: ['Invalid Company Id'],
      };
    }

    const data = await this.prisma.warehouse
      .update({
        where: {
          id: +id,
        },
        data: body,
        include: {
          company: true,
        },
      })
      .catch((error) => {
        console.log(error);
        throw new RpcException({
          code: grpc.status.NOT_FOUND,
          message: error.message,
        });
      });
    return { data };
  }

  async delete(id: number): Promise<any> {
    const data = await this.prisma.warehouse
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

  async updateStatus(id: any, status: WarehouseStatus): Promise<any> {
    let bool = false;
    switch (status) {
      case WarehouseStatus.INACTIVE:
      case WarehouseStatus.ACTIVE: {
        bool = true;
        break;
      }
    }
    let data;
    if (bool) {
      data = await this.prisma.warehouse
        .update({
          where: {
            id: +id,
          },
          data: {
            status,
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
        message: 'status not found',
      });
    }
    return { data };
  }

  async inactiveWarehouses(body: any): Promise<any> {
    const arr = body.map((item) => {
      return this.prisma.warehouse.update({
        where: { id: item },
        data: { status: WarehouseStatus.INACTIVE },
      });
    });

    await this.prisma.$transaction(arr).catch((error) => {
      throw new RpcException({
        code: grpc.status.NOT_FOUND,
        message: error.message,
      });
    });
    return { result: 'ok' };
  }

  async addNew(body?: any): Promise<any> {
    const { error, value } = warehouseCreate.validate(body);

    const company = await this.prisma.company.findFirst({
      where: {
        id: value.companyId,
      },
    });

    if (!company) {
      return {
        errors: ['Invalid Company Id'],
      };
    }

    let data: any;
    if (!error) {
      data = await this.prisma.warehouse
        .create({
          data: value,
          // include: { company: true },
        })
        .catch((error) => {
          console.log(error);
          throw new RpcException({
            code: grpc.status.NOT_FOUND,
            message: error.message,
          });
        });
    } else {
      throw new RpcException({
        code: grpc.status.NOT_FOUND,
        message: error.message,
      });
    }
    return { data };
  }

  async getOneByName(name) {
    const result = await this.prisma.warehouse.findFirst({
      where: {
        name
      },
      select: {
        id: true
      }
    })

    return {result};
  }

  async getWarehouseByCompanyId(companyId) {
    const warehouse = await this.prisma.warehouse.findFirst({
      where: {
        companyId
      }
    })

    if (!warehouse) return {id: 0};

    return {warehouse}
  }
}
