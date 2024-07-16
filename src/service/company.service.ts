import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc, RpcException } from '@nestjs/microservices';
import grpc from 'grpc';
import { PrismaService } from './prisma.service';
import fetch from "node-fetch";
import { lastValueFrom } from 'rxjs';
import { VariantControllerInterface } from '../interfaces/variant.interface';
import { GRPC_PRODUCT_PACKAGE } from '../utils/constants';

interface QueryInterface {
  status?: string;
  type?: string;
  page?: number;
  pagesize: number;
  companyId?: number;
  name?: string
}

@Injectable()
export class CompanyService implements OnModuleInit {
  private variantService: VariantControllerInterface;

  constructor(private readonly prisma: PrismaService,
              @Inject(GRPC_PRODUCT_PACKAGE) private client: ClientGrpc) {}

  onModuleInit() {
    this.variantService =
      this.client.getService<VariantControllerInterface>('VariantService');
  }

  async getAll(query: QueryInterface): Promise<any> {
    const getQuery: any = {
      status: query?.status,
      type: query?.type,
      id: query?.companyId,
      legalName: {
        contains: query?.name,
        mode: 'insensitive',
      }
    };
    !getQuery.status && delete getQuery.status;
    !getQuery.type && delete getQuery.type;
    !getQuery.companyId && delete getQuery.companyId;
    const data = await this.prisma.company
      .findMany({
        where: getQuery,
        take: query.pagesize,
        skip: query.page * query.pagesize,
      })
      .catch((error) => {
        throw new RpcException({
          code: grpc.status.NOT_FOUND,
          message: error.message,
        });
      });
    const total = await this.prisma.company
      .count({
        where: getQuery,
      })
      .catch((error) => {
        throw new RpcException({
          code: grpc.status.NOT_FOUND,
          message: error.message,
        });
      });
    return { data, total: total || 0, company: data };
  }

  async getOne(id?: any): Promise<any> {
    const data = await this.prisma.company
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
    const data = await this.prisma.company
      .update({
        where: {
          id: +id,
        },
        data: { ...body, slug: body.legalName?.trim().replace(/\s/g, '-').toLowerCase() },
      })
      .catch((error) => {
        throw new RpcException({
          code: grpc.status.NOT_FOUND,
          message: error.message,
        });
      });
    await lastValueFrom(this.variantService.UpdateVariantGroupByCompany({companyId: id}));
    return { company: data };
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
    await lastValueFrom(this.variantService.UpdateVariantGroupByCompany({companyId: id}));
    return { result: 'ok' };
  }

  async addNew(body?: any): Promise<any> {
    try {
      const result = await this.prisma.company
        .create({
          data: {
            ...body.company,
            slug: body.company.legalName?.trim().replace(/\s/g, '-').toLowerCase(),
            tgPhone: body.company.timeTable,
            timeTable: undefined,
          },
        })
        .catch((error) => {
          throw new RpcException({
            code: grpc.status.NOT_FOUND,
            message: error.message,
          });
        });
      return {
        data: {
          ...result,
          tgPhone: 'asdas',
        },
        company: result,
        address: result,
      };
    } catch (error) {
      throw error;
    }
  }

  async getCompaniesByIds(companyIds): Promise<any> {
    if (!companyIds) {
      throw Error('companyIds not found')
    }

    try {
      const companiesByIdsItem = await this.prisma.company.findMany({
        where: {
          id: {in: companyIds}
        },
        select: {
          id: true,
          legalName: true,
          name: true,
          slug: true
        }
      })
      return {companies: companiesByIdsItem}
    } catch (error) {
      throw error;
    }
  }

  async registerCompanyPaymentData(data) {
    const paymentCompany:any = await fetch('https://api.apelsin.uz/api/card2account/', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    }).then((response) => response.json());

    let id = '1221';
    return { id }
  }

  async getOneByName({ legalName }) {
    const result = await this.prisma.company.findFirst({
      where: {
        legalName
      },
      select: {
        id: true
      }
    })

    return {result};
  }

  async getCompanyInfo(companyId) {
    if (!companyId) throw new RpcException({ message: 'Incorrect companyId'});
    const result = await this.prisma.company.findFirst({
      where: {
        id: companyId
      },
      select: {
        legalName: true
      }
    })

    if (!result) throw new RpcException({ message: 'Wrong company'});

    return {legalName: result.legalName};
  }
}
