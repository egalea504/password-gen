import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// import ToggleColorMode from './toggleColorMode';

import keypAwayLogo from './keypaway2.png'

const logoStyle = {
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
  alignItems: 'center',
  margin: '20px',
  padding: '20px'
};

function AppAppBar({ mode, toggleColorMode }) {

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2 ,
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
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? '#0000'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider'
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <img
                src={keypAwayLogo
                }
                style={logoStyle}
                alt="logo of keypAway"
              />
              
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              {/* <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} /> */}
              <Button
                color="primary"
                variant="text"
                size="small"
                component="a"
                href="http://localhost:3000/signin"
                sx={{fontFamily: 'Thunder-SemiBoldLC', fontSize: '1.2rem', color: "black"}}
              >
                Sign in
              </Button>
              <Button
                color="primary"
                variant="text"
                size="small"
                component="a"
                href="http://localhost:3000/signup"
                sx={{fontFamily: 'Thunder-SemiBoldLC', fontSize: '1.2rem', color: "black"}}
              >
                Sign up
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

