import React, { useState } from "react"
import { connect } from "react-redux"
import { userLogin } from "react-admin"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import Link from "@material-ui/core/Link"
import Paper from "@material-ui/core/Paper"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import AlertLogin from "./alert"
import { useLocation } from "react-router-dom"
import queryString from "query-string"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="http://smart.rancagua.cl/">
        Corporación de Desarrollo e Innovación de Rancagua
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}
function MyLoginPage(props) {
  const location = useLocation()
  const { sessionExpired } = queryString.parse(location.search)
  const [open] = React.useState(sessionExpired ? true : false)
  const [message] = React.useState(
    sessionExpired ? "su sessión ha expirado, por favor vuelva a ingresar" : "",
  )

  let [username, setUsername] = useState("")
  let [password, setPassword] = useState("")

  const useStyles = makeStyles((theme) => ({
    root: {
      height: "100vh",
    },
    image: {
      background:
        "url(/assets/img/credential/logo.png) #F51457 no-repeat center center ",
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }))
  const submit = (e) => {
    e.preventDefault()
    // gather your data/credentials here
    const credentials = { username: username, password: password }
    //console.log(e)
    // Dispatch the userLogin action (injected by connect)
    props.userLogin(credentials)
  }

  const classes = useStyles()
  const handleChangeUsuario = (event) => {
    setUsername(event.target.value)
  }
  const handleChangePassword = (event) => {
    setPassword(event.target.value)
  }
  return (
    <Grid container component="main" className={classes.root}>
      <div>
        <AlertLogin opened={open} message={message}></AlertLogin>
      </div>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sitio de Administración Web App Rancagua
          </Typography>
          <form className={classes.form} noValidate onSubmit={submit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Usuario"
              label="Usuario"
              name="Usuario"
              autoComplete="Usuario"
              autoFocus
              onChange={handleChangeUsuario.bind(this)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="Contraseña"
              onChange={handleChangePassword.bind(this)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recordar Contraseña"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Enviar
            </Button>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  )
}

export default connect(undefined, { userLogin })(MyLoginPage)
