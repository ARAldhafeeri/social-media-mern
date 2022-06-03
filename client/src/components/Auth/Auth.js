import React from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from "@material-ui/core";
import useStyle from "./styles"
import { AiFillAccountBook, AiFillGoogleCircle } from 'react-icons/ai';
import AuthHelper from '../../helpers/AuthHelper';
import {GoogleLogin} from "react-google-login"
import Input from './Input';

export default function Auth() {
    const { handleSubmit, handleChange, isSignup, responseGoogleSuccess,responseGoogleFailure,  handleShowPassword, showPassword, handleToggleForms } = AuthHelper();
    const styles= useStyle();
  return (
    <Container component="main" maxWidth="xs">
        <Paper className={styles.paper} elevation={3}>
            <Avatar className={styles.avatar}>
            <AiFillAccountBook />
            </Avatar>
            <Typography variant="h5">{isSignup? "Sign up": "Sign In"}</Typography>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                {
                    isSignup && (
                        <React.Fragment>
                            <Input name="FirstName" label="First Name" handleChange={handleChange} half autoFocus />
                            <Input name="FirstName" label="First Name" handleChange={handleChange} />
                        </React.Fragment>
                    ) 
                }
                <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                <Input name="password" label="Password" handleChange={handleChange} handleShowPassword={handleShowPassword} type={showPassword? "text": "password"}   />
                { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"  />}
                </Grid>
                <GoogleLogin 
                    clientId={process.env.REACT_APP_ID}
                    onSuccess={responseGoogleSuccess}
                    onFailure={responseGoogleFailure}
                    cookiePolicy="single_host_origin"
                    isSignedIn={true}
                    uxMode="page"
                    render={(renderProps) => (
                        <Button 
                            className={styles.googleButton} 
                            fullWidth 
                            onClick={renderProps.onClick} 
                            disabled={renderProps.disable} 
                            color="primary" 
                            variant="contained" 
                            startIcon={<AiFillGoogleCircle/>}
                            >
                                Google Sign In
                            </Button>
                    )}
                />
                <Button type="submit" fullWidth variant="contained" color="primary" className={styles.submit}>{isSignup? 'Sign up' : 'Sign in'}</Button>
                <Button fullWidth variant="contained" color="secondary" onClick={ () => handleToggleForms(isSignup)}> {isSignup? 'Have an account ?' : 'Register for an account ?'}</Button>
            </form>
        </Paper>
    </Container>
  )
}
