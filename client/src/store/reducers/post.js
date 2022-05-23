import * as actionTypes from "../actions/actionTypes"
export default (state = [], action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALL_POSTS:
            return {...state, post: action.payload};
        case actionTypes.CREATE:
            console.log(state, action)
            return {...state,  ...action.payload};
        case actionTypes.DELETE:
            return {...state,  ...action.payload};
        case actionTypes.UPDATE:
           
            return [...state, state.map((post) => post._id == action.payload._id ? action.payload : post)]
        case actionTypes.FETCH_SINGLE:
            return {...state, ...action.payload};
        default:
           return  state;
    }
}