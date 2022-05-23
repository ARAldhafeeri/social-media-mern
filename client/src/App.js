import React from "react";
import {Container, AppBar, Typography, Grow, Grid} from "@material-ui/core";
import './App.css';
import logo from "./images/logo.jpg"
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form"; 
import useStyles from "./styles"
import {useDispatch} from "react-redux";

function App() {
  const styles = useStyles();
  const dispatch = useDispatch();
  return (
    <Container maxidth="lg">
      <AppBar className={styles.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">Socio</Typography>
        <img className={styles.image} src={logo} alt="socio" height={60} width={60} />
      </AppBar>
      <Grow in >
        <Container>
        <Grid container justifyContent="space-between" alignItems="stretch" spacing={4}>
          <Grid item xs={12} sm={7}>
            <Posts />
          </Grid>
            <Grid />
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
