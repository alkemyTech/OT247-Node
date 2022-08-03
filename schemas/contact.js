module.exports = {
  createContact: {
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
    email: {
      exists: {
        errorMessage: 'Email is required',
      },
      notEmpty: {
        errorMessage: 'Email must not be empty',
      },
      isEmail: {
        errorMessage: 'Email must be an email',
      },
    },
  },
};
