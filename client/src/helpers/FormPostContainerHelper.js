import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
    getAllPosts, 
    deletePost,
    createPost, 
    updatePost, 
    findPost } from '../store/actions/post';

export default function FormPostContainerHelper() {
    const { post } = useSelector((state) => state.post);
    const dispatch = useDispatch();

    const [currentId , setCurrentId] = React.useState(null); // updateForm shared sate between Form, Post
    const [postData, setPostData] = React.useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ""
    });


    React.useEffect(() => {
      dispatch(getAllPosts());
    }, [dispatch])


  const _deletePost = (id) => {
    dispatch(deletePost(id));

  };
  
  const _updatePost = (id, post) => {
    dispatch(updatePost(id, post));

  };
  
  const _findPost = (id) => {
    dispatch(findPost(id, post));

  };

  const handleSubmit = (e) => {
      e.preventDefault()
      if(currentId){ // update post
          console.log(currentId, postData)
          dispatch(updatePost(currentId, postData))
          console.log('onUpdate')
      } else { // create post
          dispatch(createPost(postData));
      }
  }

  const clearForm = () => {
      setPostData({
          creator: '', title: '', message: '', tags: '', selectedFile: ""
      })
  }
  const passDataToForm = (post) => {
      setPostData(post); 
      setCurrentId(post._id);
    }



  return {
      post, 
      _deletePost, 
      _findPost, 
      _updatePost, 
      postData, 
      setPostData, 
      clearForm, 
      handleSubmit, 
      passDataToForm, 
      currentId 
    };

}
