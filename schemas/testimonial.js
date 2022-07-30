exports.testimonial = {
    name: {
        exists: {
            errorMessage: 'There must be a name',
            options: { checkFalsy: true },
        },
        notEmpty: {
            errorMessage: 'Name is empty',
        },
        isString: {
            errorMessage: 'The name must be a string',
        },
    },
    image: {
        exists: {
            errorMessage: 'There must be an image',
            options: { checkFalsy: true },
        },
        notEmpty: {
            errorMessage: 'Image is empty',
        },
        isString: {
            errorMessage: 'The image must be a string',
        },
    },
    content: {
        exists: {
            errorMessage: 'There must be a content',
        },
        notEmpty: {
            errorMessage: 'Content is empty',
        },
        isString: {
            errorMessage: 'The content must be a string',
        },
    },
};