const { Slide } = require('../models');

module.exports = {
  id: {
    in: 'params',
    isInt: {
      errorMessage: 'param id must be an integer/number',
    },
    custom: {
      options: async (value) => {
        const slide = await Slide.findByPk(value);

        if (!slide) return Promise.reject();
        return true;
      },
      errorMessage: 'the slide does not exists',
    },
  },
  imageUrl: {
    exists: {
      errorMessage: 'imageUrl is required',
    },
    notEmpty: {
      errorMessage: 'imageUrl must not be empty',
    },
    isString: {
      errorMessage: 'imageUrl must be a string',
    },
  },
  text: {
    exists: {
      errorMessage: 'text is required',
    },
    notEmpty: {
      errorMessage: 'text must not be empty',
    },
    isString: {
      errorMessage: 'text must be a string',
    },
  },
  order: {
    exists: {
      errorMessage: 'order is required',
    },
    notEmpty: {
      errorMessage: 'order must not be empty',
    },
    isInt: {
      errorMessage: 'order must be a integer',
    },
  },
  organizationId: {
    optional: true,
    notEmpty: {
      errorMessage: 'organizationId must not be empty',
    },
    isInt: {
      errorMessage: 'organizationId must be a integer',
    },
  },
};
