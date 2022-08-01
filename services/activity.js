const { Activities } = require('../models');

const { ErrorObject } = require('../helpers/error');

const existActivity = require('../helpers/existActivity');

const updateActivityById = async (id, body) => {
  try {
    const activity = await existActivity(id);
    if (!activity) throw new ErrorObject('Activity not found', 404);

    const updatedActivity = await Activities.update({
      name: body.name,
      content: body.content,
      image: body.image,
    }, { where: { id } });
    return updatedActivity;
  } catch (err) {
    throw new ErrorObject(404, 'Activity not found');
  }
};

module.exports = { updateActivityById };
