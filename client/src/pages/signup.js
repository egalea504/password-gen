import * as React from 'react';
import { useState, useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Axios from 'axios';
import ErrorOutlineSharpIcon from '@mui/icons-material/ErrorOutlineSharp';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../App';

const defaultTheme = createTheme(
  { fontFamily: 'Thunder-SemiBoldLC', 
    fontSize: '1.5rem',
    palette: {
      primary: {
        main: '#000000',
      },
      secondary: {
        main: '#ef5350',
      },
    },
  }
);

export default function SignUp() {

  // state to store all user inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);

  // this state takes in error messages and displays them to the user after validation
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email) => {
   const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
   return regex.test(email);
  }

  // this resets the error message when user inputs data in field
  const handleChangeField = (field, value) => {
    // Clear error message if any field is updated
    setErrorMessage('');

    // Update the respective field's state
    switch (field) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
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
    // prevent default form action
    event.preventDefault();

    if (firstName.length === 0) {
      setErrorMessage('First name can not be empty.');
      return;
    }

    if (lastName.length === 0) {
      setErrorMessage('Last name can not be empty.');
      return;
    }

    if (email.length === 0) {
      setErrorMessage('Email can not be empty.');
      return;
    }

    if (password.length === 0) {
      setErrorMessage('Password can not be empty.');
      return;
    }

    // use regex to validate email and send error if validation doesn't pass
    if (!validateEmail(email)) {
      setErrorMessage("Email is not valid.");
      return;
    }

    if (password.length < 8) {
      setErrorMessage(
        'Password must contain greater than or equal to 8 characters.',
      )
      return;
    }

    // make post request to register info in db
      Axios.post('http://localhost:3001/signup', {
      first_name: firstName,
      last_name: lastName,
      email,
      password
    })
    .then((response) => {
      if (response) {
        setUser(response.data.user);
        navigate('/dashboard');
      }
      // console.log(response);
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
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5" sx={{fontFamily: 'Thunder-SemiBoldLC', fontSize: '1.3rem', color: "black"}}>
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3}}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(e) => handleChangeField('firstName',e.target.value)}
                  InputProps={{
                    style: { fontFamily: 'Thunder-SemiBoldLC', fontSize: '1.1rem', letterSpacing:"0.02rem"},
                  }}
                  InputLabelProps={{
                    style: { fontFamily: 'Thunder-SemiBoldLC', fontSize: '1.1rem', letterSpacing:"0.02rem"},
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e) => handleChangeField('lastName',e.target.value)}
                  InputProps={{
                    style: { fontFamily: 'Thunder-SemiBoldLC', fontSize: '1.1rem', letterSpacing:"0.02rem"},
                  }}
                  InputLabelProps={{
                    style: { fontFamily: 'Thunder-SemiBoldLC', fontSize: '1.1rem', letterSpacing:"0.02rem"},
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => handleChangeField('email',e.target.value)}
                  InputProps={{
                    style: { fontFamily: 'Thunder-SemiBoldLC', fontSize: '1.1rem' , letterSpacing:"0.02rem"},
                  }}
                  InputLabelProps={{
                    style: { fontFamily: 'Thunder-SemiBoldLC', fontSize: '1.1rem', letterSpacing:"0.02rem"},
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => handleChangeField('password',e.target.value)}
                  InputProps={{
                    style: { fontFamily: 'Thunder-SemiBoldLC', fontSize: '1.1rem', letterSpacing:"0.02rem"},
                  }}
                  InputLabelProps={{
                    style: { fontFamily: 'Thunder-SemiBoldLC', fontSize: '1.1rem', letterSpacing:"0.02rem"},
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
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, fontFamily: 'Thunder-SemiBoldLC', fontSize: '1.5rem', color: "white", backgroundColor: "black"}}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="http://localhost:3000/signin" variant="body2"
                sx={{ fontFamily: 'Thunder-SemiBoldLC', fontSize: '1.3rem', color: "black"}}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}