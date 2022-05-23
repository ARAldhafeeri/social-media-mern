import axios from "axios";


const api = "http://localhost:5000/api/v1/posts";


export const  PostsURL = `${api}/`;
export const  PostIdURL = (id) => `${api}/${id}`;