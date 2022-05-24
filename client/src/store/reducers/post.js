import * as actionTypes from "../actions/actionTypes"
export default (state = [], action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALL_POSTS:
            return {...state, post: action.payload};
        case actionTypes.CREATE:
            return {post: [...state.post, action.payload]}
        case actionTypes.DELETE:
            return {post: state.post.filter((post) => post._id !== action.payload._id ? post : null)}
        case actionTypes.UPDATE:
            console.log(state, action.payload)
            return  {post: state.post.map((post) => post._id === action.payload._id ? action.payload.data : post)}
        case actionTypes.FETCH_SINGLE:
            return {post: state.post.map((post) => post._id === action.payload._id ? action.payload : post)}
        default:
           return  state;
    }
}