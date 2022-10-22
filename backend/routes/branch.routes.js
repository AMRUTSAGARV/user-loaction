const BranchControl = require("../controllers/branch.controller");

// const AuthJwt = require("../middlewares/authJwt")

const BranchRouter = (app) => {
  app.get("/branch/:id", BranchControl.getBranchById);
  app.post("/branch", BranchControl.createBranch);
  app.put("/branch/:id", BranchControl.updateBranch);
  app.delete("/branch/:id", BranchControl.deleteBranch);
};

module.exports = BranchRouter;
