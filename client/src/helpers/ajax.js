import axios from 'axios';

var ajax = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 5000
});

ajax.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  if (error.response.status == 301) {
    if (error.response.data) {
      var url = error.response.data.redirectLink;
      window.location.replace(url);
    }
  } else {
    return Promise.reject(error);
  }
});

export default ajax;