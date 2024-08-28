// displays name and email address used
// + secret key? to develop later

// profile on hold
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { UserContext } from '../App';
import { Avatar } from '@mui/material';

const Profile = () => {

  const { user } = useContext(UserContext);

  const userName = user.name;

  return(
  <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              <Avatar src="/broken-image.jpg" variant="rounded"/>
              {userName}
            </Typography>

            
  )}

  export default Profile;
