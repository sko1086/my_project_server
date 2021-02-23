import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema(
  {
    title: String,
    subTitle: String,
    workTime: String,
    contents: String,
    imgClass: String
  }
);

// portfolioSchema.index({ Users: 1, title: 1, nickname: 1 }, { unique: true });
const PortfolioModel = mongoose.model('Portfolio', portfolioSchema);

export default PortfolioModel;
