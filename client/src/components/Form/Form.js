import { Button, Paper, TextField } from '@material-ui/core';
import React from 'react'
import useStyles from "./styles"
import FileBase from "react-file-base64";

export default function Form({ postData, clearForm, setPostData, handleSubmit }) {
  const styles = useStyles();
  return (
    <Paper className={styles.paper}>
      <form autoComplete='off' 
            noValidate 
            className={`${styles.form} ${styles.root}`} 
            onSubmit={(e) => handleSubmit(e)}>
      <TextField 
        name="creator" 
        variant="outlined" 
        label="creator" 
        fullWidth
        value={postData.creator}
        onChange={ (e)=> setPostData({ ...postData, creator: e.target.value }) }
        />
        <TextField 
        name="Title" 
        variant="outlined" 
        label="Title" 
        fullWidth
        value={postData.title}
        onChange={ (e)=> setPostData({ ...postData, title: e.target.value }) }
        />
        <TextField 
        name="Message" 
        variant="outlined" 
        label="Message" 
        fullWidth
        value={postData.message}
        onChange={ (e)=> setPostData({ ...postData, message: e.target.value }) }
        />
        <TextField 
        name="Tags" 
        variant="outlined" 
        label="Tags" 
        fullWidth
        value={postData.tags}
        onChange={ (e)=> setPostData({ ...postData, tags: e.target.value }) }
        />
        <div className={styles.fileInput}>
          <FileBase 
            type="file" 
            multiple={false}
            onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
            />
        </div>
        <Button 
          className={styles.buttonSubmit} 
          variant="contained" 
          color="primary" 
          size="large" 
          type="submit" 
          fullWidth>
          Submit
        </Button>
        <Button 
          className={styles.buttonSubmit} 
          variant="contained" 
          color="secondary" 
          size="small" 
          onClick={() => clearForm() }
          fullWidth>
          Clear
        </Button>
      
      </form>
    </Paper>
  )
}
