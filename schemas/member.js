module.exports = {
  createMember: {
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
  },
};
