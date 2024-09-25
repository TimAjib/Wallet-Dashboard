import { Avatar, Box, Button, Menu, IconButton, Typography, Stack, Divider } from '@mui/material';
import { useState, MouseEvent, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearAuthToken } from 'helpers/auth';
import paths from './../../../routes/path';

const ProfileDropdown = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleOpenDropdown = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    clearAuthToken(); // Clear the auth token
    navigate(paths.login); // Redirect to login page
    handleClose(); // Close the dropdown
  };

  return (
    <Fragment>
      <IconButton sx={{ p: 0, position: 'relative' }} onClick={handleOpenDropdown}>
        <Avatar
          alt="Profile Avatar"
          sx={{
            bgcolor: 'primary.main',
            color: 'common.white',
            width: { xs: 40, md: 45, xl: 60 },
            height: { xs: 40, md: 45, xl: 60 },
          }}
        >
          C.L.
        </Avatar>
      </IconButton>
      
      {/* Profile Menu Dropdown */}
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        sx={{
          '& .MuiMenu-paper': {
            width: 280,
            bgcolor: 'common.white',
          },
        }}
      >
        <Box p={3}>
          <Typography variant="subtitle1" color="text.primary">
            User Profile
          </Typography>
          <Stack direction="row" py={2.5} spacing={1.5} alignItems="center">
            <Avatar sx={{ bgcolor: 'primary.main', color: 'common.white', width: 65, height: 65 }}>
              C.L.
            </Avatar>
            <Box>
              <Typography variant="subtitle2" color="text.primary" fontWeight={600}>
                Camila Lopez
              </Typography>
              <Typography variant="caption" color="textSecondary">
                My Account
              </Typography>
              <Typography variant="subtitle2" color="textSecondary" display="flex" alignItems="center" gap={0.5}>
                camilopez3129@gmail.com
              </Typography>
            </Box>
          </Stack>
          <Divider />
          <Box mt={1.25}>
            <Button onClick={handleLogout} variant="outlined" color="error" fullWidth>
              Logout
            </Button>
          </Box>
        </Box>
      </Menu>
    </Fragment>
  );
};

export default ProfileDropdown;
