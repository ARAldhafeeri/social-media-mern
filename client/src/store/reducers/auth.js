import * as actionTypes from "../actions/actionTypes"
export default (state = {authData: null}, action) => {
    switch (action.type) {
        case actionTypes.SIGN_IN:
            return {...state, authData: action?.data}
        case actionTypes.LOGOUT:
            console.log(action.data)
        default:
           return  state;
    }
}