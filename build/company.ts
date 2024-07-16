/* eslint-disable */
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'company';

export interface DelReq {
  id: number;
}

export interface DelRes {
  result: string;
}

export interface AddressGetAllRequest {
  query?: Query | undefined;
}

export interface AddressGetAllReturn {
  data: Address[];
  total?: number | undefined;
}

export interface AddressGetOneRequest {
  id: number;
}

export interface AddressGetOneReturn {
  address?: Address | undefined;
}

export interface AddressAddNewRequest {
  address?: Address | undefined;
}

export interface AddressAddNewResponse {
  address?: Address | undefined;
}

export interface AddressUpdateRequest {
  id?: number | undefined;
  address?: Address | undefined;
}

export interface AddressUpdateResponse {
  address?: Address | undefined;
}

export interface TimeTableGetAllRequest {
  query?: TimeTableQuery | undefined;
}

export interface TimeTableGetAllReturn {
  timeTable: TimeTable[];
}

export interface TimeTableGetOneRequest {
  id: number;
}

export interface TimeTableUpdateRequest {
  id: number;
  timeTable?: TimeTable | undefined;
}

export interface TimeTableGetOneReturn {
  timeTable?: TimeTable | undefined;
}

export interface TimeTableUpdateResponse {
  timeTable?: TimeTable | undefined;
}

export interface TimeTableAddNewRequest {
  timeTable?: TimeTable | undefined;
}

export interface TimeTableAddNewResponse {
  timeTable?: TimeTable | undefined;
}

export interface CompanyGetOneRequest {
  id: number;
}

export interface CompanyUpdateRequest {
  id: number;
  company?: Company | undefined;
}

export interface CompanyGetOneReturn {
  company?: Company | undefined;
}

export interface CompanyUpdateResponse {
  company?: Company | undefined;
}

export interface CompanyAddNewRequest {
  company: Company | undefined;
  address?: Address | undefined;
}

export interface CompanyAddNewResponse {
  /** optional Address address = 2; */
  data?: Company | undefined;
}

export interface CompanyGetAllRequest {
  query?: Query | undefined;
}

export interface CompanyGetAllReturn {
  data: Company[];
  total?: number | undefined;
}

export interface EmployeeGetOneRequest {
  id: number;
}

export interface EmployeeGetOneReturn {
  employee?: Employee | undefined;
}

export interface EmployeeUpdateRequest {
  id: number;
  employee: Employee | undefined;
}

export interface EmployeeUpdateResponse {
  employee?: Employee | undefined;
}

export interface EmployeeAddNewRequest {
  employee: Employee | undefined;
}

export interface EmployeeAddNewResponse {
  employee?: Employee | undefined;
}

export interface EmployeeGetAllRequest {
  query?: QueryEmployee | undefined;
}

export interface EmployeeGetAllReturn {
  data: Employee[];
  total?: number | undefined;
}

export interface EmployeeUpdateStatusRequest {
  id: number;
  status: string;
}

export interface EmployeeUpdateStatusResponse {
  employee?: Employee | undefined;
}

export interface WareHouseGetAllReq {
  query?: QueryWarehouse | undefined;
}

export interface WareHouseGetAllRes {
  data: Warehouse[];
  total?: number | undefined;
}

export interface WareHouseAddNewReq {
  warehouse?: Warehouse | undefined;
}

export interface WareHouseAddNewRes {
  warehouse?: Warehouse | undefined;
}

export interface WareHouseGetOneReq {
  id: number;
}

export interface WareHouseGetOneRes {
  warehouse?: Warehouse | undefined;
}

export interface WareHouseUpdateReq {
  id: number;
  warehouse: Warehouse | undefined;
}

export interface WareHouseUpdateRes {
  warehouse?: Warehouse | undefined;
}

export interface WareHouseUpdateStatusReq {
  id: number;
  status: string;
}

export interface WareHouseUpdateStatusRes {
  warehouse?: Warehouse | undefined;
}

export interface WareHouseInactiveReq {
  warehouse: number[];
}

export interface WareHouseInactiveRes {
  result: string;
}

export interface TimeTable {
  id?: number | undefined;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
  startTime?: string | undefined;
  endTime?: string | undefined;
  day?: number | undefined;
  status?: string | undefined;
}

export interface Employee {
  id?: number | undefined;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
  status?: string | undefined;
  position?: string | undefined;
  level?: number | undefined;
  userId?: string | undefined;
  name?: string | undefined;
  companyId?: number | undefined;
}

export interface Warehouse {
  id?: number | undefined;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
  name?: string | undefined;
  status?: string | undefined;
  addressId?: number | undefined;
  companyId?: number | undefined;
}

export interface Address {
  id?: number | undefined;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
  latitude?: string | undefined;
  longitude?: string | undefined;
  name?: string | undefined;
  street?: string | undefined;
  city?: string | undefined;
  home?: string | undefined;
  apartment?: string | undefined;
  comment?: string | undefined;
  domofon?: string | undefined;
  address?: string | undefined;
  regionId?: number | undefined;
  districtId?: number | undefined;
  postalCode?: string | undefined;
}

export interface Company {
  id?: number | undefined;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
  deletedAt?: string | undefined;
  name?: string | undefined;
  legalName?: string | undefined;
  logo?: string | undefined;
  mfo?: string | undefined;
  holderType?: string | undefined;
  directorFullName?: string | undefined;
  bankName?: string | undefined;
  branchName?: string | undefined;
  branchCode?: string | undefined;
  oked?: string | undefined;
  inn?: string | undefined;
  phone?: string | undefined;
  email?: string | undefined;
  orderType?: string | undefined;
  legalAddress?: string | undefined;
  addressId?: string | undefined;
  type?: string | undefined;
  status?: string | undefined;
  timeTable?: string | undefined;
  address?: string | undefined;
  tgPhone: string;
  bankAccountId: string;
}

export interface CompanyInterface {
  company?: Company | undefined;
  address?: Address | undefined;
}

export interface Query {
  status?: string | undefined;
  type?: string | undefined;
  page?: number | undefined;
  pagesize?: number | undefined;
}

export interface TimeTableQuery {
  companyId?: number | undefined;
}

export interface QueryEmployee {
  status?: string | undefined;
  companyId?: number | undefined;
  page?: number | undefined;
  pagesize?: number | undefined;
}

export interface QueryWarehouse {
  status?: string | undefined;
  companyId?: number | undefined;
  page?: number | undefined;
  pagesize?: number | undefined;
}

function createBaseDelReq(): DelReq {
  return { id: 0 };
}

