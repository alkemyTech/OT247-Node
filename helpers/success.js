const endpointResponse = ({
  res, code = 200, status = true, message, body, options, token,
}) => {
  res.status(code).json({
    code,
    status,
    message,
    body,
    options,
    token,
  });
};

module.exports = {
  endpointResponse,
};
