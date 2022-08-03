exports.category = {
  name: {
    exists: {
      errorMessage: 'There must be a name',
    },
    notEmpty: {
      errorMessage: 'Name is empty',
    },
    isString: {
      errorMessage: 'The name must be a string',
    },
  },
  description: {
    exists: {
      errorMessage: 'There must be a description',
    },
    notEmpty: {
      errorMessage: 'Description is empty',
    },
    isString: {
      errorMessage: 'The description must be a string',
    },
  },
  image: {
    exists: {
      errorMessage: 'There must be an image',
    },
    notEmpty: {
      errorMessage: 'Image is empty',
    },
    isString: {
      errorMessage: 'The image must be a string',
    },
    options: { checkFalsy: true },
  },
};
