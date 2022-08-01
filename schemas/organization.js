module.exports = {
  organizationUpdate: {
    id: {
      in: 'params',
      isInt: {
        errorMessage: 'Param id must be an integer/number',
      },
    },
    name: {
      optional: true,
      notEmpty: {
        errorMessage: 'Name must not be empty',
      },
      isString: {
        errorMessage: 'Name must be a string',
      },
    },
    image: {
      optional: true,
      notEmpty: {
        errorMessage: 'Image must not be empty',
      },
      isString: {
        errorMessage: 'Image must be a string',
      },
    },
    address: {
      optional: true,
      notEmpty: {
        errorMessage: 'Address must not be empty',
      },
      isString: {
        errorMessage: 'Address must be a string',
      },
    },
    phone: {
      optional: true,
      notEmpty: {
        errorMessage: 'Phone must not be empty',
      },
      isInt: {
        errorMessage: 'Phone must be an integer/number',
      },
    },
    email: {
      optional: true,
      notEmpty: {
        errorMessage: 'Email must not be empty',
      },
      isEmail: {
        errorMessage: 'Email must has a mail format',
      },
    },
    welcomeText: {
      optional: true,
      notEmpty: {
        errorMessage: 'WelcomeText must not be empty',
      },
      isString: {
        errorMessage: 'WelcomeText must be a string',
      },
    },
    aboutUsText: {
      optional: true,
      notEmpty: {
        errorMessage: 'AboutUsText must not be empty',
      },
      isString: {
        errorMessage: 'AboutUsText must be a string',
      },
    },
  },
};
