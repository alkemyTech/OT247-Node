const root = (req, res) => {
  res.render('index', { title: 'Express' });
};

module.exports = { root };
