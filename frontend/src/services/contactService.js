import axios from "axios";

const API_URL = "http://localhost:3000/api/contact";

export const sendContactEmail = (contactData) => {
  return axios.post(API_URL, contactData);
};
