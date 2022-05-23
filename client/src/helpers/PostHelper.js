import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts, deletePost, updatePost, findPost } from '../store/actions/post';

export default function PostHelper() {
  const { post } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllPosts());
  }, [])

const _deletePost = (id) => {
  dispatch(deletePost(id));
};

const _updatePost = (id, post) => {
  dispatch(updatePost(id, post));
};

const _findPost = (id) => {
  dispatch(findPost(id, post));
};



return {post, _deletePost, _findPost, _updatePost};

}
