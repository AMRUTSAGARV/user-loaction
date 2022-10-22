import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useParams, useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import branchService from "../services/branch";
const Profile = ({ isBranch, setIsBranch, isAddBranch, setisAddBranch }) => {
  const navigate = useNavigate();
  const [branches, setBranches] = useState([]);
  const [state, setState] = useState({ branchName: "" });

  const { id } = useParams();

  const currentUser = AuthService.getCurrentUser();
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("working.");
    //setisAddBranch(true)
    branchService.createBranch({ branchName: state.branchName }).then((res) => {
      console.log(res.data);
      setisAddBranch(false);

      //window.location.reload()
    });
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="card">
        <h5 className="card-header">{currentUser.username}'s Dashboard</h5>
        <div className="card-body">
          <h5 className="card-title">{currentUser.email}</h5>
          <p className="card-text">{currentUser.location}</p>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => (
              <div key={index}>{role}</div>
            ))}
          <button
            className="btn btn-primary"
            variant="primary"
            onClick={handleShow}
          >
            Dont have a branch? Click here to select branch
          </button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Select Branch</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <select
                className="custom-select mr-sm-2"
                id="inlineFormCustomSelect"
              >
                <option selected>Branch 0</option>
                <option value="1">Branch 1</option>
                <option value="2">Branch 2</option>
                <option value="3">Branch 3</option>
              </select>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};
export default Profile;
