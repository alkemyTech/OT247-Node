const { Category } = require('../models');

module.exports = {
  newsCreate: {
    name: {
      exists: {
        errorMessage: 'Name is required',
      },
      notEmpty: {
        errorMessage: 'Name must not be empty',
      },
      isString: {
        errorMessage: 'Name must be a string',
      },
    },
    content: {
      exists: {
        errorMessage: 'Content is required',
      },
      notEmpty: {
        errorMessage: 'Content must not be empty',
      },
      isString: {
        errorMessage: 'Content must be a string',
      },
    },
    image: {
      exists: {
        errorMessage: 'Image is required',
      },
      notEmpty: {
        errorMessage: 'Image must not be empty',
      },
      isString: {
        errorMessage: 'Image must be a string',
      },
    },
    categoryId: {
      exists: {
        errorMessage: 'CategoryId is required',
      },
      notEmpty: {
        errorMessage: 'CategoryId must not be empty',
      },
      isInt: {
        errorMessage: 'CategoryId must be a integer/number',
      },
      custom: {
        options: (value) => Category.findOne({ where: { id: value } }).then((category) => {
            if (!category) return Promise.reject();
            return Promise.resolve();
          }),
        errorMessage: 'CategoryId not match with a category',
      },
    },
  },
};
