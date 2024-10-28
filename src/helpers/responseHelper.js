const statusCodes = require('../status-codes');

const success = (req, res, code, data = null) => {
  const responseObj = {};

  responseObj.status = statusCodes[code];

  if (data) {
    responseObj.data = data;
  }

  console.log(new Date().toISOString().slice(0, 19).replace('T', ' '), `${req.method.toUpperCase()} | ${req.protocol}://${req.headers.host}${req.baseUrl}${req.path} -> ${statusCodes[code].status_code}`);

  return res.status(statusCodes[code].status_code).json(responseObj);
};

const error = (req, res, code, err = null) => {
  console.log(new Date().toISOString().slice(0, 19).replace('T', ' '), `${req.method.toUpperCase()} | ${req.protocol}://${req.headers.host}${req.baseUrl}${req.path} -> ${statusCodes[code].status_code}`);
  const responseObj = {};
  if (err) {
    console.log(`Error Code: ${statusCodes[code].status_code}`);
    console.log(err);
  }
  responseObj.status = statusCodes[code];
  return res.status(statusCodes[code].status_code).json(responseObj);
};

module.exports = {
  success,
  error
};