export const DelReq = {
  encode(
    message: DelReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelReq {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: DelReq): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DelReq>, I>>(object: I): DelReq {
    const message = createBaseDelReq();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseDelRes(): DelRes {
  return { result: '' };
}

export const DelRes = {
  encode(
    message: DelRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== '') {
      writer.uint32(10).string(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelRes {
    return {
      result: isSet(object.result) ? String(object.result) : '',
    };
  },

  toJSON(message: DelRes): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DelRes>, I>>(object: I): DelRes {
    const message = createBaseDelRes();
    message.result = object.result ?? '';
    return message;
  },
};

function createBaseAddressGetAllRequest(): AddressGetAllRequest {
  return { query: undefined };
}

export const AddressGetAllRequest = {
  encode(
    message: AddressGetAllRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.query !== undefined) {
      Query.encode(message.query, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): AddressGetAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressGetAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.query = Query.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddressGetAllRequest {
    return {
      query: isSet(object.query) ? Query.fromJSON(object.query) : undefined,
    };
  },

  toJSON(message: AddressGetAllRequest): unknown {
    const obj: any = {};
    message.query !== undefined &&
      (obj.query = message.query ? Query.toJSON(message.query) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddressGetAllRequest>, I>>(
    object: I,
  ): AddressGetAllRequest {
    const message = createBaseAddressGetAllRequest();
    message.query =
      object.query !== undefined && object.query !== null
        ? Query.fromPartial(object.query)
        : undefined;
    return message;
  },
};

function createBaseAddressGetAllReturn(): AddressGetAllReturn {
  return { data: [], total: undefined };
}

export const AddressGetAllReturn = {
  encode(
    message: AddressGetAllReturn,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.data) {
      Address.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total !== undefined) {
      writer.uint32(16).int32(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddressGetAllReturn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressGetAllReturn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(Address.decode(reader, reader.uint32()));
          break;
        case 2:
          message.total = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddressGetAllReturn {
    return {
      data: Array.isArray(object?.data)
        ? object.data.map((e: any) => Address.fromJSON(e))
        : [],
      total: isSet(object.total) ? Number(object.total) : undefined,
    };
  },

  toJSON(message: AddressGetAllReturn): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map((e) => (e ? Address.toJSON(e) : undefined));
    } else {
      obj.data = [];
    }
    message.total !== undefined && (obj.total = Math.round(message.total));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddressGetAllReturn>, I>>(
    object: I,
  ): AddressGetAllReturn {
    const message = createBaseAddressGetAllReturn();
    message.data = object.data?.map((e) => Address.fromPartial(e)) || [];
    message.total = object.total ?? undefined;
    return message;
  },
};

function createBaseAddressGetOneRequest(): AddressGetOneRequest {
  return { id: 0 };
}

export const AddressGetOneRequest = {
  encode(
    message: AddressGetOneRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): AddressGetOneRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressGetOneRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddressGetOneRequest {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: AddressGetOneRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddressGetOneRequest>, I>>(
    object: I,
  ): AddressGetOneRequest {
    const message = createBaseAddressGetOneRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseAddressGetOneReturn(): AddressGetOneReturn {
  return { address: undefined };
}

export const AddressGetOneReturn = {
  encode(
    message: AddressGetOneReturn,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== undefined) {
      Address.encode(message.address, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddressGetOneReturn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressGetOneReturn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = Address.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddressGetOneReturn {
    return {
      address: isSet(object.address)
        ? Address.fromJSON(object.address)
        : undefined,
    };
  },

  toJSON(message: AddressGetOneReturn): unknown {
    const obj: any = {};
    message.address !== undefined &&
      (obj.address = message.address
        ? Address.toJSON(message.address)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddressGetOneReturn>, I>>(
    object: I,
  ): AddressGetOneReturn {
    const message = createBaseAddressGetOneReturn();
    message.address =
      object.address !== undefined && object.address !== null
        ? Address.fromPartial(object.address)
        : undefined;
    return message;
  },
};

function createBaseAddressAddNewRequest(): AddressAddNewRequest {
  return { address: undefined };
}

export const AddressAddNewRequest = {
  encode(
    message: AddressAddNewRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== undefined) {
      Address.encode(message.address, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): AddressAddNewRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressAddNewRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = Address.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddressAddNewRequest {
    return {
      address: isSet(object.address)
        ? Address.fromJSON(object.address)
        : undefined,
    };
  },

  toJSON(message: AddressAddNewRequest): unknown {
    const obj: any = {};
    message.address !== undefined &&
      (obj.address = message.address
        ? Address.toJSON(message.address)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddressAddNewRequest>, I>>(
    object: I,
  ): AddressAddNewRequest {
    const message = createBaseAddressAddNewRequest();
    message.address =
      object.address !== undefined && object.address !== null
        ? Address.fromPartial(object.address)
        : undefined;
    return message;
  },
};

function createBaseAddressAddNewResponse(): AddressAddNewResponse {
  return { address: undefined };
}

export const AddressAddNewResponse = {
  encode(
    message: AddressAddNewResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== undefined) {
      Address.encode(message.address, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): AddressAddNewResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressAddNewResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = Address.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddressAddNewResponse {
    return {
      address: isSet(object.address)
        ? Address.fromJSON(object.address)
        : undefined,
    };
  },

  toJSON(message: AddressAddNewResponse): unknown {
    const obj: any = {};
    message.address !== undefined &&
      (obj.address = message.address
        ? Address.toJSON(message.address)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddressAddNewResponse>, I>>(
    object: I,
  ): AddressAddNewResponse {
    const message = createBaseAddressAddNewResponse();
    message.address =
      object.address !== undefined && object.address !== null
        ? Address.fromPartial(object.address)
        : undefined;
    return message;
  },
};

function createBaseAddressUpdateRequest(): AddressUpdateRequest {
  return { id: undefined, address: undefined };
}

export const AddressUpdateRequest = {
  encode(
    message: AddressUpdateRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(8).int32(message.id);
    }
    if (message.address !== undefined) {
      Address.encode(message.address, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): AddressUpdateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressUpdateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.address = Address.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddressUpdateRequest {
    return {
      id: isSet(object.id) ? Number(object.id) : undefined,
      address: isSet(object.address)
        ? Address.fromJSON(object.address)
        : undefined,
    };
  },

  toJSON(message: AddressUpdateRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.address !== undefined &&
      (obj.address = message.address
        ? Address.toJSON(message.address)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddressUpdateRequest>, I>>(
    object: I,
  ): AddressUpdateRequest {
    const message = createBaseAddressUpdateRequest();
    message.id = object.id ?? undefined;
    message.address =
      object.address !== undefined && object.address !== null
        ? Address.fromPartial(object.address)
        : undefined;
    return message;
  },
};

function createBaseAddressUpdateResponse(): AddressUpdateResponse {
  return { address: undefined };
}

export const AddressUpdateResponse = {
  encode(
    message: AddressUpdateResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== undefined) {
      Address.encode(message.address, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): AddressUpdateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressUpdateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = Address.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddressUpdateResponse {
    return {
      address: isSet(object.address)
        ? Address.fromJSON(object.address)
        : undefined,
    };
  },

  toJSON(message: AddressUpdateResponse): unknown {
    const obj: any = {};
    message.address !== undefined &&
      (obj.address = message.address
        ? Address.toJSON(message.address)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddressUpdateResponse>, I>>(
    object: I,
  ): AddressUpdateResponse {
    const message = createBaseAddressUpdateResponse();
    message.address =
      object.address !== undefined && object.address !== null
        ? Address.fromPartial(object.address)
        : undefined;
    return message;
  },
};

function createBaseTimeTableGetAllRequest(): TimeTableGetAllRequest {
  return { query: undefined };
}

export const TimeTableGetAllRequest = {
  encode(
    message: TimeTableGetAllRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.query !== undefined) {
      TimeTableQuery.encode(message.query, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TimeTableGetAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeTableGetAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.query = TimeTableQuery.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TimeTableGetAllRequest {
    return {
      query: isSet(object.query)
        ? TimeTableQuery.fromJSON(object.query)
        : undefined,
    };
  },

  toJSON(message: TimeTableGetAllRequest): unknown {
    const obj: any = {};
    message.query !== undefined &&
      (obj.query = message.query
        ? TimeTableQuery.toJSON(message.query)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TimeTableGetAllRequest>, I>>(
    object: I,
  ): TimeTableGetAllRequest {
    const message = createBaseTimeTableGetAllRequest();
    message.query =
      object.query !== undefined && object.query !== null
        ? TimeTableQuery.fromPartial(object.query)
        : undefined;
    return message;
  },
};

function createBaseTimeTableGetAllReturn(): TimeTableGetAllReturn {
  return { timeTable: [] };
}

export const TimeTableGetAllReturn = {
  encode(
    message: TimeTableGetAllReturn,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.timeTable) {
      TimeTable.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TimeTableGetAllReturn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeTableGetAllReturn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeTable.push(TimeTable.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TimeTableGetAllReturn {
    return {
      timeTable: Array.isArray(object?.timeTable)
        ? object.timeTable.map((e: any) => TimeTable.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TimeTableGetAllReturn): unknown {
    const obj: any = {};
    if (message.timeTable) {
      obj.timeTable = message.timeTable.map((e) =>
        e ? TimeTable.toJSON(e) : undefined,
      );
    } else {
      obj.timeTable = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TimeTableGetAllReturn>, I>>(
    object: I,
  ): TimeTableGetAllReturn {
    const message = createBaseTimeTableGetAllReturn();
    message.timeTable =
      object.timeTable?.map((e) => TimeTable.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTimeTableGetOneRequest(): TimeTableGetOneRequest {
  return { id: 0 };
}

export const TimeTableGetOneRequest = {
  encode(
    message: TimeTableGetOneRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TimeTableGetOneRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeTableGetOneRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TimeTableGetOneRequest {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: TimeTableGetOneRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TimeTableGetOneRequest>, I>>(
    object: I,
  ): TimeTableGetOneRequest {
    const message = createBaseTimeTableGetOneRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseTimeTableUpdateRequest(): TimeTableUpdateRequest {
  return { id: 0, timeTable: undefined };
}

export const TimeTableUpdateRequest = {
  encode(
    message: TimeTableUpdateRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.timeTable !== undefined) {
      TimeTable.encode(message.timeTable, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TimeTableUpdateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeTableUpdateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.timeTable = TimeTable.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TimeTableUpdateRequest {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      timeTable: isSet(object.timeTable)
        ? TimeTable.fromJSON(object.timeTable)
        : undefined,
    };
  },

  toJSON(message: TimeTableUpdateRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.timeTable !== undefined &&
      (obj.timeTable = message.timeTable
        ? TimeTable.toJSON(message.timeTable)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TimeTableUpdateRequest>, I>>(
    object: I,
  ): TimeTableUpdateRequest {
    const message = createBaseTimeTableUpdateRequest();
    message.id = object.id ?? 0;
    message.timeTable =
      object.timeTable !== undefined && object.timeTable !== null
        ? TimeTable.fromPartial(object.timeTable)
        : undefined;
    return message;
  },
};

function createBaseTimeTableGetOneReturn(): TimeTableGetOneReturn {
  return { timeTable: undefined };
}

export const TimeTableGetOneReturn = {
  encode(
    message: TimeTableGetOneReturn,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.timeTable !== undefined) {
      TimeTable.encode(message.timeTable, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TimeTableGetOneReturn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeTableGetOneReturn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeTable = TimeTable.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TimeTableGetOneReturn {
    return {
      timeTable: isSet(object.timeTable)
        ? TimeTable.fromJSON(object.timeTable)
        : undefined,
    };
  },

  toJSON(message: TimeTableGetOneReturn): unknown {
    const obj: any = {};
    message.timeTable !== undefined &&
      (obj.timeTable = message.timeTable
        ? TimeTable.toJSON(message.timeTable)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TimeTableGetOneReturn>, I>>(
    object: I,
  ): TimeTableGetOneReturn {
    const message = createBaseTimeTableGetOneReturn();
    message.timeTable =
      object.timeTable !== undefined && object.timeTable !== null
        ? TimeTable.fromPartial(object.timeTable)
        : undefined;
    return message;
  },
};

function createBaseTimeTableUpdateResponse(): TimeTableUpdateResponse {
  return { timeTable: undefined };
}

export const TimeTableUpdateResponse = {
  encode(
    message: TimeTableUpdateResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.timeTable !== undefined) {
      TimeTable.encode(message.timeTable, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TimeTableUpdateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeTableUpdateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeTable = TimeTable.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TimeTableUpdateResponse {
    return {
      timeTable: isSet(object.timeTable)
        ? TimeTable.fromJSON(object.timeTable)
        : undefined,
    };
  },

  toJSON(message: TimeTableUpdateResponse): unknown {
    const obj: any = {};
    message.timeTable !== undefined &&
      (obj.timeTable = message.timeTable
        ? TimeTable.toJSON(message.timeTable)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TimeTableUpdateResponse>, I>>(
    object: I,
  ): TimeTableUpdateResponse {
    const message = createBaseTimeTableUpdateResponse();
    message.timeTable =
      object.timeTable !== undefined && object.timeTable !== null
        ? TimeTable.fromPartial(object.timeTable)
        : undefined;
    return message;
  },
};

function createBaseTimeTableAddNewRequest(): TimeTableAddNewRequest {
  return { timeTable: undefined };
}

export const TimeTableAddNewRequest = {
  encode(
    message: TimeTableAddNewRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.timeTable !== undefined) {
      TimeTable.encode(message.timeTable, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TimeTableAddNewRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeTableAddNewRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeTable = TimeTable.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TimeTableAddNewRequest {
    return {
      timeTable: isSet(object.timeTable)
        ? TimeTable.fromJSON(object.timeTable)
        : undefined,
    };
  },

  toJSON(message: TimeTableAddNewRequest): unknown {
    const obj: any = {};
    message.timeTable !== undefined &&
      (obj.timeTable = message.timeTable
        ? TimeTable.toJSON(message.timeTable)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TimeTableAddNewRequest>, I>>(
    object: I,
  ): TimeTableAddNewRequest {
    const message = createBaseTimeTableAddNewRequest();
    message.timeTable =
      object.timeTable !== undefined && object.timeTable !== null
        ? TimeTable.fromPartial(object.timeTable)
        : undefined;
    return message;
  },
};

function createBaseTimeTableAddNewResponse(): TimeTableAddNewResponse {
  return { timeTable: undefined };
}

export const TimeTableAddNewResponse = {
  encode(
    message: TimeTableAddNewResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.timeTable !== undefined) {
      TimeTable.encode(message.timeTable, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TimeTableAddNewResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeTableAddNewResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeTable = TimeTable.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TimeTableAddNewResponse {
    return {
      timeTable: isSet(object.timeTable)
        ? TimeTable.fromJSON(object.timeTable)
        : undefined,
    };
  },

  toJSON(message: TimeTableAddNewResponse): unknown {
    const obj: any = {};
    message.timeTable !== undefined &&
      (obj.timeTable = message.timeTable
        ? TimeTable.toJSON(message.timeTable)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TimeTableAddNewResponse>, I>>(
    object: I,
  ): TimeTableAddNewResponse {
    const message = createBaseTimeTableAddNewResponse();
    message.timeTable =
      object.timeTable !== undefined && object.timeTable !== null
        ? TimeTable.fromPartial(object.timeTable)
        : undefined;
    return message;
  },
};

function createBaseCompanyGetOneRequest(): CompanyGetOneRequest {
  return { id: 0 };
}

export const CompanyGetOneRequest = {
  encode(
    message: CompanyGetOneRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CompanyGetOneRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompanyGetOneRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CompanyGetOneRequest {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: CompanyGetOneRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompanyGetOneRequest>, I>>(
    object: I,
  ): CompanyGetOneRequest {
    const message = createBaseCompanyGetOneRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseCompanyUpdateRequest(): CompanyUpdateRequest {
  return { id: 0, company: undefined };
}

export const CompanyUpdateRequest = {
  encode(
    message: CompanyUpdateRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.company !== undefined) {
      Company.encode(message.company, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CompanyUpdateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompanyUpdateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.company = Company.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CompanyUpdateRequest {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      company: isSet(object.company)
        ? Company.fromJSON(object.company)
        : undefined,
    };
  },

  toJSON(message: CompanyUpdateRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.company !== undefined &&
      (obj.company = message.company
        ? Company.toJSON(message.company)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompanyUpdateRequest>, I>>(
    object: I,
  ): CompanyUpdateRequest {
    const message = createBaseCompanyUpdateRequest();
    message.id = object.id ?? 0;
    message.company =
      object.company !== undefined && object.company !== null
        ? Company.fromPartial(object.company)
        : undefined;
    return message;
  },
};

function createBaseCompanyGetOneReturn(): CompanyGetOneReturn {
  return { company: undefined };
}

export const CompanyGetOneReturn = {
  encode(
    message: CompanyGetOneReturn,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.company !== undefined) {
      Company.encode(message.company, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CompanyGetOneReturn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompanyGetOneReturn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.company = Company.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CompanyGetOneReturn {
    return {
      company: isSet(object.company)
        ? Company.fromJSON(object.company)
        : undefined,
    };
  },

  toJSON(message: CompanyGetOneReturn): unknown {
    const obj: any = {};
    message.company !== undefined &&
      (obj.company = message.company
        ? Company.toJSON(message.company)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompanyGetOneReturn>, I>>(
    object: I,
  ): CompanyGetOneReturn {
    const message = createBaseCompanyGetOneReturn();
    message.company =
      object.company !== undefined && object.company !== null
        ? Company.fromPartial(object.company)
        : undefined;
    return message;
  },
};

function createBaseCompanyUpdateResponse(): CompanyUpdateResponse {
  return { company: undefined };
}

export const CompanyUpdateResponse = {
  encode(
    message: CompanyUpdateResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.company !== undefined) {
      Company.encode(message.company, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CompanyUpdateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompanyUpdateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.company = Company.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CompanyUpdateResponse {
    return {
      company: isSet(object.company)
        ? Company.fromJSON(object.company)
        : undefined,
    };
  },

  toJSON(message: CompanyUpdateResponse): unknown {
    const obj: any = {};
    message.company !== undefined &&
      (obj.company = message.company
        ? Company.toJSON(message.company)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompanyUpdateResponse>, I>>(
    object: I,
  ): CompanyUpdateResponse {
    const message = createBaseCompanyUpdateResponse();
    message.company =
      object.company !== undefined && object.company !== null
        ? Company.fromPartial(object.company)
        : undefined;
    return message;
  },
};

function createBaseCompanyAddNewRequest(): CompanyAddNewRequest {
  return { company: undefined, address: undefined };
}

export const CompanyAddNewRequest = {
  encode(
    message: CompanyAddNewRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.company !== undefined) {
      Company.encode(message.company, writer.uint32(10).fork()).ldelim();
    }
    if (message.address !== undefined) {
      Address.encode(message.address, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CompanyAddNewRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompanyAddNewRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.company = Company.decode(reader, reader.uint32());
          break;
        case 2:
          message.address = Address.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CompanyAddNewRequest {
    return {
      company: isSet(object.company)
        ? Company.fromJSON(object.company)
        : undefined,
      address: isSet(object.address)
        ? Address.fromJSON(object.address)
        : undefined,
    };
  },

  toJSON(message: CompanyAddNewRequest): unknown {
    const obj: any = {};
    message.company !== undefined &&
      (obj.company = message.company
        ? Company.toJSON(message.company)
        : undefined);
    message.address !== undefined &&
      (obj.address = message.address
        ? Address.toJSON(message.address)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompanyAddNewRequest>, I>>(
    object: I,
  ): CompanyAddNewRequest {
    const message = createBaseCompanyAddNewRequest();
    message.company =
      object.company !== undefined && object.company !== null
        ? Company.fromPartial(object.company)
        : undefined;
    message.address =
      object.address !== undefined && object.address !== null
        ? Address.fromPartial(object.address)
        : undefined;
    return message;
  },
};

function createBaseCompanyAddNewResponse(): CompanyAddNewResponse {
  return { data: undefined };
}

export const CompanyAddNewResponse = {
  encode(
    message: CompanyAddNewResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.data !== undefined) {
      Company.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CompanyAddNewResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompanyAddNewResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = Company.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CompanyAddNewResponse {
    return {
      data: isSet(object.data) ? Company.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: CompanyAddNewResponse): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data ? Company.toJSON(message.data) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompanyAddNewResponse>, I>>(
    object: I,
  ): CompanyAddNewResponse {
    const message = createBaseCompanyAddNewResponse();
    message.data =
      object.data !== undefined && object.data !== null
        ? Company.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseCompanyGetAllRequest(): CompanyGetAllRequest {
  return { query: undefined };
}

export const CompanyGetAllRequest = {
  encode(
    message: CompanyGetAllRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.query !== undefined) {
      Query.encode(message.query, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CompanyGetAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompanyGetAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.query = Query.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CompanyGetAllRequest {
    return {
      query: isSet(object.query) ? Query.fromJSON(object.query) : undefined,
    };
  },

  toJSON(message: CompanyGetAllRequest): unknown {
    const obj: any = {};
    message.query !== undefined &&
      (obj.query = message.query ? Query.toJSON(message.query) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompanyGetAllRequest>, I>>(
    object: I,
  ): CompanyGetAllRequest {
    const message = createBaseCompanyGetAllRequest();
    message.query =
      object.query !== undefined && object.query !== null
        ? Query.fromPartial(object.query)
        : undefined;
    return message;
  },
};

function createBaseCompanyGetAllReturn(): CompanyGetAllReturn {
  return { data: [], total: undefined };
}

export const CompanyGetAllReturn = {
  encode(
    message: CompanyGetAllReturn,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.data) {
      Company.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total !== undefined) {
      writer.uint32(16).int32(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CompanyGetAllReturn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompanyGetAllReturn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(Company.decode(reader, reader.uint32()));
          break;
        case 2:
          message.total = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CompanyGetAllReturn {
    return {
      data: Array.isArray(object?.data)
        ? object.data.map((e: any) => Company.fromJSON(e))
        : [],
      total: isSet(object.total) ? Number(object.total) : undefined,
    };
  },

  toJSON(message: CompanyGetAllReturn): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map((e) => (e ? Company.toJSON(e) : undefined));
    } else {
      obj.data = [];
    }
    message.total !== undefined && (obj.total = Math.round(message.total));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompanyGetAllReturn>, I>>(
    object: I,
  ): CompanyGetAllReturn {
    const message = createBaseCompanyGetAllReturn();
    message.data = object.data?.map((e) => Company.fromPartial(e)) || [];
    message.total = object.total ?? undefined;
    return message;
  },
};

function createBaseEmployeeGetOneRequest(): EmployeeGetOneRequest {
  return { id: 0 };
}

export const EmployeeGetOneRequest = {
  encode(
    message: EmployeeGetOneRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): EmployeeGetOneRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmployeeGetOneRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EmployeeGetOneRequest {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: EmployeeGetOneRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EmployeeGetOneRequest>, I>>(
    object: I,
  ): EmployeeGetOneRequest {
    const message = createBaseEmployeeGetOneRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseEmployeeGetOneReturn(): EmployeeGetOneReturn {
  return { employee: undefined };
}

export const EmployeeGetOneReturn = {
  encode(
    message: EmployeeGetOneReturn,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.employee !== undefined) {
      Employee.encode(message.employee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): EmployeeGetOneReturn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmployeeGetOneReturn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.employee = Employee.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EmployeeGetOneReturn {
    return {
      employee: isSet(object.employee)
        ? Employee.fromJSON(object.employee)
        : undefined,
    };
  },

  toJSON(message: EmployeeGetOneReturn): unknown {
    const obj: any = {};
    message.employee !== undefined &&
      (obj.employee = message.employee
        ? Employee.toJSON(message.employee)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EmployeeGetOneReturn>, I>>(
    object: I,
  ): EmployeeGetOneReturn {
    const message = createBaseEmployeeGetOneReturn();
    message.employee =
      object.employee !== undefined && object.employee !== null
        ? Employee.fromPartial(object.employee)
        : undefined;
    return message;
  },
};

function createBaseEmployeeUpdateRequest(): EmployeeUpdateRequest {
  return { id: 0, employee: undefined };
}

export const EmployeeUpdateRequest = {
  encode(
    message: EmployeeUpdateRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.employee !== undefined) {
      Employee.encode(message.employee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): EmployeeUpdateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmployeeUpdateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.employee = Employee.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EmployeeUpdateRequest {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      employee: isSet(object.employee)
        ? Employee.fromJSON(object.employee)
        : undefined,
    };
  },

  toJSON(message: EmployeeUpdateRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.employee !== undefined &&
      (obj.employee = message.employee
        ? Employee.toJSON(message.employee)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EmployeeUpdateRequest>, I>>(
    object: I,
  ): EmployeeUpdateRequest {
    const message = createBaseEmployeeUpdateRequest();
    message.id = object.id ?? 0;
    message.employee =
      object.employee !== undefined && object.employee !== null
        ? Employee.fromPartial(object.employee)
        : undefined;
    return message;
  },
};

function createBaseEmployeeUpdateResponse(): EmployeeUpdateResponse {
  return { employee: undefined };
}

export const EmployeeUpdateResponse = {
  encode(
    message: EmployeeUpdateResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.employee !== undefined) {
      Employee.encode(message.employee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): EmployeeUpdateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmployeeUpdateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.employee = Employee.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EmployeeUpdateResponse {
    return {
      employee: isSet(object.employee)
        ? Employee.fromJSON(object.employee)
        : undefined,
    };
  },

  toJSON(message: EmployeeUpdateResponse): unknown {
    const obj: any = {};
    message.employee !== undefined &&
      (obj.employee = message.employee
        ? Employee.toJSON(message.employee)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EmployeeUpdateResponse>, I>>(
    object: I,
  ): EmployeeUpdateResponse {
    const message = createBaseEmployeeUpdateResponse();
    message.employee =
      object.employee !== undefined && object.employee !== null
        ? Employee.fromPartial(object.employee)
        : undefined;
    return message;
  },
};

function createBaseEmployeeAddNewRequest(): EmployeeAddNewRequest {
  return { employee: undefined };
}

export const EmployeeAddNewRequest = {
  encode(
    message: EmployeeAddNewRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.employee !== undefined) {
      Employee.encode(message.employee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): EmployeeAddNewRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmployeeAddNewRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.employee = Employee.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EmployeeAddNewRequest {
    return {
      employee: isSet(object.employee)
        ? Employee.fromJSON(object.employee)
        : undefined,
    };
  },

  toJSON(message: EmployeeAddNewRequest): unknown {
    const obj: any = {};
    message.employee !== undefined &&
      (obj.employee = message.employee
        ? Employee.toJSON(message.employee)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EmployeeAddNewRequest>, I>>(
    object: I,
  ): EmployeeAddNewRequest {
    const message = createBaseEmployeeAddNewRequest();
    message.employee =
      object.employee !== undefined && object.employee !== null
        ? Employee.fromPartial(object.employee)
        : undefined;
    return message;
  },
};

function createBaseEmployeeAddNewResponse(): EmployeeAddNewResponse {
  return { employee: undefined };
}

export const EmployeeAddNewResponse = {
  encode(
    message: EmployeeAddNewResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.employee !== undefined) {
      Employee.encode(message.employee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): EmployeeAddNewResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmployeeAddNewResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.employee = Employee.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EmployeeAddNewResponse {
    return {
      employee: isSet(object.employee)
        ? Employee.fromJSON(object.employee)
        : undefined,
    };
  },

  toJSON(message: EmployeeAddNewResponse): unknown {
    const obj: any = {};
    message.employee !== undefined &&
      (obj.employee = message.employee
        ? Employee.toJSON(message.employee)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EmployeeAddNewResponse>, I>>(
    object: I,
  ): EmployeeAddNewResponse {
    const message = createBaseEmployeeAddNewResponse();
    message.employee =
      object.employee !== undefined && object.employee !== null
        ? Employee.fromPartial(object.employee)
        : undefined;
    return message;
  },
};

function createBaseEmployeeGetAllRequest(): EmployeeGetAllRequest {
  return { query: undefined };
}

export const EmployeeGetAllRequest = {
  encode(
    message: EmployeeGetAllRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.query !== undefined) {
      QueryEmployee.encode(message.query, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): EmployeeGetAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmployeeGetAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.query = QueryEmployee.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EmployeeGetAllRequest {
    return {
      query: isSet(object.query)
        ? QueryEmployee.fromJSON(object.query)
        : undefined,
    };
  },

  toJSON(message: EmployeeGetAllRequest): unknown {
    const obj: any = {};
    message.query !== undefined &&
      (obj.query = message.query
        ? QueryEmployee.toJSON(message.query)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EmployeeGetAllRequest>, I>>(
    object: I,
  ): EmployeeGetAllRequest {
    const message = createBaseEmployeeGetAllRequest();
    message.query =
      object.query !== undefined && object.query !== null
        ? QueryEmployee.fromPartial(object.query)
        : undefined;
    return message;
  },
};

function createBaseEmployeeGetAllReturn(): EmployeeGetAllReturn {
  return { data: [], total: undefined };
}

export const EmployeeGetAllReturn = {
  encode(
    message: EmployeeGetAllReturn,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.data) {
      Employee.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total !== undefined) {
      writer.uint32(24).int32(message.total);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): EmployeeGetAllReturn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmployeeGetAllReturn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(Employee.decode(reader, reader.uint32()));
          break;
        case 3:
          message.total = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EmployeeGetAllReturn {
    return {
      data: Array.isArray(object?.data)
        ? object.data.map((e: any) => Employee.fromJSON(e))
        : [],
      total: isSet(object.total) ? Number(object.total) : undefined,
    };
  },

  toJSON(message: EmployeeGetAllReturn): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map((e) => (e ? Employee.toJSON(e) : undefined));
    } else {
      obj.data = [];
    }
    message.total !== undefined && (obj.total = Math.round(message.total));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EmployeeGetAllReturn>, I>>(
    object: I,
  ): EmployeeGetAllReturn {
    const message = createBaseEmployeeGetAllReturn();
    message.data = object.data?.map((e) => Employee.fromPartial(e)) || [];
    message.total = object.total ?? undefined;
    return message;
  },
};

function createBaseEmployeeUpdateStatusRequest(): EmployeeUpdateStatusRequest {
  return { id: 0, status: '' };
}

export const EmployeeUpdateStatusRequest = {
  encode(
    message: EmployeeUpdateStatusRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.status !== '') {
      writer.uint32(18).string(message.status);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): EmployeeUpdateStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmployeeUpdateStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EmployeeUpdateStatusRequest {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      status: isSet(object.status) ? String(object.status) : '',
    };
  },

  toJSON(message: EmployeeUpdateStatusRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EmployeeUpdateStatusRequest>, I>>(
    object: I,
  ): EmployeeUpdateStatusRequest {
    const message = createBaseEmployeeUpdateStatusRequest();
    message.id = object.id ?? 0;
    message.status = object.status ?? '';
    return message;
  },
};

function createBaseEmployeeUpdateStatusResponse(): EmployeeUpdateStatusResponse {
  return { employee: undefined };
}

export const EmployeeUpdateStatusResponse = {
  encode(
    message: EmployeeUpdateStatusResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.employee !== undefined) {
      Employee.encode(message.employee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): EmployeeUpdateStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmployeeUpdateStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.employee = Employee.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EmployeeUpdateStatusResponse {
    return {
      employee: isSet(object.employee)
        ? Employee.fromJSON(object.employee)
        : undefined,
    };
  },

  toJSON(message: EmployeeUpdateStatusResponse): unknown {
    const obj: any = {};
    message.employee !== undefined &&
      (obj.employee = message.employee
        ? Employee.toJSON(message.employee)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EmployeeUpdateStatusResponse>, I>>(
    object: I,
  ): EmployeeUpdateStatusResponse {
    const message = createBaseEmployeeUpdateStatusResponse();
    message.employee =
      object.employee !== undefined && object.employee !== null
        ? Employee.fromPartial(object.employee)
        : undefined;
    return message;
  },
};

function createBaseWareHouseGetAllReq(): WareHouseGetAllReq {
  return { query: undefined };
}

export const WareHouseGetAllReq = {
  encode(
    message: WareHouseGetAllReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.query !== undefined) {
      QueryWarehouse.encode(message.query, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WareHouseGetAllReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWareHouseGetAllReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.query = QueryWarehouse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WareHouseGetAllReq {
    return {
      query: isSet(object.query)
        ? QueryWarehouse.fromJSON(object.query)
        : undefined,
    };
  },

  toJSON(message: WareHouseGetAllReq): unknown {
    const obj: any = {};
    message.query !== undefined &&
      (obj.query = message.query
        ? QueryWarehouse.toJSON(message.query)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WareHouseGetAllReq>, I>>(
    object: I,
  ): WareHouseGetAllReq {
    const message = createBaseWareHouseGetAllReq();
    message.query =
      object.query !== undefined && object.query !== null
        ? QueryWarehouse.fromPartial(object.query)
        : undefined;
    return message;
  },
};

function createBaseWareHouseGetAllRes(): WareHouseGetAllRes {
  return { data: [], total: undefined };
}

export const WareHouseGetAllRes = {
  encode(
    message: WareHouseGetAllRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.data) {
      Warehouse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total !== undefined) {
      writer.uint32(16).int32(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WareHouseGetAllRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWareHouseGetAllRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(Warehouse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.total = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WareHouseGetAllRes {
    return {
      data: Array.isArray(object?.data)
        ? object.data.map((e: any) => Warehouse.fromJSON(e))
        : [],
      total: isSet(object.total) ? Number(object.total) : undefined,
    };
  },

  toJSON(message: WareHouseGetAllRes): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map((e) => (e ? Warehouse.toJSON(e) : undefined));
    } else {
      obj.data = [];
    }
    message.total !== undefined && (obj.total = Math.round(message.total));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WareHouseGetAllRes>, I>>(
    object: I,
  ): WareHouseGetAllRes {
    const message = createBaseWareHouseGetAllRes();
    message.data = object.data?.map((e) => Warehouse.fromPartial(e)) || [];
    message.total = object.total ?? undefined;
    return message;
  },
};

function createBaseWareHouseAddNewReq(): WareHouseAddNewReq {
  return { warehouse: undefined };
}

export const WareHouseAddNewReq = {
  encode(
    message: WareHouseAddNewReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.warehouse !== undefined) {
      Warehouse.encode(message.warehouse, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WareHouseAddNewReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWareHouseAddNewReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.warehouse = Warehouse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WareHouseAddNewReq {
    return {
      warehouse: isSet(object.warehouse)
        ? Warehouse.fromJSON(object.warehouse)
        : undefined,
    };
  },

  toJSON(message: WareHouseAddNewReq): unknown {
    const obj: any = {};
    message.warehouse !== undefined &&
      (obj.warehouse = message.warehouse
        ? Warehouse.toJSON(message.warehouse)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WareHouseAddNewReq>, I>>(
    object: I,
  ): WareHouseAddNewReq {
    const message = createBaseWareHouseAddNewReq();
    message.warehouse =
      object.warehouse !== undefined && object.warehouse !== null
        ? Warehouse.fromPartial(object.warehouse)
        : undefined;
    return message;
  },
};

function createBaseWareHouseAddNewRes(): WareHouseAddNewRes {
  return { warehouse: undefined };
}

export const WareHouseAddNewRes = {
  encode(
    message: WareHouseAddNewRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.warehouse !== undefined) {
      Warehouse.encode(message.warehouse, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WareHouseAddNewRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWareHouseAddNewRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.warehouse = Warehouse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WareHouseAddNewRes {
    return {
      warehouse: isSet(object.warehouse)
        ? Warehouse.fromJSON(object.warehouse)
        : undefined,
    };
  },

  toJSON(message: WareHouseAddNewRes): unknown {
    const obj: any = {};
    message.warehouse !== undefined &&
      (obj.warehouse = message.warehouse
        ? Warehouse.toJSON(message.warehouse)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WareHouseAddNewRes>, I>>(
    object: I,
  ): WareHouseAddNewRes {
    const message = createBaseWareHouseAddNewRes();
    message.warehouse =
      object.warehouse !== undefined && object.warehouse !== null
        ? Warehouse.fromPartial(object.warehouse)
        : undefined;
    return message;
  },
};

function createBaseWareHouseGetOneReq(): WareHouseGetOneReq {
  return { id: 0 };
}

export const WareHouseGetOneReq = {
  encode(
    message: WareHouseGetOneReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WareHouseGetOneReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWareHouseGetOneReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WareHouseGetOneReq {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: WareHouseGetOneReq): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WareHouseGetOneReq>, I>>(
    object: I,
  ): WareHouseGetOneReq {
    const message = createBaseWareHouseGetOneReq();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseWareHouseGetOneRes(): WareHouseGetOneRes {
  return { warehouse: undefined };
}

export const WareHouseGetOneRes = {
  encode(
    message: WareHouseGetOneRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.warehouse !== undefined) {
      Warehouse.encode(message.warehouse, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WareHouseGetOneRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWareHouseGetOneRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.warehouse = Warehouse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WareHouseGetOneRes {
    return {
      warehouse: isSet(object.warehouse)
        ? Warehouse.fromJSON(object.warehouse)
        : undefined,
    };
  },

  toJSON(message: WareHouseGetOneRes): unknown {
    const obj: any = {};
    message.warehouse !== undefined &&
      (obj.warehouse = message.warehouse
        ? Warehouse.toJSON(message.warehouse)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WareHouseGetOneRes>, I>>(
    object: I,
  ): WareHouseGetOneRes {
    const message = createBaseWareHouseGetOneRes();
    message.warehouse =
      object.warehouse !== undefined && object.warehouse !== null
        ? Warehouse.fromPartial(object.warehouse)
        : undefined;
    return message;
  },
};

function createBaseWareHouseUpdateReq(): WareHouseUpdateReq {
  return { id: 0, warehouse: undefined };
}

export const WareHouseUpdateReq = {
  encode(
    message: WareHouseUpdateReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.warehouse !== undefined) {
      Warehouse.encode(message.warehouse, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WareHouseUpdateReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWareHouseUpdateReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.warehouse = Warehouse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WareHouseUpdateReq {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      warehouse: isSet(object.warehouse)
        ? Warehouse.fromJSON(object.warehouse)
        : undefined,
    };
  },

  toJSON(message: WareHouseUpdateReq): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.warehouse !== undefined &&
      (obj.warehouse = message.warehouse
        ? Warehouse.toJSON(message.warehouse)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WareHouseUpdateReq>, I>>(
    object: I,
  ): WareHouseUpdateReq {
    const message = createBaseWareHouseUpdateReq();
    message.id = object.id ?? 0;
    message.warehouse =
      object.warehouse !== undefined && object.warehouse !== null
        ? Warehouse.fromPartial(object.warehouse)
        : undefined;
    return message;
  },
};

function createBaseWareHouseUpdateRes(): WareHouseUpdateRes {
  return { warehouse: undefined };
}

export const WareHouseUpdateRes = {
  encode(
    message: WareHouseUpdateRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.warehouse !== undefined) {
      Warehouse.encode(message.warehouse, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WareHouseUpdateRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWareHouseUpdateRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.warehouse = Warehouse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WareHouseUpdateRes {
    return {
      warehouse: isSet(object.warehouse)
        ? Warehouse.fromJSON(object.warehouse)
        : undefined,
    };
  },

  toJSON(message: WareHouseUpdateRes): unknown {
    const obj: any = {};
    message.warehouse !== undefined &&
      (obj.warehouse = message.warehouse
        ? Warehouse.toJSON(message.warehouse)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WareHouseUpdateRes>, I>>(
    object: I,
  ): WareHouseUpdateRes {
    const message = createBaseWareHouseUpdateRes();
    message.warehouse =
      object.warehouse !== undefined && object.warehouse !== null
        ? Warehouse.fromPartial(object.warehouse)
        : undefined;
    return message;
  },
};

function createBaseWareHouseUpdateStatusReq(): WareHouseUpdateStatusReq {
  return { id: 0, status: '' };
}

export const WareHouseUpdateStatusReq = {
  encode(
    message: WareHouseUpdateStatusReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.status !== '') {
      writer.uint32(18).string(message.status);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): WareHouseUpdateStatusReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWareHouseUpdateStatusReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WareHouseUpdateStatusReq {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      status: isSet(object.status) ? String(object.status) : '',
    };
  },

  toJSON(message: WareHouseUpdateStatusReq): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WareHouseUpdateStatusReq>, I>>(
    object: I,
  ): WareHouseUpdateStatusReq {
    const message = createBaseWareHouseUpdateStatusReq();
    message.id = object.id ?? 0;
    message.status = object.status ?? '';
    return message;
  },
};

function createBaseWareHouseUpdateStatusRes(): WareHouseUpdateStatusRes {
  return { warehouse: undefined };
}

export const WareHouseUpdateStatusRes = {
  encode(
    message: WareHouseUpdateStatusRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.warehouse !== undefined) {
      Warehouse.encode(message.warehouse, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): WareHouseUpdateStatusRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWareHouseUpdateStatusRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.warehouse = Warehouse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WareHouseUpdateStatusRes {
    return {
      warehouse: isSet(object.warehouse)
        ? Warehouse.fromJSON(object.warehouse)
        : undefined,
    };
  },

  toJSON(message: WareHouseUpdateStatusRes): unknown {
    const obj: any = {};
    message.warehouse !== undefined &&
      (obj.warehouse = message.warehouse
        ? Warehouse.toJSON(message.warehouse)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WareHouseUpdateStatusRes>, I>>(
    object: I,
  ): WareHouseUpdateStatusRes {
    const message = createBaseWareHouseUpdateStatusRes();
    message.warehouse =
      object.warehouse !== undefined && object.warehouse !== null
        ? Warehouse.fromPartial(object.warehouse)
        : undefined;
    return message;
  },
};

function createBaseWareHouseInactiveReq(): WareHouseInactiveReq {
  return { warehouse: [] };
}

export const WareHouseInactiveReq = {
  encode(
    message: WareHouseInactiveReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.warehouse) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): WareHouseInactiveReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWareHouseInactiveReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.warehouse.push(reader.int32());
            }
          } else {
            message.warehouse.push(reader.int32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WareHouseInactiveReq {
    return {
      warehouse: Array.isArray(object?.warehouse)
        ? object.warehouse.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: WareHouseInactiveReq): unknown {
    const obj: any = {};
    if (message.warehouse) {
      obj.warehouse = message.warehouse.map((e) => Math.round(e));
    } else {
      obj.warehouse = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WareHouseInactiveReq>, I>>(
    object: I,
  ): WareHouseInactiveReq {
    const message = createBaseWareHouseInactiveReq();
    message.warehouse = object.warehouse?.map((e) => e) || [];
    return message;
  },
};

function createBaseWareHouseInactiveRes(): WareHouseInactiveRes {
  return { result: '' };
}

export const WareHouseInactiveRes = {
  encode(
    message: WareHouseInactiveRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== '') {
      writer.uint32(10).string(message.result);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): WareHouseInactiveRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWareHouseInactiveRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WareHouseInactiveRes {
    return {
      result: isSet(object.result) ? String(object.result) : '',
    };
  },

  toJSON(message: WareHouseInactiveRes): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WareHouseInactiveRes>, I>>(
    object: I,
  ): WareHouseInactiveRes {
    const message = createBaseWareHouseInactiveRes();
    message.result = object.result ?? '';
    return message;
  },
};

function createBaseTimeTable(): TimeTable {
  return {
    id: undefined,
    createdAt: undefined,
    updatedAt: undefined,
    startTime: undefined,
    endTime: undefined,
    day: undefined,
    status: undefined,
  };
}

export const TimeTable = {
  encode(
    message: TimeTable,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(8).int32(message.id);
    }
    if (message.createdAt !== undefined) {
      writer.uint32(18).string(message.createdAt);
    }
    if (message.updatedAt !== undefined) {
      writer.uint32(26).string(message.updatedAt);
    }
    if (message.startTime !== undefined) {
      writer.uint32(34).string(message.startTime);
    }
    if (message.endTime !== undefined) {
      writer.uint32(42).string(message.endTime);
    }
    if (message.day !== undefined) {
      writer.uint32(48).int32(message.day);
    }
    if (message.status !== undefined) {
      writer.uint32(58).string(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimeTable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeTable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.createdAt = reader.string();
          break;
        case 3:
          message.updatedAt = reader.string();
          break;
        case 4:
          message.startTime = reader.string();
          break;
        case 5:
          message.endTime = reader.string();
          break;
        case 6:
          message.day = reader.int32();
          break;
        case 7:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TimeTable {
    return {
      id: isSet(object.id) ? Number(object.id) : undefined,
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : undefined,
      updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : undefined,
      startTime: isSet(object.startTime) ? String(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? String(object.endTime) : undefined,
      day: isSet(object.day) ? Number(object.day) : undefined,
      status: isSet(object.status) ? String(object.status) : undefined,
    };
  },

  toJSON(message: TimeTable): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    message.startTime !== undefined && (obj.startTime = message.startTime);
    message.endTime !== undefined && (obj.endTime = message.endTime);
    message.day !== undefined && (obj.day = Math.round(message.day));
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TimeTable>, I>>(
    object: I,
  ): TimeTable {
    const message = createBaseTimeTable();
    message.id = object.id ?? undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.day = object.day ?? undefined;
    message.status = object.status ?? undefined;
    return message;
  },
};

function createBaseEmployee(): Employee {
  return {
    id: undefined,
    createdAt: undefined,
    updatedAt: undefined,
    status: undefined,
    position: undefined,
    level: undefined,
    userId: undefined,
    name: undefined,
    companyId: undefined,
  };
}

export const Employee = {
  encode(
    message: Employee,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(8).int32(message.id);
    }
    if (message.createdAt !== undefined) {
      writer.uint32(18).string(message.createdAt);
    }
    if (message.updatedAt !== undefined) {
      writer.uint32(26).string(message.updatedAt);
    }
    if (message.status !== undefined) {
      writer.uint32(34).string(message.status);
    }
    if (message.position !== undefined) {
      writer.uint32(42).string(message.position);
    }
    if (message.level !== undefined) {
      writer.uint32(48).int32(message.level);
    }
    if (message.userId !== undefined) {
      writer.uint32(58).string(message.userId);
    }
    if (message.name !== undefined) {
      writer.uint32(66).string(message.name);
    }
    if (message.companyId !== undefined) {
      writer.uint32(72).int32(message.companyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Employee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmployee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.createdAt = reader.string();
          break;
        case 3:
          message.updatedAt = reader.string();
          break;
        case 4:
          message.status = reader.string();
          break;
        case 5:
          message.position = reader.string();
          break;
        case 6:
          message.level = reader.int32();
          break;
        case 7:
          message.userId = reader.string();
          break;
        case 8:
          message.name = reader.string();
          break;
        case 9:
          message.companyId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Employee {
    return {
      id: isSet(object.id) ? Number(object.id) : undefined,
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : undefined,
      updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : undefined,
      status: isSet(object.status) ? String(object.status) : undefined,
      position: isSet(object.position) ? String(object.position) : undefined,
      level: isSet(object.level) ? Number(object.level) : undefined,
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      companyId: isSet(object.companyId) ? Number(object.companyId) : undefined,
    };
  },

  toJSON(message: Employee): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    message.status !== undefined && (obj.status = message.status);
    message.position !== undefined && (obj.position = message.position);
    message.level !== undefined && (obj.level = Math.round(message.level));
    message.userId !== undefined && (obj.userId = message.userId);
    message.name !== undefined && (obj.name = message.name);
    message.companyId !== undefined &&
      (obj.companyId = Math.round(message.companyId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Employee>, I>>(object: I): Employee {
    const message = createBaseEmployee();
    message.id = object.id ?? undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.status = object.status ?? undefined;
    message.position = object.position ?? undefined;
    message.level = object.level ?? undefined;
    message.userId = object.userId ?? undefined;
    message.name = object.name ?? undefined;
    message.companyId = object.companyId ?? undefined;
    return message;
  },
};

function createBaseWarehouse(): Warehouse {
  return {
    id: undefined,
    createdAt: undefined,
    updatedAt: undefined,
    name: undefined,
    status: undefined,
    addressId: undefined,
    companyId: undefined,
  };
}

export const Warehouse = {
  encode(
    message: Warehouse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(8).int32(message.id);
    }
    if (message.createdAt !== undefined) {
      writer.uint32(18).string(message.createdAt);
    }
    if (message.updatedAt !== undefined) {
      writer.uint32(26).string(message.updatedAt);
    }
    if (message.name !== undefined) {
      writer.uint32(34).string(message.name);
    }
    if (message.status !== undefined) {
      writer.uint32(42).string(message.status);
    }
    if (message.addressId !== undefined) {
      writer.uint32(48).int32(message.addressId);
    }
    if (message.companyId !== undefined) {
      writer.uint32(56).int32(message.companyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Warehouse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWarehouse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.createdAt = reader.string();
          break;
        case 3:
          message.updatedAt = reader.string();
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.status = reader.string();
          break;
        case 6:
          message.addressId = reader.int32();
          break;
        case 7:
          message.companyId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Warehouse {
    return {
      id: isSet(object.id) ? Number(object.id) : undefined,
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : undefined,
      updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      status: isSet(object.status) ? String(object.status) : undefined,
      addressId: isSet(object.addressId) ? Number(object.addressId) : undefined,
      companyId: isSet(object.companyId) ? Number(object.companyId) : undefined,
    };
  },

  toJSON(message: Warehouse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    message.name !== undefined && (obj.name = message.name);
    message.status !== undefined && (obj.status = message.status);
    message.addressId !== undefined &&
      (obj.addressId = Math.round(message.addressId));
    message.companyId !== undefined &&
      (obj.companyId = Math.round(message.companyId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Warehouse>, I>>(
    object: I,
  ): Warehouse {
    const message = createBaseWarehouse();
    message.id = object.id ?? undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.name = object.name ?? undefined;
    message.status = object.status ?? undefined;
    message.addressId = object.addressId ?? undefined;
    message.companyId = object.companyId ?? undefined;
    return message;
  },
};

function createBaseAddress(): Address {
  return {
    id: undefined,
    createdAt: undefined,
    updatedAt: undefined,
    latitude: undefined,
    longitude: undefined,
    name: undefined,
    street: undefined,
    city: undefined,
    home: undefined,
    apartment: undefined,
    comment: undefined,
    domofon: undefined,
    address: undefined,
    regionId: undefined,
    districtId: undefined,
    postalCode: undefined,
  };
}

export const Address = {
  encode(
    message: Address,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(8).int32(message.id);
    }
    if (message.createdAt !== undefined) {
      writer.uint32(18).string(message.createdAt);
    }
    if (message.updatedAt !== undefined) {
      writer.uint32(26).string(message.updatedAt);
    }
    if (message.latitude !== undefined) {
      writer.uint32(34).string(message.latitude);
    }
    if (message.longitude !== undefined) {
      writer.uint32(42).string(message.longitude);
    }
    if (message.name !== undefined) {
      writer.uint32(50).string(message.name);
    }
    if (message.street !== undefined) {
      writer.uint32(58).string(message.street);
    }
    if (message.city !== undefined) {
      writer.uint32(66).string(message.city);
    }
    if (message.home !== undefined) {
      writer.uint32(74).string(message.home);
    }
    if (message.apartment !== undefined) {
      writer.uint32(82).string(message.apartment);
    }
    if (message.comment !== undefined) {
      writer.uint32(90).string(message.comment);
    }
    if (message.domofon !== undefined) {
      writer.uint32(98).string(message.domofon);
    }
    if (message.address !== undefined) {
      writer.uint32(106).string(message.address);
    }
    if (message.regionId !== undefined) {
      writer.uint32(112).int32(message.regionId);
    }
    if (message.districtId !== undefined) {
      writer.uint32(120).int32(message.districtId);
    }
    if (message.postalCode !== undefined) {
      writer.uint32(130).string(message.postalCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Address {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.createdAt = reader.string();
          break;
        case 3:
          message.updatedAt = reader.string();
          break;
        case 4:
          message.latitude = reader.string();
          break;
        case 5:
          message.longitude = reader.string();
          break;
        case 6:
          message.name = reader.string();
          break;
        case 7:
          message.street = reader.string();
          break;
        case 8:
          message.city = reader.string();
          break;
        case 9:
          message.home = reader.string();
          break;
        case 10:
          message.apartment = reader.string();
          break;
        case 11:
          message.comment = reader.string();
          break;
        case 12:
          message.domofon = reader.string();
          break;
        case 13:
          message.address = reader.string();
          break;
        case 14:
          message.regionId = reader.int32();
          break;
        case 15:
          message.districtId = reader.int32();
          break;
        case 16:
          message.postalCode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Address {
    return {
      id: isSet(object.id) ? Number(object.id) : undefined,
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : undefined,
      updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : undefined,
      latitude: isSet(object.latitude) ? String(object.latitude) : undefined,
      longitude: isSet(object.longitude) ? String(object.longitude) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      street: isSet(object.street) ? String(object.street) : undefined,
      city: isSet(object.city) ? String(object.city) : undefined,
      home: isSet(object.home) ? String(object.home) : undefined,
      apartment: isSet(object.apartment) ? String(object.apartment) : undefined,
      comment: isSet(object.comment) ? String(object.comment) : undefined,
      domofon: isSet(object.domofon) ? String(object.domofon) : undefined,
      address: isSet(object.address) ? String(object.address) : undefined,
      regionId: isSet(object.regionId) ? Number(object.regionId) : undefined,
      districtId: isSet(object.districtId)
        ? Number(object.districtId)
        : undefined,
      postalCode: isSet(object.postalCode)
        ? String(object.postalCode)
        : undefined,
    };
  },

  toJSON(message: Address): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    message.latitude !== undefined && (obj.latitude = message.latitude);
    message.longitude !== undefined && (obj.longitude = message.longitude);
    message.name !== undefined && (obj.name = message.name);
    message.street !== undefined && (obj.street = message.street);
    message.city !== undefined && (obj.city = message.city);
    message.home !== undefined && (obj.home = message.home);
    message.apartment !== undefined && (obj.apartment = message.apartment);
    message.comment !== undefined && (obj.comment = message.comment);
    message.domofon !== undefined && (obj.domofon = message.domofon);
    message.address !== undefined && (obj.address = message.address);
    message.regionId !== undefined &&
      (obj.regionId = Math.round(message.regionId));
    message.districtId !== undefined &&
      (obj.districtId = Math.round(message.districtId));
    message.postalCode !== undefined && (obj.postalCode = message.postalCode);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Address>, I>>(object: I): Address {
    const message = createBaseAddress();
    message.id = object.id ?? undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.latitude = object.latitude ?? undefined;
    message.longitude = object.longitude ?? undefined;
    message.name = object.name ?? undefined;
    message.street = object.street ?? undefined;
    message.city = object.city ?? undefined;
    message.home = object.home ?? undefined;
    message.apartment = object.apartment ?? undefined;
    message.comment = object.comment ?? undefined;
    message.domofon = object.domofon ?? undefined;
    message.address = object.address ?? undefined;
    message.regionId = object.regionId ?? undefined;
    message.districtId = object.districtId ?? undefined;
    message.postalCode = object.postalCode ?? undefined;
    return message;
  },
};

function createBaseCompany(): Company {
  return {
    id: undefined,
    createdAt: undefined,
    updatedAt: undefined,
    deletedAt: undefined,
    name: undefined,
    legalName: undefined,
    logo: undefined,
    mfo: undefined,
    holderType: undefined,
    directorFullName: undefined,
    bankName: undefined,
    branchName: undefined,
    branchCode: undefined,
    oked: undefined,
    inn: undefined,
    phone: undefined,
    email: undefined,
    orderType: undefined,
    legalAddress: undefined,
    addressId: undefined,
    type: undefined,
    status: undefined,
    timeTable: undefined,
    address: undefined,
    tgPhone: '',
    bankAccountId: ''
  };
}

export const Company = {
  encode(
    message: Company,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(8).int32(message.id);
    }
    if (message.createdAt !== undefined) {
      writer.uint32(18).string(message.createdAt);
    }
    if (message.updatedAt !== undefined) {
      writer.uint32(26).string(message.updatedAt);
    }
    if (message.deletedAt !== undefined) {
      writer.uint32(34).string(message.deletedAt);
    }
    if (message.name !== undefined) {
      writer.uint32(42).string(message.name);
    }
    if (message.legalName !== undefined) {
      writer.uint32(50).string(message.legalName);
    }
    if (message.logo !== undefined) {
      writer.uint32(58).string(message.logo);
    }
    if (message.mfo !== undefined) {
      writer.uint32(66).string(message.mfo);
    }
    if (message.holderType !== undefined) {
      writer.uint32(74).string(message.holderType);
    }
    if (message.directorFullName !== undefined) {
      writer.uint32(82).string(message.directorFullName);
    }
    if (message.bankName !== undefined) {
      writer.uint32(90).string(message.bankName);
    }
    if (message.branchName !== undefined) {
      writer.uint32(98).string(message.branchName);
    }
    if (message.branchCode !== undefined) {
      writer.uint32(106).string(message.branchCode);
    }
    if (message.oked !== undefined) {
      writer.uint32(114).string(message.oked);
    }
    if (message.inn !== undefined) {
      writer.uint32(122).string(message.inn);
    }
    if (message.phone !== undefined) {
      writer.uint32(130).string(message.phone);
    }
    if (message.email !== undefined) {
      writer.uint32(138).string(message.email);
    }
    if (message.orderType !== undefined) {
      writer.uint32(146).string(message.orderType);
    }
    if (message.legalAddress !== undefined) {
      writer.uint32(154).string(message.legalAddress);
    }
    if (message.addressId !== undefined) {
      writer.uint32(170).string(message.addressId);
    }
    if (message.type !== undefined) {
      writer.uint32(178).string(message.type);
    }
    if (message.status !== undefined) {
      writer.uint32(186).string(message.status);
    }
    if (message.timeTable !== undefined) {
      writer.uint32(194).string(message.timeTable);
    }
    if (message.address !== undefined) {
      writer.uint32(202).string(message.address);
    }
    if (message.tgPhone !== '') {
      writer.uint32(210).string(message.tgPhone);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Company {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompany();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.createdAt = reader.string();
          break;
        case 3:
          message.updatedAt = reader.string();
          break;
        case 4:
          message.deletedAt = reader.string();
          break;
        case 5:
          message.name = reader.string();
          break;
        case 6:
          message.legalName = reader.string();
          break;
        case 7:
          message.logo = reader.string();
          break;
        case 8:
          message.mfo = reader.string();
          break;
        case 9:
          message.holderType = reader.string();
          break;
        case 10:
          message.directorFullName = reader.string();
          break;
        case 11:
          message.bankName = reader.string();
          break;
        case 12:
          message.branchName = reader.string();
          break;
        case 13:
          message.branchCode = reader.string();
          break;
        case 14:
          message.oked = reader.string();
          break;
        case 15:
          message.inn = reader.string();
          break;
        case 16:
          message.phone = reader.string();
          break;
        case 17:
          message.email = reader.string();
          break;
        case 18:
          message.orderType = reader.string();
          break;
        case 19:
          message.legalAddress = reader.string();
          break;
        case 21:
          message.addressId = reader.string();
          break;
        case 22:
          message.type = reader.string();
          break;
        case 23:
          message.status = reader.string();
          break;
        case 24:
          message.timeTable = reader.string();
          break;
        case 25:
          message.address = reader.string();
          break;
        case 26:
          message.tgPhone = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Company {
    return {
      id: isSet(object.id) ? Number(object.id) : undefined,
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : undefined,
      updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : undefined,
      deletedAt: isSet(object.deletedAt) ? String(object.deletedAt) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      legalName: isSet(object.legalName) ? String(object.legalName) : undefined,
      logo: isSet(object.logo) ? String(object.logo) : undefined,
      mfo: isSet(object.mfo) ? String(object.mfo) : undefined,
      holderType: isSet(object.holderType)
        ? String(object.holderType)
        : undefined,
      directorFullName: isSet(object.directorFullName)
        ? String(object.directorFullName)
        : undefined,
      bankName: isSet(object.bankName) ? String(object.bankName) : undefined,
      branchName: isSet(object.branchName)
        ? String(object.branchName)
        : undefined,
      branchCode: isSet(object.branchCode)
        ? String(object.branchCode)
        : undefined,
      oked: isSet(object.oked) ? String(object.oked) : undefined,
      inn: isSet(object.inn) ? String(object.inn) : undefined,
      phone: isSet(object.phone) ? String(object.phone) : undefined,
      email: isSet(object.email) ? String(object.email) : undefined,
      orderType: isSet(object.orderType) ? String(object.orderType) : undefined,
      legalAddress: isSet(object.legalAddress)
        ? String(object.legalAddress)
        : undefined,
      addressId: isSet(object.addressId) ? String(object.addressId) : undefined,
      type: isSet(object.type) ? String(object.type) : undefined,
      status: isSet(object.status) ? String(object.status) : undefined,
      timeTable: isSet(object.timeTable) ? String(object.timeTable) : undefined,
      address: isSet(object.address) ? String(object.address) : undefined,
      tgPhone: isSet(object.tgPhone) ? String(object.tgPhone) : '',
      bankAccountId: isSet(object.bankAccountId) ? String(object.bankAccountId) : '',
    };
  },

  toJSON(message: Company): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    message.deletedAt !== undefined && (obj.deletedAt = message.deletedAt);
    message.name !== undefined && (obj.name = message.name);
    message.legalName !== undefined && (obj.legalName = message.legalName);
    message.logo !== undefined && (obj.logo = message.logo);
    message.mfo !== undefined && (obj.mfo = message.mfo);
    message.holderType !== undefined && (obj.holderType = message.holderType);
    message.directorFullName !== undefined &&
      (obj.directorFullName = message.directorFullName);
    message.bankName !== undefined && (obj.bankName = message.bankName);
    message.branchName !== undefined && (obj.branchName = message.branchName);
    message.branchCode !== undefined && (obj.branchCode = message.branchCode);
    message.oked !== undefined && (obj.oked = message.oked);
    message.inn !== undefined && (obj.inn = message.inn);
    message.phone !== undefined && (obj.phone = message.phone);
    message.email !== undefined && (obj.email = message.email);
    message.orderType !== undefined && (obj.orderType = message.orderType);
    message.legalAddress !== undefined &&
      (obj.legalAddress = message.legalAddress);
    message.addressId !== undefined && (obj.addressId = message.addressId);
    message.type !== undefined && (obj.type = message.type);
    message.status !== undefined && (obj.status = message.status);
    message.timeTable !== undefined && (obj.timeTable = message.timeTable);
    message.address !== undefined && (obj.address = message.address);
    message.tgPhone !== undefined && (obj.tgPhone = message.tgPhone);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Company>, I>>(object: I): Company {
    const message = createBaseCompany();
    message.id = object.id ?? undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.deletedAt = object.deletedAt ?? undefined;
    message.name = object.name ?? undefined;
    message.legalName = object.legalName ?? undefined;
    message.logo = object.logo ?? undefined;
    message.mfo = object.mfo ?? undefined;
    message.holderType = object.holderType ?? undefined;
    message.directorFullName = object.directorFullName ?? undefined;
    message.bankName = object.bankName ?? undefined;
    message.branchName = object.branchName ?? undefined;
    message.branchCode = object.branchCode ?? undefined;
    message.oked = object.oked ?? undefined;
    message.inn = object.inn ?? undefined;
    message.phone = object.phone ?? undefined;
    message.email = object.email ?? undefined;
    message.orderType = object.orderType ?? undefined;
    message.legalAddress = object.legalAddress ?? undefined;
    message.addressId = object.addressId ?? undefined;
    message.type = object.type ?? undefined;
    message.status = object.status ?? undefined;
    message.timeTable = object.timeTable ?? undefined;
    message.address = object.address ?? undefined;
    message.tgPhone = object.tgPhone ?? '';
    return message;
  },
};

function createBaseCompanyInterface(): CompanyInterface {
  return { company: undefined, address: undefined };
}

export const CompanyInterface = {
  encode(
    message: CompanyInterface,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.company !== undefined) {
      Company.encode(message.company, writer.uint32(10).fork()).ldelim();
    }
    if (message.address !== undefined) {
      Address.encode(message.address, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CompanyInterface {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompanyInterface();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.company = Company.decode(reader, reader.uint32());
          break;
        case 2:
          message.address = Address.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CompanyInterface {
    return {
      company: isSet(object.company)
        ? Company.fromJSON(object.company)
        : undefined,
      address: isSet(object.address)
        ? Address.fromJSON(object.address)
        : undefined,
    };
  },

  toJSON(message: CompanyInterface): unknown {
    const obj: any = {};
    message.company !== undefined &&
      (obj.company = message.company
        ? Company.toJSON(message.company)
        : undefined);
    message.address !== undefined &&
      (obj.address = message.address
        ? Address.toJSON(message.address)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompanyInterface>, I>>(
    object: I,
  ): CompanyInterface {
    const message = createBaseCompanyInterface();
    message.company =
      object.company !== undefined && object.company !== null
        ? Company.fromPartial(object.company)
        : undefined;
    message.address =
      object.address !== undefined && object.address !== null
        ? Address.fromPartial(object.address)
        : undefined;
    return message;
  },
};

function createBaseQuery(): Query {
  return {
    status: undefined,
    type: undefined,
    page: undefined,
    pagesize: undefined,
  };
}

export const Query = {
  encode(message: Query, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== undefined) {
      writer.uint32(10).string(message.status);
    }
    if (message.type !== undefined) {
      writer.uint32(18).string(message.type);
    }
    if (message.page !== undefined) {
      writer.uint32(24).int32(message.page);
    }
    if (message.pagesize !== undefined) {
      writer.uint32(32).int32(message.pagesize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Query {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        case 3:
          message.page = reader.int32();
          break;
        case 4:
          message.pagesize = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Query {
    return {
      status: isSet(object.status) ? String(object.status) : undefined,
      type: isSet(object.type) ? String(object.type) : undefined,
      page: isSet(object.page) ? Number(object.page) : undefined,
      pagesize: isSet(object.pagesize) ? Number(object.pagesize) : undefined,
    };
  },

  toJSON(message: Query): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    message.type !== undefined && (obj.type = message.type);
    message.page !== undefined && (obj.page = Math.round(message.page));
    message.pagesize !== undefined &&
      (obj.pagesize = Math.round(message.pagesize));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Query>, I>>(object: I): Query {
    const message = createBaseQuery();
    message.status = object.status ?? undefined;
    message.type = object.type ?? undefined;
    message.page = object.page ?? undefined;
    message.pagesize = object.pagesize ?? undefined;
    return message;
  },
};

function createBaseTimeTableQuery(): TimeTableQuery {
  return { companyId: undefined };
}

export const TimeTableQuery = {
  encode(
    message: TimeTableQuery,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.companyId !== undefined) {
      writer.uint32(8).int32(message.companyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimeTableQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeTableQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.companyId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TimeTableQuery {
    return {
      companyId: isSet(object.companyId) ? Number(object.companyId) : undefined,
    };
  },

  toJSON(message: TimeTableQuery): unknown {
    const obj: any = {};
    message.companyId !== undefined &&
      (obj.companyId = Math.round(message.companyId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TimeTableQuery>, I>>(
    object: I,
  ): TimeTableQuery {
    const message = createBaseTimeTableQuery();
    message.companyId = object.companyId ?? undefined;
    return message;
  },
};

function createBaseQueryEmployee(): QueryEmployee {
  return {
    status: undefined,
    companyId: undefined,
    page: undefined,
    pagesize: undefined,
  };
}

export const QueryEmployee = {
  encode(
    message: QueryEmployee,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.status !== undefined) {
      writer.uint32(10).string(message.status);
    }
    if (message.companyId !== undefined) {
      writer.uint32(16).int32(message.companyId);
    }
    if (message.page !== undefined) {
      writer.uint32(24).int32(message.page);
    }
    if (message.pagesize !== undefined) {
      writer.uint32(32).int32(message.pagesize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEmployee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEmployee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        case 2:
          message.companyId = reader.int32();
          break;
        case 3:
          message.page = reader.int32();
          break;
        case 4:
          message.pagesize = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEmployee {
    return {
      status: isSet(object.status) ? String(object.status) : undefined,
      companyId: isSet(object.companyId) ? Number(object.companyId) : undefined,
      page: isSet(object.page) ? Number(object.page) : undefined,
      pagesize: isSet(object.pagesize) ? Number(object.pagesize) : undefined,
    };
  },

  toJSON(message: QueryEmployee): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    message.companyId !== undefined &&
      (obj.companyId = Math.round(message.companyId));
    message.page !== undefined && (obj.page = Math.round(message.page));
    message.pagesize !== undefined &&
      (obj.pagesize = Math.round(message.pagesize));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryEmployee>, I>>(
    object: I,
  ): QueryEmployee {
    const message = createBaseQueryEmployee();
    message.status = object.status ?? undefined;
    message.companyId = object.companyId ?? undefined;
    message.page = object.page ?? undefined;
    message.pagesize = object.pagesize ?? undefined;
    return message;
  },
};

function createBaseQueryWarehouse(): QueryWarehouse {
  return {
    status: undefined,
    companyId: undefined,
    page: undefined,
    pagesize: undefined,
  };
}

export const QueryWarehouse = {
  encode(
    message: QueryWarehouse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.status !== undefined) {
      writer.uint32(10).string(message.status);
    }
    if (message.companyId !== undefined) {
      writer.uint32(16).int32(message.companyId);
    }
    if (message.page !== undefined) {
      writer.uint32(24).int32(message.page);
    }
    if (message.pagesize !== undefined) {
      writer.uint32(32).int32(message.pagesize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWarehouse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWarehouse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        case 2:
          message.companyId = reader.int32();
          break;
        case 3:
          message.page = reader.int32();
          break;
        case 4:
          message.pagesize = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryWarehouse {
    return {
      status: isSet(object.status) ? String(object.status) : undefined,
      companyId: isSet(object.companyId) ? Number(object.companyId) : undefined,
      page: isSet(object.page) ? Number(object.page) : undefined,
      pagesize: isSet(object.pagesize) ? Number(object.pagesize) : undefined,
    };
  },

  toJSON(message: QueryWarehouse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    message.companyId !== undefined &&
      (obj.companyId = Math.round(message.companyId));
    message.page !== undefined && (obj.page = Math.round(message.page));
    message.pagesize !== undefined &&
      (obj.pagesize = Math.round(message.pagesize));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryWarehouse>, I>>(
    object: I,
  ): QueryWarehouse {
    const message = createBaseQueryWarehouse();
    message.status = object.status ?? undefined;
    message.companyId = object.companyId ?? undefined;
    message.page = object.page ?? undefined;
    message.pagesize = object.pagesize ?? undefined;
    return message;
  },
};

export interface AddressService {
  GetAll(request: AddressGetAllRequest): Promise<AddressGetAllReturn>;
  GetOne(request: AddressGetOneRequest): Promise<AddressGetOneReturn>;
  AddNew(request: AddressAddNewRequest): Promise<AddressAddNewResponse>;
  Update(request: AddressUpdateRequest): Promise<AddressUpdateResponse>;
  Delete(request: DelReq): Promise<DelRes>;
}

export class AddressServiceClientImpl implements AddressService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetAll = this.GetAll.bind(this);
    this.GetOne = this.GetOne.bind(this);
    this.AddNew = this.AddNew.bind(this);
    this.Update = this.Update.bind(this);
    this.Delete = this.Delete.bind(this);
  }
  GetAll(request: AddressGetAllRequest): Promise<AddressGetAllReturn> {
    const data = AddressGetAllRequest.encode(request).finish();
    const promise = this.rpc.request('company.AddressService', 'GetAll', data);
    return promise.then((data) =>
      AddressGetAllReturn.decode(new _m0.Reader(data)),
    );
  }

  GetOne(request: AddressGetOneRequest): Promise<AddressGetOneReturn> {
    const data = AddressGetOneRequest.encode(request).finish();
    const promise = this.rpc.request('company.AddressService', 'GetOne', data);
    return promise.then((data) =>
      AddressGetOneReturn.decode(new _m0.Reader(data)),
    );
  }

  AddNew(request: AddressAddNewRequest): Promise<AddressAddNewResponse> {
    const data = AddressAddNewRequest.encode(request).finish();
    const promise = this.rpc.request('company.AddressService', 'AddNew', data);
    return promise.then((data) =>
      AddressAddNewResponse.decode(new _m0.Reader(data)),
    );
  }

  Update(request: AddressUpdateRequest): Promise<AddressUpdateResponse> {
    const data = AddressUpdateRequest.encode(request).finish();
    const promise = this.rpc.request('company.AddressService', 'Update', data);
    return promise.then((data) =>
      AddressUpdateResponse.decode(new _m0.Reader(data)),
    );
  }

  Delete(request: DelReq): Promise<DelRes> {
    const data = DelReq.encode(request).finish();
    const promise = this.rpc.request('company.AddressService', 'Delete', data);
    return promise.then((data) => DelRes.decode(new _m0.Reader(data)));
  }
}

export interface TimeTableService {
  GetAll(request: TimeTableGetAllRequest): Promise<TimeTableGetAllReturn>;
  GetOne(request: TimeTableGetOneRequest): Promise<TimeTableGetOneReturn>;
  AddNew(request: TimeTableAddNewRequest): Promise<TimeTableAddNewResponse>;
  Update(request: TimeTableUpdateRequest): Promise<TimeTableUpdateResponse>;
  Delete(request: DelReq): Promise<DelRes>;
}

export class TimeTableServiceClientImpl implements TimeTableService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetAll = this.GetAll.bind(this);
    this.GetOne = this.GetOne.bind(this);
    this.AddNew = this.AddNew.bind(this);
    this.Update = this.Update.bind(this);
    this.Delete = this.Delete.bind(this);
  }
  GetAll(request: TimeTableGetAllRequest): Promise<TimeTableGetAllReturn> {
    const data = TimeTableGetAllRequest.encode(request).finish();
    const promise = this.rpc.request(
      'company.TimeTableService',
      'GetAll',
      data,
    );
    return promise.then((data) =>
      TimeTableGetAllReturn.decode(new _m0.Reader(data)),
    );
  }

  GetOne(request: TimeTableGetOneRequest): Promise<TimeTableGetOneReturn> {
    const data = TimeTableGetOneRequest.encode(request).finish();
    const promise = this.rpc.request(
      'company.TimeTableService',
      'GetOne',
      data,
    );
    return promise.then((data) =>
      TimeTableGetOneReturn.decode(new _m0.Reader(data)),
    );
  }

  AddNew(request: TimeTableAddNewRequest): Promise<TimeTableAddNewResponse> {
    const data = TimeTableAddNewRequest.encode(request).finish();
    const promise = this.rpc.request(
      'company.TimeTableService',
      'AddNew',
      data,
    );
    return promise.then((data) =>
      TimeTableAddNewResponse.decode(new _m0.Reader(data)),
    );
  }

  Update(request: TimeTableUpdateRequest): Promise<TimeTableUpdateResponse> {
    const data = TimeTableUpdateRequest.encode(request).finish();
    const promise = this.rpc.request(
      'company.TimeTableService',
      'Update',
      data,
    );
    return promise.then((data) =>
      TimeTableUpdateResponse.decode(new _m0.Reader(data)),
    );
  }

  Delete(request: DelReq): Promise<DelRes> {
    const data = DelReq.encode(request).finish();
    const promise = this.rpc.request(
      'company.TimeTableService',
      'Delete',
      data,
    );
    return promise.then((data) => DelRes.decode(new _m0.Reader(data)));
  }
}

export interface CompanyService {
  GetAll(request: CompanyGetAllRequest): Promise<CompanyGetAllReturn>;
  GetOne(request: CompanyGetOneRequest): Promise<CompanyGetOneReturn>;
  AddNew(request: CompanyAddNewRequest): Promise<CompanyAddNewResponse>;
  Update(request: CompanyUpdateRequest): Promise<CompanyUpdateResponse>;
  Delete(request: DelReq): Promise<DelRes>;
}

export class CompanyServiceClientImpl implements CompanyService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetAll = this.GetAll.bind(this);
    this.GetOne = this.GetOne.bind(this);
    this.AddNew = this.AddNew.bind(this);
    this.Update = this.Update.bind(this);
    this.Delete = this.Delete.bind(this);
  }
  GetAll(request: CompanyGetAllRequest): Promise<CompanyGetAllReturn> {
    const data = CompanyGetAllRequest.encode(request).finish();
    const promise = this.rpc.request('company.CompanyService', 'GetAll', data);
    return promise.then((data) =>
      CompanyGetAllReturn.decode(new _m0.Reader(data)),
    );
  }

  GetOne(request: CompanyGetOneRequest): Promise<CompanyGetOneReturn> {
    const data = CompanyGetOneRequest.encode(request).finish();
    const promise = this.rpc.request('company.CompanyService', 'GetOne', data);
    return promise.then((data) =>
      CompanyGetOneReturn.decode(new _m0.Reader(data)),
    );
  }

  AddNew(request: CompanyAddNewRequest): Promise<CompanyAddNewResponse> {
    const data = CompanyAddNewRequest.encode(request).finish();
    const promise = this.rpc.request('company.CompanyService', 'AddNew', data);
    return promise.then((data) =>
      CompanyAddNewResponse.decode(new _m0.Reader(data)),
    );
  }

  Update(request: CompanyUpdateRequest): Promise<CompanyUpdateResponse> {
    const data = CompanyUpdateRequest.encode(request).finish();
    const promise = this.rpc.request('company.CompanyService', 'Update', data);
    return promise.then((data) =>
      CompanyUpdateResponse.decode(new _m0.Reader(data)),
    );
  }

  Delete(request: DelReq): Promise<DelRes> {
    const data = DelReq.encode(request).finish();
    const promise = this.rpc.request('company.CompanyService', 'Delete', data);
    return promise.then((data) => DelRes.decode(new _m0.Reader(data)));
  }
}

export interface EmployeeService {
  GetAll(request: EmployeeGetAllRequest): Promise<EmployeeGetAllReturn>;
  GetOne(request: EmployeeGetOneRequest): Promise<EmployeeGetOneReturn>;
  AddNew(request: EmployeeAddNewRequest): Promise<EmployeeAddNewResponse>;
  Update(request: EmployeeUpdateRequest): Promise<EmployeeUpdateResponse>;
  UpdateStatus(
    request: EmployeeUpdateStatusRequest,
  ): Promise<EmployeeUpdateStatusResponse>;
  Delete(request: DelReq): Promise<DelRes>;
}

export class EmployeeServiceClientImpl implements EmployeeService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetAll = this.GetAll.bind(this);
    this.GetOne = this.GetOne.bind(this);
    this.AddNew = this.AddNew.bind(this);
    this.Update = this.Update.bind(this);
    this.UpdateStatus = this.UpdateStatus.bind(this);
    this.Delete = this.Delete.bind(this);
  }
  GetAll(request: EmployeeGetAllRequest): Promise<EmployeeGetAllReturn> {
    const data = EmployeeGetAllRequest.encode(request).finish();
    const promise = this.rpc.request('company.EmployeeService', 'GetAll', data);
    return promise.then((data) =>
      EmployeeGetAllReturn.decode(new _m0.Reader(data)),
    );
  }

  GetOne(request: EmployeeGetOneRequest): Promise<EmployeeGetOneReturn> {
    const data = EmployeeGetOneRequest.encode(request).finish();
    const promise = this.rpc.request('company.EmployeeService', 'GetOne', data);
    return promise.then((data) =>
      EmployeeGetOneReturn.decode(new _m0.Reader(data)),
    );
  }

  AddNew(request: EmployeeAddNewRequest): Promise<EmployeeAddNewResponse> {
    const data = EmployeeAddNewRequest.encode(request).finish();
    const promise = this.rpc.request('company.EmployeeService', 'AddNew', data);
    return promise.then((data) =>
      EmployeeAddNewResponse.decode(new _m0.Reader(data)),
    );
  }

  Update(request: EmployeeUpdateRequest): Promise<EmployeeUpdateResponse> {
    const data = EmployeeUpdateRequest.encode(request).finish();
    const promise = this.rpc.request('company.EmployeeService', 'Update', data);
    return promise.then((data) =>
      EmployeeUpdateResponse.decode(new _m0.Reader(data)),
    );
  }

  UpdateStatus(
    request: EmployeeUpdateStatusRequest,
  ): Promise<EmployeeUpdateStatusResponse> {
    const data = EmployeeUpdateStatusRequest.encode(request).finish();
    const promise = this.rpc.request(
      'company.EmployeeService',
      'UpdateStatus',
      data,
    );
    return promise.then((data) =>
      EmployeeUpdateStatusResponse.decode(new _m0.Reader(data)),
    );
  }

  Delete(request: DelReq): Promise<DelRes> {
    const data = DelReq.encode(request).finish();
    const promise = this.rpc.request('company.EmployeeService', 'Delete', data);
    return promise.then((data) => DelRes.decode(new _m0.Reader(data)));
  }
}

export interface WarehouseService {
  GetAll(request: WareHouseGetAllReq): Promise<WareHouseGetAllRes>;
  AddNew(request: WareHouseAddNewReq): Promise<WareHouseAddNewRes>;
  GetOne(request: WareHouseGetOneReq): Promise<WareHouseGetOneRes>;
  Update(request: WareHouseUpdateReq): Promise<WareHouseUpdateRes>;
  UpdateStatusOnly(
    request: WareHouseUpdateStatusReq,
  ): Promise<WareHouseUpdateStatusRes>;
  Inactive(request: WareHouseInactiveReq): Promise<WareHouseInactiveRes>;
  Delete(request: DelReq): Promise<DelRes>;
}

export class WarehouseServiceClientImpl implements WarehouseService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetAll = this.GetAll.bind(this);
    this.AddNew = this.AddNew.bind(this);
    this.GetOne = this.GetOne.bind(this);
    this.Update = this.Update.bind(this);
    this.UpdateStatusOnly = this.UpdateStatusOnly.bind(this);
    this.Inactive = this.Inactive.bind(this);
    this.Delete = this.Delete.bind(this);
  }
  GetAll(request: WareHouseGetAllReq): Promise<WareHouseGetAllRes> {
    const data = WareHouseGetAllReq.encode(request).finish();
    const promise = this.rpc.request(
      'company.WarehouseService',
      'GetAll',
      data,
    );
    return promise.then((data) =>
      WareHouseGetAllRes.decode(new _m0.Reader(data)),
    );
  }

  AddNew(request: WareHouseAddNewReq): Promise<WareHouseAddNewRes> {
    const data = WareHouseAddNewReq.encode(request).finish();
    const promise = this.rpc.request(
      'company.WarehouseService',
      'AddNew',
      data,
    );
    return promise.then((data) =>
      WareHouseAddNewRes.decode(new _m0.Reader(data)),
    );
  }

  GetOne(request: WareHouseGetOneReq): Promise<WareHouseGetOneRes> {
    const data = WareHouseGetOneReq.encode(request).finish();
    const promise = this.rpc.request(
      'company.WarehouseService',
      'GetOne',
      data,
    );
    return promise.then((data) =>
      WareHouseGetOneRes.decode(new _m0.Reader(data)),
    );
  }

  Update(request: WareHouseUpdateReq): Promise<WareHouseUpdateRes> {
    const data = WareHouseUpdateReq.encode(request).finish();
    const promise = this.rpc.request(
      'company.WarehouseService',
      'Update',
      data,
    );
    return promise.then((data) =>
      WareHouseUpdateRes.decode(new _m0.Reader(data)),
    );
  }

  UpdateStatusOnly(
    request: WareHouseUpdateStatusReq,
  ): Promise<WareHouseUpdateStatusRes> {
    const data = WareHouseUpdateStatusReq.encode(request).finish();
    const promise = this.rpc.request(
      'company.WarehouseService',
      'UpdateStatusOnly',
      data,
    );
    return promise.then((data) =>
      WareHouseUpdateStatusRes.decode(new _m0.Reader(data)),
    );
  }

  Inactive(request: WareHouseInactiveReq): Promise<WareHouseInactiveRes> {
    const data = WareHouseInactiveReq.encode(request).finish();
    const promise = this.rpc.request(
      'company.WarehouseService',
      'Inactive',
      data,
    );
    return promise.then((data) =>
      WareHouseInactiveRes.decode(new _m0.Reader(data)),
    );
  }

  Delete(request: DelReq): Promise<DelRes> {
    const data = DelReq.encode(request).finish();
    const promise = this.rpc.request(
      'company.WarehouseService',
      'Delete',
      data,
    );
    return promise.then((data) => DelRes.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array,
  ): Promise<Uint8Array>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
