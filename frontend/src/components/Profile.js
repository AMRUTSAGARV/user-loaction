import React from "react";
import AuthService from "../services/auth.service";
const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
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
          <button href="#" className="btn btn-primary">
            Dont have a branch? Click here to create your branch
          </button>
        </div>
      </div>
    </div>
  );
};
export default Profile;
