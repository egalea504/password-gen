import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import example from './Group 10.png'


export default function Hero() {
  return (
    <Box
    id="hero"
    sx={(theme) => ({
      width: '100%',
      height: '100vh', // Full viewport height for the hero section
      backgroundSize: '100% 20%',
      backgroundRepeat: 'no-repeat',
      display: 'flex', // Use Flexbox for layout
      backgroundColor: '#A6C1FF'
    })}
    >
{/* Left Box: 60% */}
<Box
    sx={{
      flex: 6, // 60% width
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '2rem',
    }}
  >
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingLeft: '4rem',
      paddingRight: '4rem'
    }}
      >
    <Typography
      variant="h1"
      sx={{
        textAlign: 'left',
        fontSize: '4.0rem',
        fontFamily: 'Modak',
        lineHeight: '4rem',
      }}
    >
      PASSWORD MANAGEMENT AT YOUR FINGERTIPS
    </Typography>
    <Typography
      variant="h1"
      sx={{
        textAlign: 'left',
        fontSize: '1.1rem',
        lineHeight: '1.5srem',
        paddingRight: '250px'
      }}
    >
      keypAway stores all your passwords in a safe space, making it easy to access them from anywhere.
    </Typography>
    </Box>
    <Stack
      direction="row"
      spacing={2}
      sx={{ mt: 10, justifyContent: 'center' }}
    >
      <Button
  variant="outlined" // Makes the button outlined
  size="small"
  component="a"
  href="http://localhost:3000/signin"
  disableElevation="true"
  sx={{
    fontSize: '0.8rem',
    color: "black", 
    backgroundColor: "white",
    borderColor: "black", // Ensures the border is black
    borderRadius: "25px", // Rounds the edges
    padding: "5px 40px", // Adjusts padding for rounded look
    fontWeight: "bold", // Makes the text bold
    "&:hover": {
      backgroundColor: "white", // Keeps the background unchanged on hover
      borderColor: "black", // Ensures border stays black on hover
    }
  }}
>
  GET STARTED
</Button>
<Button
  variant="contained" // Makes the button filled
  size="small"
  component="a"
  href="http://localhost:3000/signup"
  disableElevation="true"
  sx={{
    fontSize: '0.8rem',
    color: "white", // White text color
    backgroundColor: "black", // Solid black background
    borderRadius: "25px", // Rounds the edges
    padding: "5px 40px", // Adjusts padding for rounded look
    fontWeight: "bold", // Makes the text bold
    "&:hover": {
      backgroundColor: "black", // Keeps the background unchanged on hover
    }
  }}
>
  LEARN MORE
</Button>
    </Stack>
  </Box>

  {/* Right Box: 40% */}
  <Box
    sx={{
      flex: 4, // 40% width
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '10px',
      backgroundColor: '#CEE7FF'
    }}
    >

{/* <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      borderRadius: '15px',
      border: 'solid',
      padding: '0rem 1.2rem 4.5rem'
    }}
      >
<Stack
direction="column"
spacing={2}
sx={{ mt: 5.5, justifyContent: 'center' }}
>

<Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#E9E9E9',
      borderRadius: '15px'
    }}
      >
  
<Typography
      variant="h1"
      sx={{
        textAlign: 'center',
        lineHeight: '1.5srem',
        fontSize: '2.8rem',
        fontFamily: 'Modak',
        padding: '1rem 3.5rem 0rem 3.5rem',
      }}
    >
      nh9UB*aK_9
    </Typography>
    <Typography
      variant="h1"
      sx={{
        textAlign: 'left',
        fontSize: '1.1rem',
        fontWeight: 'bolder',
        color: '#656565',
        padding: '0rem 2rem 1.5rem'
      }}
    >
      eli@keypaway.com
    </Typography>

   
      
      </Box>

      <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#E9E9E9',
      borderRadius: '15px'
    }}
      >

<Typography
      variant="h1"
      sx={{
        textAlign: 'center',
        lineHeight: '1.5srem',
        fontSize: '0.8rem',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'black',
        borderRadius: '15px',
        padding: '1rem',
      }}
    >
      GENERATE NOW
    </Typography>
      
      </Box>

      </Stack>
      </Box> */}

<img src={example} style={{ width: '30rem', height: 'auto' }}/>

    </Box>



    </Box>
  );
}