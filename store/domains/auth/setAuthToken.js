import axios from 'axios';

export const setAuthToken = token => {
  if (token) {
    // Apply authorization token to every request if logged in
    console.log('7777777777777777777, In token set');
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    // Delete auth header
    console.log('999999999999999, In token delete');
    delete axios.defaults.headers.common['Authorization'];
  }
};
