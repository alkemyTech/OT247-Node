exports.comment = {
  content: {
    exists: {
      errorMessage: 'content is required',
    },
    notEmpty: {
      errorMessage: 'content is empty',
    },
    isString: {
      errorMessage: 'content must be a string',
    },
  },
  userId: {
    exists: {
      errorMessage: 'userId is required',
    },
    notEmpty: {
      errorMessage: 'userId is empty',
    },
    isInt: {
      errorMessage: 'userId must be an integer',
    },
  },
  newsId: {
    exists: {
      errorMessage: 'newsId is required',
    },
    notEmpty: {
      errorMessage: 'newsId is empty',
    },
    isInt: {
      errorMessage: 'newsId must be an integer',
    },
  },
};
