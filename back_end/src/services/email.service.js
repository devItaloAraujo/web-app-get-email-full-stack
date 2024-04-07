const ProductModel = require('../database/models/emails.model');

async function insertNew(input) {
  const { dataValues } = await (ProductModel.create(input));
  const { id, email } = dataValues;
  return { status: 201, data: { id, email } };
}

async function findAll() {
  const data = await ProductModel.findAll();
  return { status: 200, data };
}

module.exports ={
  insertNew,
  findAll,
};