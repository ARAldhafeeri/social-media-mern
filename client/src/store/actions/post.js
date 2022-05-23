import * as endpoints from "../../api/endpoints"
import PostAPI from "../../api/PostAPI";
import * as actionTypes from "./actionTypes";

// Action Creators
const { fetchPostAPI, createPostAPI, deletePostAPI, singlePostAPI, updatePostAPI } = PostAPI();

export const getAllPosts = () => async ( dispatch ) => {
    try{
        const data = await fetchPostAPI(endpoints.PostsURL)
        const action = {type: actionTypes.FETCH_ALL_POSTS, payload: data }
        dispatch(action);
    } catch (error) {
        console.log(error); 
    };

};


export const createPost = (post) => async ( dispatch ) => {
    try{
        const data = await createPostAPI(endpoints.PostsURL, post)
        const action = {type: actionTypes.CREATE, payload: data }
        dispatch(action);

    } catch (error) {
        console.log(error); 
    };

};



export const deletePost = (postId) => async ( dispatch ) => {
    try{
        const data = await deletePostAPI(endpoints.PostIdURL(postId))
        const action = {type: actionTypes.DELETE, payload: data }
        dispatch(action);

    } catch (error) {
        console.log(error); 
    };

};


export const updatePost = (postId, post) => async ( dispatch ) => {
    try{
        const data = await updatePostAPI(endpoints.PostIdURL(postId), post)
        const action = {type: actionTypes.UPDATE, payload: data }
        dispatch(action);
    } catch (error) {
        console.log(error); 
    };

};


export const findPost = (postId) => async ( dispatch ) => {
    try{
        const data = await singlePostAPI(endpoints.PostIdURL(postId))
        const action = {type: actionTypes.FETCH_SINGLE, payload: data }
        dispatch(action);

    } catch (error) {
        console.log(error); 
    };

};