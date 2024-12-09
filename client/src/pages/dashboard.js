import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("AllPasswords");

  const menuItems = [
    { id: "AddPassword", label: "Add New Password" },
    { id: "AllPasswords", label: "All Passwords" },
    { id: "Favorites", label: "Favorites" },
  ];

  const otherMenuItems = [
    { id: "Archive", label: "Archive" },
    { id: "RecentlyDeleted", label: "Recently Deleted" },
    { id: "Settings", label: "Settings" },
  ];

  const renderActiveSection = () => {
    switch (activeSection) {
      case "AddPassword":
        return <Typography variant="h5">Add New Password</Typography>;
      case "AllPasswords":
        return <Typography variant="h5">All Passwords</Typography>;
      case "Favorites":
        return <Typography variant="h5">Favorites</Typography>;
      case "Archive":
        return <Typography variant="h5">Archive</Typography>;
      case "RecentlyDeleted":
        return <Typography variant="h5">Recently Deleted</Typography>;
      case "Settings":
        return <Typography variant="h5">Settings</Typography>;
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
    <Box display="flex" flexDirection="column" height="100vh">
      {/* Toolbar */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        paddingLeft="1.5rem"
        paddingRight="1.5rem"
        bgcolor="#FFFFFF"
        color="black"
      >
        <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                px: 0,
                fontFamily: "Modak",
                fontSize: "1.5rem",
                paddingLeft: "1.5rem"
              }}
              
            >

<Stack
      direction="column"
      sx={{ justifyContent: 'right' }}
    >
              keypAway
                        <Typography sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: "1rem",
              }}>
            Individual Plan
          </Typography>
          </Stack>
          <Box sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: "1rem",
                paddingLeft: "150px"
              }}>
          {renderActiveSection()}
          </Box>

            </Box>
            <Button
  variant="outlined" // Makes the button outlined
  size="small"
  component="a"
  href="http://localhost:3000"
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
  SIGN OUT
</Button>
      </Box>

      {/* Main Layout */}
      <Box display="flex" flexGrow={1}>
        {/* Sidebar */}
        <Box>
        <Box
          width="250px"
          padding="16px"
          bgcolor="white"
        >

          {menuItems.map((item) => (
            <Box
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              sx={{
                padding: "12px 16px",
                margin: "8px 0",
                borderRadius: "15px",
                cursor: "pointer",
                backgroundColor:
                  activeSection === item.id ? "#e0e0e0" : "transparent",
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                },
              }}
            >
              {item.label}
            </Box>
          ))}

        </Box>

        <Box
          width="250px"
          padding="16px"
          bgcolor="white"
          borderTop="solid #A8A8A8"
        >

          {otherMenuItems.map((item) => (
            <Box
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              sx={{
                padding: "12px 16px",
                margin: "8px 0",
                borderRadius: "15px",
                cursor: "pointer",
                backgroundColor:
                  activeSection === item.id ? "#e0e0e0" : "transparent",
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                },
              }}
            >
              {item.label}
            </Box>
          ))}

        </Box>
        </Box>
        

        {/* Main Content */}
        <Box flexGrow={1} marginLeft="20px" padding="24px" borderRadius="15px" border="solid #A8A8A8">
         
        </Box>
      </Box>
    </Box>
    </ThemeProvider>
  );
};

export default Dashboard;

