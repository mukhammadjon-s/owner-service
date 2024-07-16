/* eslint-disable prettier/prettier */
import * as Joi from '@hapi/joi';

const warehouseCreate: Joi.Schema = Joi.object({
  // description: Joi.string().min(3),
  // title: Joi.string().required(),
  // companyId: Joi.number().required(),
  // status: Joi.string(),

  name: Joi.string().required(),
  status: Joi.string(),
  addressId: Joi.number(),
  companyId: Joi.number().required(),
  address: Joi.string().required(),
  districtId: Joi.string(),
  regionId: Joi.string(),
});

export default warehouseCreate;
