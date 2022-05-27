import React from "react";
import './App.css';
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import {Container} from "@material-ui/core";
import { BrowserRouter, Switch, Route} from "react-router-dom"
import Auth from "./components/Auth/Auth";


function App() {
  return (
    <BrowserRouter>
      <Container maxidth="lg">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth"  component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
