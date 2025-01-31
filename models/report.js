const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reportSchema = new Schema({
    patient: { type: Schema.Types.ObjectId, ref: 'Patient', required: true },
    status: { type: String, required: true },
    details: { type: String, required: true }
  },{ timestamps: true });

module.exports = mongoose.model('Report', reportSchema);
