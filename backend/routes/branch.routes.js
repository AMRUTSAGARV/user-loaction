const BranchControl = require("../controllers/branch.controller");

const AuthJwt = require("../middlewares/authJwt");

const BranchRouter = (app) => {
  app.get("/branch/:id", AuthJwt.verifyToken, BranchControl.getBranchById);
  app.post("/branch", AuthJwt.verifyToken, BranchControl.createBranch);
  app.put("/branch/:id", AuthJwt.verifyToken, BranchControl.updateBranch);
  app.delete("/branch/:id", AuthJwt.verifyToken, BranchControl.deleteBranch);
};

module.exports = BranchRouter;
