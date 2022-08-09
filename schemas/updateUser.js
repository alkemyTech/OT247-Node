exports.user = {
  id: {
    in: ['params'],
    errorMessage: 'ID is wrong',
    isInt: true,
    toInt: true,
  },
  firstName: {
    optional: true,
    isString: { errorMessage: 'User name should be a string' },
  },
  lastName: {
    optional: true,
    isString: { errorMessage: 'Last name should be a string' },
  },
  photo: {
    optional: true,
    isString: { errorMessage: 'Photo should be a string' },
  },
  isAuthorized: {
    custom: {
      options: (value, { req }) => {
        const { id } = req.params;
        const { userId } = req.user;
        return Number(id) === userId;
      },
    },
    errorMessage: 'You are not authorized to perform this action',
  },
  emptyFields: {
    custom: {
      options: (value, { req }) => {
        const { firstName, lastName, photo } = req.body;
        return firstName || lastName || photo;
      },
    },
    errorMessage: 'You have not made any changes',
  },
};
