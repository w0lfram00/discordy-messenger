import Joi from 'joi';

export const createSrvrSchema = Joi.object({
  name: Joi.string().max(32).required(),
  img: Joi.string(),
});
