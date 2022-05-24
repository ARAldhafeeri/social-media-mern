import React from "react";
import {Container, AppBar, Typography, Grow} from "@material-ui/core";
import './App.css';
import logo from "./images/logo.jpg"
import useStyles from "./styles"
import FormPostContainer from "./containers/FormPostContainer";


function App() {
  const styles = useStyles();

  return (
    <Container maxidth="lg">
      <AppBar className={styles.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">Socio</Typography>
        <img className={styles.image} src={logo} alt="socio" height={60} width={60} />
      </AppBar>
      <Grow in >
        <FormPostContainer styles={styles} />
      </Grow>
    </Container>
  );
}

export default App;
