import React, { useState } from 'react'
import { connect } from 'react-redux'
import { userLogin } from 'react-admin'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='http://smart.rancagua.cl/'>
        Corporación de Desarrollo e Innovación de Rancagua
      </Link>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
function MyLoginPage(props) {
  let [username, setUsername] = useState('')
  let [password, setPassword] = useState('')

  const useStyles = makeStyles(theme => ({
    root: {
      height: '100vh'
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  }))
  const submit = e => {
    e.preventDefault()
    // gather your data/credentials here
    const credentials = { username: username, password: password }
    console.log(e)
    // Dispatch the userLogin action (injected by connect)
    props.userLogin(credentials)
  }
  const classes = useStyles()

  const handleChangeUsuario = event => {
    setUsername(event.target.value)
  }
  const handleChangePassword = event => {
    setPassword(event.target.value)
  }
  return (
    <MuiThemeProvider theme={props.theme}>
      <Grid container component='main' className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Project Manager Rancagua
            </Typography>
            <form className={classes.form} noValidate onSubmit={submit}>
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='Usuario'
                label='Usuario'
                name='Usuario'
                autoComplete='Usuario'
                autoFocus
                onChange={handleChangeUsuario.bind(this)}
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='password'
                label='Contraseña'
                type='password'
                id='password'
                autoComplete='Contraseña'
                onChange={handleChangePassword.bind(this)}
              />
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Recordar Contraseña'
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
              >
                Enviar
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href='#' variant='body2'>
                    Olvido su contraseña?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href='#' variant='body2'>
                    {'No tienes cuenta? Registrate'}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  )
}

export default connect(
  undefined,
  { userLogin }
)(MyLoginPage)
