exports.news = {
  name: {
    exists: {
      errorMessage: 'News name is required',
    },
    notEmpty: {
      errorMessage: 'Name is empty',
    },
    isString: { errorMessage: 'News name should be a string' },
  },
  content: {
    exists: {
      errorMessage: 'News content is required',
    },
    notEmpty: {
      errorMessage: 'Content is empty',
    },
    isString: { errorMessage: 'News content should be a string' },
  },
  image: {
    exists: {
      errorMessage: 'News image is required',
    },
    notEmpty: {
      errorMessage: 'Image is empty',
    },
    isString: { errorMessage: 'News image should be a string' },
  },
  categoryId: {
    exists: {
      errorMessage: 'News categoryId is required',
    },
    notEmpty: {
      errorMessage: 'categoryID is empty',
    },
    isInt: { errorMessage: 'News categoryId should be a integer' },
  }
}