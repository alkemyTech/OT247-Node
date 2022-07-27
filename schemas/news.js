exports.news = {
  name: {
    exists: {
      errorMessage: 'News name is required',
      options: { checkFalsy: true },
    },
    notEmpty: {
      errorMessage: 'Name is empty',
    },
    isString: { errorMessage: 'News name should be a string' },
  },
  content: {
    exists: {
      errorMessage: 'News content is required',
      options: { checkFalsy: true },
    },
    notEmpty: {
      errorMessage: 'Content is empty',
    },
    isString: { errorMessage: 'News content should be a string' },
  },
  image: {
    exists: {
      errorMessage: 'News image is required',
      options: { checkFalsy: true },
    },
    notEmpty: {
      errorMessage: 'Image is empty',
    },
    isString: { errorMessage: 'News image should be a string' },
  },
  categoryId: {
    exists: {
      errorMessage: 'News image is required',
      options: { checkFalsy: true },
    },
    notEmpty: {
      errorMessage: 'categoryID is empty',
    },
    isNumber: { errorMessage: 'News image should be a number' },
  }
}