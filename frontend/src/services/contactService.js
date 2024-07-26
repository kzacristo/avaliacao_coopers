import axios from 'axios';

const API_URL = 'http://localhost:8080/api/contact/';

const sendContactEmail = (name, email, message) => {
  return axios.post(API_URL, {
    name,
    email,
    message,
  });
};

export default {
  sendContactEmail,
};
