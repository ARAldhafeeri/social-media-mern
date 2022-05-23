import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {createPost, updatePost} from "../store/actions/post"
export default function FormHelper() {
    const dispatch = useDispatch();
    const [currentId , setCurrentId] = React.useState(null); // updateForm shared sate between Form, Post
    const [postData, setPostData] = React.useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        if(currentId){
            dispatch(updatePost(currentId, postData))
            console.log("dispatch update")
        } else {
            dispatch(createPost(postData));
            console.log("dispatch create")
        }
    }

    const clearForm = () => {

    }
    const passDataToForm = (post) => {
        setPostData(post); 
        setCurrentId(post._id); 
      }

    return  {postData, setPostData, clearForm, handleSubmit, passDataToForm, currentId  }

}
