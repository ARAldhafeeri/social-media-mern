import React from 'react'
import logo from "../../images/logo.jpg"
import { AppBar, Avatar, Button,  Toolbar, Typography } from "@material-ui/core";
import useStyles from "./styles"
import { Link } from "react-router-dom"

export default function NavBar() {
  const styles = useStyles();
  const user = null;
  return (
    <AppBar className={styles.appBar} position="static" color="inherit">
        <div classname={styles.brandContainer}>
          <Typography component={Link} to="/" variant="h2" align="center">Socio</Typography>
          <img className={styles.image} src={logo} alt="socio" height={60} width={60} />
        </div>
        <Toolbar className={styles.toolbar}>
          {user ? (
            <div className={styles.profile}>
              <Avatar className={styles.avatar} alt={user.reslut.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
              <Typography className={styles.userName} variant="h6">{user.result.name}</Typography>
              <Button variant="contained" className={styles.logout} color="secondary">Logout</Button>

            </div>
          ): (
            <Button component={Link} to="/auth" variant="contained">Sign in</Button>
          )}
        </Toolbar>
    </AppBar>
  )
}
