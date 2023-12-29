const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  companyId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

const companies = mongoose.model("companies", companySchema);

module.exports = companies;
