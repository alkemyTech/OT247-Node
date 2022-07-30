const { getSlidesService } = require('../services/slides');

module.exports = {
  getSlides: async (req, res) => {
    try {
      const slides = await getSlidesService();
      res.status(200).json(slides);
    } catch (error) {
      res.status(400).send('an error has occurred');
    }
  },
};
