import { Router } from 'express';
import PortfolioModel from '../models/PortfolioModel.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const doc = await PortfolioModel.create({
      ...req.body,
      // createdBy: req.user._id,
    });
    res.status(201).json({ data: doc });
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      return res.status(400).send({ message: 'Duplicated Data', error });
    }
    res.status(400).send({ message: 'sth wrong', error });
  }
});

router.get('/', async (req, res) => {
  try {
    const docs = await PortfolioModel.find()
      .lean()
      .exec();
    res.status(200).json({
      data: docs,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'sth wrong', error });
  }
});

export default router;