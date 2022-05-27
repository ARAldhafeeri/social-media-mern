import React from 'react'
import { TextField, Grid, InputAdornment, IconButton} from "@material-ui/core";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export default function Input({ name, half, label, autoFocus, type, handleChange,  handleShowPassword }) {
  return (
    <Grid item xs={12} sm={half ? 6 : 12} >
        <TextField
            name={name}
            onChange={handleChange}
            variant="outlined"
            required
            fullWidth
            label={label}
            autoFocus={autoFocus}
            type={type}
            InputProps={name === 'password' && {
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword}>
                            { type === "password" ? <AiFillEye /> : <AiFillEyeInvisible />}
                        </IconButton>
                    </InputAdornment>
               )}
            } 
            />

    </Grid>
  )
}
