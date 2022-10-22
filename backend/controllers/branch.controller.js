const Branch = require("../models/branch.model");

const BranchControl = {
  createBranch: (req, res) => {
    if (!req.body.branchName) {
      res.status(404).send({ message: "Content cannot be empty." });
      return;
    }
    //create branch.
    const branch = new Branch({
      branchName: req.body.branchName,
    });

    branch
      .save(branch)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occured while creating the branch.",
        });
      });
  },

  getBranchById: (req, res) => {
    const id = req.params.id;

    Branch.findById(id)
      .then((data) => {
        if (!data)
          res.status(404).send({ message: "Not found Branch with id " + id });
        else res.send(data);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: "Error retrieving Branch with id=" + id });
      });
  },

  updateBranch: async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!",
      });
    }

    const id = req.params.id;

    Branch.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Branch with id=${id}. Maybe Branch was not found!`,
          });
        } else res.send({ message: "Branch was updated successfully." });
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating Branch with id=" + id,
        });
      });
  },

  deleteBranch: async (req, res) => {
    const id = req.params.id;

    Branch.findByIdAndRemove(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Branch with id=${id}. Maybe Branch was not found.`,
          });
        } else {
          res.send({
            message: "Branch was deleted succesfully.",
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not delete Branch with id=" + id,
        });
      });
  },
};

module.exports = BranchControl;
