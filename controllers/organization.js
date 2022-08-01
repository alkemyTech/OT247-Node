const { getPublicOrgService, updateOrganization } = require('../services/organization');

module.exports = {
  getPublicOrganization: async (req, res) => {
    const { id } = req.params;
    const organization = await getPublicOrgService(id);

    // Error
    if (organization !== null && organization.error) { return res.status(400).send('an error has occurred'); }

    // In case the organization was not found
    if (organization === null) return res.status(404).send('organization not found');

    // Found organization
    res.status(200).json(organization);
  },
  updatePublicOrganization: async (req, res) => {
    try {
      const { id } = req.params;
      const { body } = req;

      // Try to update an organization
      const organization = await updateOrganization(id, body);

      // Server Responses
      !Number(organization)
        ? res.status(404).json({ status: 404, message: 'Organization not found' })
        : res.status(200).json({ status: 200, message: 'Organization data updated' });
    } catch (err) {
      res.status(400).json({ status: 400, message: 'An error has occurred', error: err.message });
    }
  },
};
