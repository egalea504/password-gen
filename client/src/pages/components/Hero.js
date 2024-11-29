import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Hero() {
  return (
    <Box
    id="hero"
    sx={(theme) => ({
      width: '100%',
      height: '100vh', // Full viewport height for the hero section
      // backgroundImage:
      //   theme.palette.mode === 'light'
      //     ? 'white'
      //     : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
      backgroundSize: '100% 20%',
      backgroundRepeat: 'no-repeat',
      display: 'flex', // Use Flexbox for layout
      backgroundColor: '#A6C1FF'
    })}
    >
{/* Left Box: 60% */}
<Box
    sx={{
      flex: 6.5, // 60% width
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
      paddingLeft: '7.5rem',
      paddingRight: '5rem'
    }}
      >
    <Typography
      variant="h1"
      sx={{
        textAlign: 'left',
        fontSize: '5.5rem',
        fontFamily: 'Modak',
        lineHeight: '5rem',
      }}
    >
      PASSWORD MANAGEMENT AT YOUR FINGERTIPS
    </Typography>
    <Typography
      variant="h1"
      sx={{
        textAlign: 'left',
        fontSize: '1.2rem',
        lineHeight: '2.1rem',
      }}
    >
      keypAway stores all your passwords in a safe space, making it easy to access them from anywhere.
    </Typography>
    </Box>
    <Stack
      direction="row"
      spacing={2}
      paddingLeft="22rem"
      sx={{ mt: 4 }}
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
      backgroundColor: "transparent", // Keeps the background unchanged on hover
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
      flex: 3.5, // 40% width
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundImage:
      //   theme.palette.mode === 'light'
      //     ? 'url("/static/images/templates/templates-images/hero-light.png")'
      //     : 'url("/static/images/templates/templates-images/hero-dark.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '10px',
      backgroundColor: '#CEE7FF'
    }}
    />
    </Box>
  );
}