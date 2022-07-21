const { getPublicOrgService } = require('../services/organization');

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
};
