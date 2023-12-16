const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, required: true },
    bmi: { type: Number },
    age: { type: Number },
    category: { type: String },
    date: { type: Date },
  },
  {
    timestamps: true,
  }
);

const Model = mongoose.model("Patients", schema);

module.exports = Model;
