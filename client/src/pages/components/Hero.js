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
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'white'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 25 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '100%' } }}>
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(10rem, 20vw, 4rem)',
              fontFamily: 'Thunder-BoldLC',
              lineHeight: '9rem'
            }}
          >
            PASSWORD MANAGEMENT AT YOUR FINGERTIPS
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '100%' }, fontFamily: 'Thunder-SemiBoldLC', fontSize: '2rem', color: 'black'}}
          >
            keypAway stores all your passwords in a safe space, making it easy to access them from anywhere.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <Button variant="contained"
            size="large"
            color="primary" 
            href="http://localhost:3000/signup"
            sx={{fontFamily: 'Thunder-SemiBoldLC', fontSize: '1.5rem', color: "white", backgroundColor:'black', boxShadow:"none",
              '&:hover': {
      backgroundColor: 'white', // Change background color on hover
      color: 'black',              // Change text color on hover
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' // Add shadow on hover
    }
            }}>
              Start now
            </Button>
          </Stack>
        </Stack>
        <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            alignSelf: 'center',
            height: { xs: 200, sm: 700 },
            width: '100%',
            backgroundImage:
              theme.palette.mode === 'light'
                ? 'url("/static/images/templates/templates-images/hero-light.png")'
                : 'url("/static/images/templates/templates-images/hero-dark.png")',
            backgroundSize: 'cover',
            borderRadius: '10px',
            outline: '1px solid',
            outlineColor:
              theme.palette.mode === 'light'
                ? alpha('#dcfaeb', 0.5)
                : alpha('#293d32', 0.1),
            boxShadow:
              theme.palette.mode === 'light'
                ? `0 0 12px 8px ${alpha('#dcfaeb', 0.2)}`
                : `0 0 24px 12px ${alpha('#293d32', 0.2)}`,
          })}
        />
      </Container>
    </Box>
  );
}