import { Card, CardContent, Typography, CardMedia,CardActions, Button  } from '@material-ui/core';
import React from 'react'
import useStyles from "./styles"
import moment from "moment";
import { GiBoatHorizon } from "react-icons/gi";
import { BsHandThumbsUp } from "react-icons/bs"
import { AiFillDelete } from "react-icons/ai";
import PostHelper from '../../../helpers/PostHelper';
import FormHelper from '../../../helpers/FormHelper';

export default function Post( { post }) {
  const styles = useStyles();
  const {_deletePost, _findPost, _updatePost} = PostHelper();
  const { passDataToForm } = FormHelper();

  return (
    <Card className={styles.card}>
      <CardMedia className={styles.media} image={post.selectedFile} title={post.title} />
      <div className={styles.overlay}>
      <Typography variant="h6">{post.creator}</Typography>
      <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={styles.overlay2}>
        <Button style={{color: "white"}} size="small" onClick={()=> passDataToForm(post) }>
            <GiBoatHorizon  fontSize="default" />
        </Button>
      </div>
        <div className={styles.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => {return `# ${tag} `})}
        </Typography>
      </div>
      <CardContent>
        <Typography variant="body2" color="textPrimary">
        {post.message}
        </Typography>
      </CardContent>
      <CardActions className={styles.cardActions}>
        <Button color="primary" onClick={()=> {} }>
            <BsHandThumbsUp size={30} />{post.likeCount}
        </Button>
        <Button  color="primary" onClick={()=> _deletePost(post._id) }>
          <AiFillDelete size={30} />
        </Button>
      </CardActions>
    </Card>
  )
}
