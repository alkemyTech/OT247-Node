const memberService = require('../services/member');
const { endpointResponse } = require('../helpers/success');
const { ErrorObject } = require('../helpers/error');

module.exports = {
  createMember: async (req, res) => {
    try {
      const { body } = req;

      // Create a member
      const member = await memberService.createMember(body);

      return endpointResponse({
        res,
        message: 'Member created successfully',
        body: member,
      });
    } catch (err) {
      const error = new ErrorObject(err.message, err.statusCode || 400, err.errors || err.stack);
      return res.json(error);
    }
  },
};
