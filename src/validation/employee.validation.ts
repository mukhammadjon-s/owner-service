/* eslint-disable prettier/prettier */
import * as Joi from '@hapi/joi';

const employeeCreate: Joi.Schema = Joi.object({
  name: Joi.string().required(),
  companyId: Joi.number().required(),
  status: Joi.string(),
  position: Joi.string(),
  level: Joi.number(),
  userId: Joi.string().required(),
});

export default employeeCreate;
