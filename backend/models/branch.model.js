const mongoose = require("mongoose");

// const { ObjectId} = mongoose.Schema.Types;

const branchSchema = new mongoose.Schema({
  branchName: {
    type: String,
    enum: ["Branch 0", "Branch 1", "Branch 2", "Branch 3"],
    required: true,
  },
});

const Branch = mongoose.model("Branch", branchSchema);
module.exports = Branch;
