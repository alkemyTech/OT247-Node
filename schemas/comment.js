exports.comment = {
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
