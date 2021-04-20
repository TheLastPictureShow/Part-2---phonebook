import axios from "axios";
const baseUrl = "/api/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  console.log("Fetched entries are:", request);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const remove = (url) => {
  const request = axios.delete(url);
  return request.then((response) => response.data);
};

const entryService = { getAll, create, remove };

export default entryService;
