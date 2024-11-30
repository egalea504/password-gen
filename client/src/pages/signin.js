// sign in template MUI

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ErrorOutlineSharpIcon from '@mui/icons-material/ErrorOutlineSharp';
import { useState, useContext } from 'react';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../App';

  const defaultTheme = createTheme({
    typography: {
      fontFamily: 'Martel Sans, sans-serif',
    },
    palette: {
      primary: {
        main: '#00796b',
      },
      secondary: {
        main: '#ef5350',
      },
    },
  });

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

    // this resets the error message when user inputs data in field
    const handleChangeField = (field, value) => {
      // Clear error message if any field is updated
      setErrorMessage('');
  
      // Update the respective field's state
      switch (field) {
        case 'email':
          setEmail(value);
          break;
        case 'password':
          setPassword(value);
          break;
        default:
          break;
      }
    };

    Axios.defaults.withCredentials = true;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.length === 0) {
      setErrorMessage('Email can not be empty.');
      return;
    }

    if (password.length === 0) {
      setErrorMessage('Password can not be empty.');
      return;
    }

        // make post request to register info in db
        Axios.post('http://localhost:3001/signin', {
          email,
          password
        })
        .then((response) => {
          if (response) {
            //sets global user to data user
            setUser(response.data.user);
            navigate('/dashboard')
          }
        })
        .catch((error) => {
          if (error.response) {
            setErrorMessage(error.response.data);
          };
        });
      };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#000000' }}>
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ fontSize: '1.1rem', color: "black"}}>
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => handleChangeField('email',e.target.value)}
              InputProps={{
                style: {fontSize: '1.1rem', letterSpacing:"0.02rem", borderRadius: '15px'},
              }}
              InputLabelProps={{
                style: {fontSize: '1.1rem', letterSpacing:"0.02rem"},
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => handleChangeField('password',e.target.value)}
              InputProps={{
                style: {fontSize: '1.1rem', letterSpacing:"0.02rem", borderRadius: '15px'},
              }}
              InputLabelProps={{
                style: {fontSize: '1.1rem', letterSpacing:"0.02rem"},
              }}
            />
            {errorMessage && (
        <Box display="flex" alignItems="center" mt={2}>
          {/* displays the MUI icon */}
          <ErrorOutlineSharpIcon color="error" />

          {/* displays the error message */}
          <Typography color="error" ml={1}>
            {errorMessage}
          </Typography>
          </ Box>)}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,fontSize: '1.1rem', color: "white", backgroundColor: "black", borderRadius: '15px'}}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
                <Link href="http://localhost:3000/signup" variant="body2"
                sx={{fontSize: '1rem', color: "black"}}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}