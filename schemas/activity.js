exports.activity = {
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
  content: {
    exists: {
      errorMessage: 'There must be a content',
    },
    notEmpty: {
      errorMessage: 'content is empty',
    },
    isString: {
      errorMessage: 'The content must be a string',
    },
  },
  image: {
    optional: true,
    exists: {
      errorMessage: 'There must be an image',
    },
    notEmpty: {
      errorMessage: 'Image is empty',
    },
    isString: {
      errorMessage: 'The image must be a string',

    },
  },
};
