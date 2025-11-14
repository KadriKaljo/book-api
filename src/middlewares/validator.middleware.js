export const validate = (schema) => (request, response, next) => {
    const { error } = schema.validate(request.body, { 
        abortEarly: false,
        errors: {
            wrap: {
                label: false
            }
        }
    });
    if (error) {
        const errorBag = error.details.reduce((acc, detail) => {
            const field = Array.isArray(detail.path) ? detail.path.join('.') : String(detail.path ?? 'unknown');
            acc[field] = detail.message;
            return acc;
        }, {});
        
        return response.status(400).json({
            message: 'ValidationError',
            errors: errorBag
        });
    }
    next();
};