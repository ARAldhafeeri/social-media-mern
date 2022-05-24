import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react'
import Post from './Post/Post'
import useStyles from "./styles"


export default function Posts({ passDataToForm, post, _deletePost, _findPost, _updatePost }) {
  const styles = useStyles();
 
  return (
    <React.Fragment>
    {!post?.length ? <CircularProgress /> : (
      <Grid className={styles.mainContainer} container alignItems="stretch" spacing={2}>
      {post?.map((p) => (
        <Grid key={p._id} item xs={12} sm={6}>
        <Post post={p} key={p._id}  _deletePost={_deletePost} _findPost={_findPost} _updatePost={_updatePost} passDataToForm={passDataToForm} />
        </Grid>
      ))}
      </Grid>

    )}
      
    </React.Fragment>
  )
}
