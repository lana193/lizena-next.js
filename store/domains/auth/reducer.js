import isEmpty from 'is-empty';
import actionTypes from './actionTypes';
  
  const initialStateAuth = {
    isAuthenticated: false,
    user: {},
    token: {}
  };

  export const authReducer =  (state = initialStateAuth, action={}) => {
    switch (action.type) {
      case actionTypes.SET_USER_LOGIN_FULFILLED:
        return {
          isAuthenticated: !isEmpty(action.payload.data),
          token: action.payload.data.token
        };
      case actionTypes.SET_USER_LOGOUT_FULFILLED:
          return {
            isAuthenticated: !isEmpty(action.payload),
            token: null
          };
      default:
        return state;
    }
  }
