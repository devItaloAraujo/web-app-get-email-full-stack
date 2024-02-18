import ProductModel from '../database/models/emails.model';
import { Email } from '../type';


async function insertNew(input: Email) {
  const { dataValues } = await ProductModel.create(input);
  const { id, email } = dataValues;
  return { status: 201, data: { id, email } };
}

async function findAll() {
  const data = await ProductModel.findAll();
  return { status: 200, data };
}

export default {
  insertNew,
  findAll,
};