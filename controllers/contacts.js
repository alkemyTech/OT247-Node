const createHttpError = require('http-errors');
const { getContacts } = require('../helpers/getContacts');
const { endpointResponse } = require('../helpers/success');
const { catchAsync } = require('../helpers/catchAsync');

module.exports = {
    getAllContacts: catchAsync ( async (req, res, next) => {
        try{
            const allContacts = await getContacts();
            endpointResponse({
                res,
                message: 'Contacts finded',
                body: allContacts
            });
        }catch(error){
            const httpError = createHttpError(
                error.statusCode,
                `[Error user login] - [contacts - POST]: ${error.message}`,
            );
            next(httpError);
        }
    })
}