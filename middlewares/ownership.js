const { decryptJWT } = require('../helpers/jwt')
const { ErrorObject } = require('../helpers/error')

const ownership = async (req, res, next) => {
  try {
    const { id: paramId } = req.params
    const { id: tokenId, roleId } = decryptJWT(req.headers)

    if (roleId === 2 || Number(paramId) === tokenId) {
        next()
    } else {
      res.status(403).send('[Forbidden - does not have the necessary permissions] - [Access - Denied]')
      throw new ErrorObject('Forbidden', 403)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

module.exports = ownership;
