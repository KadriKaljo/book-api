import Joi from 'joi'; // Joi on validator, mis on kasutusel andmekontrolliks

const bookSchema = Joi.object({
    title: Joi.string().max(255).required(),
    description: Joi.string().required(),
    thumbnail_url: Joi.string().uri().required(),
    release_year: Joi.number().integer().positive().required(),
});

export default bookSchema;