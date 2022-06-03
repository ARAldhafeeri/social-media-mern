import * as endpoints from "../../api/endpoints"
import googleSignInAPI from "../../api/GoogleAuthAPI";
import * as actionTypes from "./actionTypes";

// Action Creators

export const authLogin = (result, token) => async ( dispatch ) => {
    try{
        const action = {type: actionTypes.SIGN_IN, payload: {result, token}}
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        dispatch(action);
        localStorage.setItem("token", token);
        localStorage.setItem("expirationDate", expirationDate);
        dispatch(checkAuthTimeout(3600));
    } catch (error) {
        console.log(error); 
    };

};


export const checkAuthTimeout = (expirationTime) => async (dispatch) => {
      setTimeout(() => {
        dispatch(logout());
      }, expirationTime * 1000);
  };

  export const logout = () => async (dispatch) =>{
    localStorage.removeItem("token");
    localStorage.removeItem("expirationDate");
    const action = { type: actionTypes.LOGOUT};
    dispatch(action)
  };