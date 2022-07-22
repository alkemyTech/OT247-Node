exports.category = {
  name: {
    exists: {
      errorMessage: 'User name is required',
      options: { checkFalsy: true },
    },
    isString: { errorMessage: 'User name should be a string' },
  }
}
