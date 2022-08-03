const { catchAsync } = require('../helpers/catchAsync');
const { getContactsForBO } = require('../helpers/getContactFilter');

module.exports = {
    getContactsBO: catchAsync ( async (req, res, next) => {
        try{
            const leakedContacts = await getContactsForBO();
            endpointResponse({
                res,
                message: 'Leaked Contacts',
                body: leakedContacts
            });
        }catch(error){
            const httpError = createHttpError(
                error.statusCode,
                `[Error user login] - [contacts - GET]: ${error.message}`,
            );
            next(httpError);
        }
    })
};