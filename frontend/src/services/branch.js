import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8086";

const baseAPI = (method, api, params, body) => {
  if (method === "GET") {
    return axios.get(API_URL + api, { params, headers: authHeader() });
  }

  if (method === "POST") {
    return axios.post(API_URL + api, body, { headers: authHeader() });
  }
};

const createBranch = ({ branchName }) => {
  return baseAPI(
    "POST",
    "/branch",
    {},
    {
      branchName,
    }
  );
};

const getBranchById = (id) => {
  return baseAPI("GET", `/branch/${id}`, {}, {});
};

const branchService = {
  createBranch,
  getBranchById,
};

export default branchService;
