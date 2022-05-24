import React from 'react'
import Posts from "../components/Posts/Posts";
import Form from "../components/Form/Form"; 
import {Container,  Grid} from "@material-ui/core";
import FormPostContainerHelper from '../helpers/FormPostContainerHelper';

export default function FormPostContainer() {
    const { 
        passDataToForm, 
        clearForm, 
        postData, 
        setPostData, 
        handleSubmit, 
        post,  
        _deletePost, 
        _findPost, 
        _updatePost} = FormPostContainerHelper();
  return (
    <Container>
        <Grid container justifyContent="space-between" alignItems="stretch" spacing={4}>
        <Grid item xs={12} sm={7}>
            <Posts 
                post={post} 
                _deletePost={_deletePost} 
                _findPost={_findPost} 
                _updatePost={_updatePost} 
                passDataToForm={passDataToForm} />
        </Grid>
            <Grid />
        <Grid item xs={12} sm={4}>
            <Form 
                postData={postData} 
                clearForm={clearForm}  
                setPostData={setPostData} 
                handleSubmit={handleSubmit} />
        </Grid>
        </Grid>
    </Container>
  )
}
