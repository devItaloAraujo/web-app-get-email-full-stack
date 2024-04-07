const emailService = require('../services/email.service');

async function insertNew(req, res) {
  const { body } = req;
  const { status, data } = await emailService.insertNew(body);
  return res.status(status).json(data);
}

async function findAll(req, res) {
  const { status, data } = await emailService.findAll();
  return res.status(status).json(data);
}

module.exports = {
  insertNew,
  findAll,
};