const organization = (req, res, next) => {
  const {
    name, image, address, phone, email, welcomeText, aboutUsText,
  } = req.body;

  // One of these fields must exist otherwise body will be considered empty
  if (!name && !image && !address && !phone && !email && !welcomeText && !aboutUsText) {
    return res.status(412).json({
      status: 412,
      message:
        'No valid field sent, nothing to update. One of these fields must exist: name, image, address, phone, email, welcomeText, aboutUsText',
    });
  }
  return next();
};

module.exports = {
  organization,
};
