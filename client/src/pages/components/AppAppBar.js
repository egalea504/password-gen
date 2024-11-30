import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// import ToggleColorMode from './toggleColorMode';


function AppAppBar({ mode, toggleColorMode }) {

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'white',
          backgroundImage: 'none',
        }}
      >
        <Container maxWidth="xlg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
                fontFamily: "Modak",
                fontSize: "2.5rem",
                paddingLeft: "1.5rem"
              }}
            >keypAway
              
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 2.2,
                alignItems: 'center',
              }}
            >
              {/* <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} /> */}
              <Button
  variant="outlined" // Makes the button outlined
  size="small"
  component="a"
  href="http://localhost:3000/signin"
  disableElevation="true"
  sx={{
    fontSize: '1.0rem',
    color: "black", 
    borderColor: "black", // Ensures the border is black
    borderRadius: "25px", // Rounds the edges
    padding: "5px 20px", // Adjusts padding for rounded look
    fontWeight: "bold", // Makes the text bold
    "&:hover": {
      backgroundColor: "transparent", // Keeps the background unchanged on hover
      borderColor: "black", // Ensures border stays black on hover
    }
  }}
>
  SIGN IN
</Button>
<Button
  variant="contained" // Makes the button filled
  size="small"
  component="a"
  href="http://localhost:3000/signup"
  disableElevation="true"
  sx={{
    fontSize: '1.0rem',
    color: "white", // White text color
    backgroundColor: "black", // Solid black background
    borderColor: "black", // Ensures the border is black
    borderRadius: "25px", // Rounds the edges
    padding: "5px 20px", // Adjusts padding for rounded look
    fontWeight: "bold", // Makes the text bold
    "&:hover": {
      backgroundColor: "black", // Keeps the background unchanged on hover
    }
  }}
>
  SIGN UP
</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;

