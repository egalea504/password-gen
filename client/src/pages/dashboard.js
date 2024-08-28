import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import MainListItems from './dashboardList';
import AddPasswordInfo from './addPassword';
import PasswordList from './PasswordList';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const drawerWidth = 220;

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  marginLeft: drawerWidth,
  width: `calc(100% - ${drawerWidth}px)`,
  
}));

const Drawer = styled(MuiDrawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    boxSizing: 'border-box',
    backgroundColor: "white"
  },
}));

const defaultTheme = createTheme(
  {
    typography: {
      fontFamily: 'Thunder-SemiBoldLC, Arial, sans-serif', // Fallback fonts
    },
    palette: {
      primary: {
        main: '#00796b',
        fontFamily: 'Thunder-SemiBoldLC', 
        fontSize: '2rem'
      },
      secondary: {
        main: '#ef5350',
      },
    },
  }
);

export default function Dashboard() {
  const [section, setSection] = React.useState('AddPasswordInfo');

  const navigate = useNavigate();

  const handleSectionChange = (section) => {
    setSection(section);
  }

  const handleLogOut = () => {
  Axios.post('http://localhost:3001/logout')
        .then((response) => {
          if (response.status === 200) { // Ensure success status
            setTimeout(() => {
              navigate('/'); // Delay the redirect by 3 seconds
              // setUser(null); // Clear user state
            }, 4000);
          } else {
            console.error('Unexpected response during logout');
          }
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
          };
        });
      };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute">
          <Toolbar
            sx={{
              pr: '20px', // keep right padding when drawer closed
              backgroundColor: "white",
            }}
          >
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {/* Welcome {userName} ! */}
              </Typography>
            <Button
                color="primary"
                sx={{ ml: "20px", backgroundColor: "black", fontFamily: 'Thunder-SemiBoldLC', fontSize: '1rem'}}
                variant="contained"
                size="small"
                component="a"
                href="/"
                onClick={handleLogOut}
              >
                Log Out
              </Button>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent">
          <Divider />
          <List component="nav">
            <MainListItems handleSectionChange={handleSectionChange} />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: "white",
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                fontFamily: 'Thunder-SemiBoldLC', fontSize: '2rem'
              }}
            >
              {/* {section === 'Profile' && <Profile />} */}
              {section === 'AddPasswordInfo' && <AddPasswordInfo />}
              {section === 'PasswordList' && <PasswordList />}
              {/* Add other sections here */}
            </Paper>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
