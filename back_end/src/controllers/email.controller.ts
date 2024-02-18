import { Request, Response } from 'express';
import emailService from '../services/email.service'
 
async function insertNew(req: Request, res: Response): Promise<Response | void> {
  const { body } = req;
  const { status, data } = await emailService.insertNew(body);
  return res.status(status).json(data);
}

async function findAll(req: Request, res: Response): Promise<Response | void> {
  const { status, data } = await emailService.findAll();
  return res.status(status).json(data);
}

export default {
  insertNew,
  findAll,
};