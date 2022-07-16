const createHttpError = require('http-errors')

exports.isAdmin = async (req, res, next) => {
  try {
    const { roleId } = req.body.response
    if (roleId !== 2) res.status(401).send('[Unauthorized - User] - [Access - Denied]')
    next()
  } catch (error) {
    const httpError = createHttpError(
      error.statusCode = 401,
      `[Unauthorized - User] - [Access - Denied]: ${error.message}`,
    )
    next(httpError)
  }
}