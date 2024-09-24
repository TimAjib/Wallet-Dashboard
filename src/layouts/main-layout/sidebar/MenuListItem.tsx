import React, { useState } from 'react';
import { Link, ListItem, ListItemIcon, ListItemText, Typography, Modal, Box, Stack, Button, TextField } from '@mui/material';
import { menuLinks, MenuLinkType } from 'layouts/main-layout/sidebar/MenuLinks';
import { useLocation } from 'react-router-dom';

interface MenuListProps {
  menuItem: MenuLinkType;
  onDrawerClose?: () => void;
}

const MenuListItem = ({ menuItem, onDrawerClose }: MenuListProps) => {
  const { icon: Icon } = menuItem;
  const itemIcon = Icon ? (
    <Icon sx={{ width: { xs: 20, xl: 24 }, height: { xs: 20, xl: 24 } }} />
  ) : null;
  const location = useLocation();

  // Modal state for dormant account warning
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pin, setPin] = useState(Array(12).fill('')); // Initialize pin state with 12 empty boxes

  // Function to handle opening the modal for restricted links
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!menuItem.available && menuItem.title !== 'Login' && menuItem.title !== 'Signup' && menuItem.title !== 'Dashboard') {
      e.preventDefault(); // Prevent default link action
      setIsModalOpen(true);
    }
    if (onDrawerClose) {
      onDrawerClose();
    }
  };

  // Function to handle pin input change
  const handlePinChange = (index: number, value: string) => {
    const updatedPin = [...pin];
    updatedPin[index] = value;
    setPin(updatedPin);
  };

  const isActive = menuItem.title === menuLinks.find((item) => item.link === location.pathname)?.title;

  return (
    <>
      <ListItem
        key={menuItem.id}
        sx={{
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            bgcolor: isActive ? 'primary.main' : 'transparent',
            top: 0,
            bottom: 0,
            left: 0,
            width: 6,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            transition: 'background-color 0.5s ease',
          },
        }}
      >
        <Link
          href={menuItem.link}
          onClick={handleLinkClick}
          sx={{
            py: 1.5,
            px: 3,
            display: 'flex',
            alignItems: 'center',
            gap: 3.125,
            flex: 1,
            borderRadius: 2,
            color: isActive ? 'primary.main' : menuItem.available ? 'grey[700]' : 'action.disabled',
            transition: 'color 0.35s ease',
            '&:hover, &:focus': {
              backgroundColor: 'neutral.light',
              boxShadow: 'shadows[10]',
              color: !menuItem.available ? 'action.disabled' : 'primary.main',
              '& .MuiSvgIcon-root': {
                color: !menuItem.available ? 'action.disabled' : 'primary.main',
              },
            },
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 'auto',
              color: isActive
                ? 'primary.main'
                : menuItem.available
                ? 'neutral.dark'
                : 'action.disabled',
            }}
          >
            {itemIcon}
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography
                sx={{
                  fontSize: { xs: 'body1.fontSize', xl: 'h6.fontSize' },
                  fontWeight: 500,
                  textTransform: 'capitalize',
                }}
              >
                {menuItem.title}
              </Typography>
            }
          />
        </Link>
      </ListItem>

      {/* Modal for Dormant Account */}
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            p: 4,
            borderRadius: 2,
            boxShadow: 24,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Account Access Restricted
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            The account is currently dormant. Please enter your 12-digit pin to activate the account.
          </Typography>

          {/* Pin Input Fields */}
          <Stack direction="row" justifyContent="center" gap={1} sx={{ mb: 3 }}>
            {pin.map((digit, index) => (
              <TextField
                key={index}
                value={digit}
                onChange={(e) => handlePinChange(index, e.target.value)}
                inputProps={{
                  maxLength: 1,
                  style: { textAlign: 'center', width: '30px' }, // Style for each pin input
                }}
              />
            ))}
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Button variant="contained" color="primary">
              Activate
            </Button>
            <Button variant="outlined" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default MenuListItem;
