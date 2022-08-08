const paginate = async (query, path, model, attributes = {}) => {
  const { page = 1 } = query;
  const url = `http://localhost:3000/${path}?`;
  const limit = 10;
  const offset = (page - 1) * limit;

  const { count, rows } = await model.findAndCountAll({
    limit,
    offset,
    attributes,
  });

  const previusPage = (page - 1) === 0
    ? 'no previus page'
    : `${url}page=${Number(page - 1)}`;
  const nextPage = (offset + limit >= count)
    ? 'no next page'
    : `${url}page=${Number(page) + 1}`;

  const pagination = {
    previusPage,
    nextPage,
    data: rows,
  };

  return pagination;
};

module.exports = { paginate };
