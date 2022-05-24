import axios from 'axios'

export default function PostAPI() {

    const fetchPostAPI = (url) => axios.get(url).then((res) => { return res.data}).catch((err) => {return err});
    const createPostAPI = (url, postData) => axios.post(url, postData).then((res) => { return res.data}).catch((err) => {return err});
    const deletePostAPI = (url) => axios.delete(url).then((res) => { return res.data}).catch((err) => {return err});
    const updatePostAPI = (url, postData) => axios.put(url, postData).then((res) => { return res.data}).catch((err) => {return err});
    const singlePostAPI = (url) => axios.get(url).then((res) => { return res.data}).catch((err) => {return err});

    return {fetchPostAPI, createPostAPI, deletePostAPI, updatePostAPI, singlePostAPI}
  
}
