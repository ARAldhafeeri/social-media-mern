import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react'
import PostHelper from '../../helpers/PostHelper';
import Post from './Post/Post'
import useStyles from "./styles"


export default function Posts() {
  const styles = useStyles();
  const { post } = PostHelper();

  return (
    <React.Fragment>
    {!post?.length ? <CircularProgress /> : (
      <Grid className={styles.mainContainer} container alignItems="stretch" spacing={2}>
      {post?.map((p) => (
        <Grid key={p._id} item xs={12} sm={6}>
        <Post post={p} key={p._id} />
        </Grid>
      ))}
      </Grid>

    )}
      
    </React.Fragment>
  )
}
