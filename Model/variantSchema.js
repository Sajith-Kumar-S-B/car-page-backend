const mongoose = require("mongoose");

const variantSchema = new mongoose.Schema({
  variant: {
    type: String,
    required: true,
  },
  companyId: {
    type: String,
    // required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

const variants = mongoose.model("variants", variantSchema);

module.exports = variants;
