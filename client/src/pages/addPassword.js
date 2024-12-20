import React, { useState } from "react";
import Axios from 'axios';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const defaultTheme = createTheme(
  {
    typography: {
      fontFamily: 'Martel Sans, sans-serif'
    },
    palette: {
      primary: {
        main: '#black',
      },
      secondary: {
        main: '#white',
      },
    },
  }
);

const AddPasswordInfo = () => {

	const [password, setPassword] = useState("");
	const [title, setTitle] = useState("");

  const [city, setCity] = useState("");
	const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");

  const generatePassword = () => {

  }

		const addPassword = () => {
				Axios.post('http://localhost:3001/addpassword', {
					password: password,
					title: title
				})
					.then((response) => {
						console.log('Password added:', { password, title });
						setPassword('');
						setTitle('');
						console.log("It worked!!");
					})
					.catch((error) => {
						if (error.response) {
							console.log(error.response.data);
						}
					});
			};

	return (
		<ThemeProvider theme={defaultTheme}>
			<CssBaseline />
			{/* using MUI box component to match style from other forms - implemented logic built from initial add password (in comments) */}
			<Typography component="h1" variant="h5">
            Add Password
          </Typography>

          <Box component="form" onSubmit={generatePassword} noValidate sx={{ mt: 1 }}>
          <Typography component="h2" variant="h5">
            Generate a password
          </Typography>

          <Typography component="h2" variant="h6">
          What is a city you like that you have visited?
          </Typography>
			<TextField
              margin="normal"
              required
              fullWidth
              id="city"
              label="City"
              name="city"
              autoComplete="city"
              autoFocus
							onChange={(event)=> {
								setCity(event.target.value);
								console.log(city);
							}}
            />

<Typography component="h2" variant="h6">
What is a word that you like (do not type a name) ?
          </Typography>
			<TextField
              margin="normal"
              required
              fullWidth
              id="word1"
              label="Word"
              name="word1"
              autoComplete="word1"
              autoFocus
							onChange={(event)=> {
								setWord1(event.target.value);
								console.log(word1);
							}}
            />

<Typography component="h2" variant="h6">
What is a second word that you like (do not type a name) ?
          </Typography>
			<TextField
              margin="normal"
              required
              fullWidth
              id="word2"
              label="Word"
              name="word2"
              autoComplete="word2"
              autoFocus
							onChange={(event)=> {
								setWord2(event.target.value);
								console.log(word2);
							}}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Generate Password
            </Button>
						</Box> 
			 <Box component="form" onSubmit={addPassword} noValidate sx={{ mt: 1 }}>
			<TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoComplete="title"
              autoFocus
							onChange={(event)=> {
								setTitle(event.target.value);
								console.log(title);
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
							onChange={(event)=> {
								setPassword(event.target.value);
								console.log(password);
							}}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Password
            </Button>
						</Box> 
		</ThemeProvider>
	)
};


export default AddPasswordInfo;