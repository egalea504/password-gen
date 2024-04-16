import React from "react";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import StorageIcon from '@mui/icons-material/Storage';
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';

const MainListItems = ({handleSectionChange}) => {

  return (
    <React.Fragment>
      <ListItemButton onClick={() => handleSectionChange('AddPasswordInfo')}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItemButton>
      <ListItemButton onClick={() => handleSectionChange('AddPasswordInfo')}>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="Add Password" />
      </ListItemButton>
      <ListItemButton onClick={() => handleSectionChange('PasswordList')}>
        <ListItemIcon>
          <StorageIcon />
        </ListItemIcon>
        <ListItemText primary="All Items" />
      </ListItemButton>
      <ListItemButton onClick={() => handleSectionChange('Favorites')}>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Favorites" />
      </ListItemButton>
    </React.Fragment>
  );
};

export default MainListItems;
