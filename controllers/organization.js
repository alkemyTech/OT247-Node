const { getPublicOrgService, updateOrganization } = require('../services/organization');

module.exports = {
  getPublicOrganization: async (req, res) => {
    const { id } = req.params;
    const organization = await getPublicOrgService(id);

    //Error
    if (organization !== null && organization.error)
      return res.status(400).send('an error has occurred');

    //In case the organization was not found
    if (organization === null) return res.status(404).send('organization not found');

    //Found organization
    res.status(200).json(organization);
  },
  updatePublicOrganization: async (req, res) => {
    try {
      const { id } = req.params;

      //Check that param id is a integer
      if (!Number.isInteger(Number(id)))
        return res.status(412).json({ status: 412, message: 'Id param must be a integer' });

      //Check that req.body is not empty
      if (Object.keys(req.body) == 0)
        return res.status(412).json({ status: 412, message: 'Empty fields, nothing to update' });

      //Try to update an organization
      const updatedOrganization = await updateOrganization(id, req.body);

      //Server Responses
      updatedOrganization == 0
        ? res.status(404).json({ status: 404, message: 'Organization not found' })
        : res.status(200).json({ status: 200, message: 'Organization data updated' });
    } catch (err) {
      res.status(400).json({ status: 400, error: 'An error has occurred' });
    }
  },
};
