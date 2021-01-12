import  { setAuthToken } from './setAuthToken';
import * as jwt_decode from 'jwt-decode';
import { postService } from '../../services';
import actionTypes from './actionTypes';

const logInUser = (userData) => ({
  type: actionTypes.SET_USER_LOGIN,
  payload: postService('lizena/auth/login', userData)
})

export const handleLogInUser = (userData, callback=f=>f) => {
  return async(dispatch) => {
    const loginedUser = await dispatch(logInUser(userData));
    const jwtToken = loginedUser.action.payload.data.token;
    localStorage.setItem('jwtToken', jwtToken)
    callback(jwtToken);
  }
}

const logOutUser = () => ({
  type: actionTypes.SET_USER_LOGOUT_FULFILLED,
})

export const handleLogOutUser = (callback=f=>f) => {
  return(dispatch) => {
    dispatch(logOutUser());
    localStorage.removeItem('jwtToken');
    callback(null);
  }
}

export const logInAsAdmin = (userData) => dispatch => {
  console.log(555555, userData);
  postService('lizena/auth/admin', userData)
    .then(res => {
      // Set token to localStorage
      const { token, success, role } = res.data;
      console.log(8888, role)
      if (success === true && role === 'Admin') {
        localStorage.setItem('jwtToken', token);
        // Set token to Auth header
        setAuthToken(`Bearer ${token}`);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        console.log('decoded', decoded);
        dispatch(setCurrentUser(decoded));
      }
      else {
        console.log('У вас немає доступу для роботи в режимі адміністратора!')
      }
    })
};

// const sendMessage = (messageDetails) => ({
//   type: actionTypes.SEND_MESSAGE_FROM_USER,
//   payload: postService('lizena/contacts/send', messageDetails)
// })

// export const handleSendMessage = (messageDetails) => {
//   return async(dispatch) => {
//       await dispatch(sendMessage(messageDetails));
//   }
// };

// Set logged in user
// export const setCurrentUser = (decoded) => {
//   return {
//     type: actionTypes.SET_CURRENT_USER_FULFILLED,
//     payload: decoded
//   };
// };

// // Log user out
// export const logOutUser = () => dispatch => {
//   // Remove token from local storage
//   localStorage.removeItem('jwtToken');
//   // Remove auth header for future requests
//   // setAuthToken(false);
//   // // Set current user to empty object {}
//   // dispatch(setCurrentUser({}));
//   // window.location.reload();
// };