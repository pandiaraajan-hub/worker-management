const mongoose = require("mongoose");

const workerSchema = new mongoose.Schema({
  name: String,
  employer: String,
  workPermitNumber: String,
  finNumber: String,
  sector: String,
  dob: Date,
  applicationDate: Date,
  approvalDate: Date,
  expiryDate: Date,
  nationality: String,
  certificates: String,
  certificateType: String,
  csocNo: String,
  csocDate: Date,
  bcssNo: String,
});

module.exports = mongoose.model("Worker", workerSchema);
