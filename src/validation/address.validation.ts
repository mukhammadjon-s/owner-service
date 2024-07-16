import * as Joi from '@hapi/joi';

const addressCreate: Joi.Schema = Joi.object({
  // address: Joi.string().required(),
  // companyId: Joi.number(),
  latitude: Joi.string().required(),
  longitude: Joi.string().required(),
  name: Joi.string().required(),
  street: Joi.string(),
  city: Joi.string(),
  home: Joi.string(),
  apartment: Joi.string(),
  comment: Joi.string(),
  domofon: Joi.string(),
  postalCode: Joi.string(),
  address: Joi.string().required(),
  regionId: Joi.number().required(),
  districtId: Joi.number().required(),
});

export default addressCreate;
