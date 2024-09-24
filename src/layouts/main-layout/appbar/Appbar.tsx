import { AppBar, Box, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import SearchInput from 'layouts/main-layout/appbar/SearchInput';
import NotificationDropdown from 'layouts/main-layout/appbar/NotificationDropdown';
import ProfileDropdown from 'layouts/main-layout/appbar/ProfileDropdown';
import { MouseEvent, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import paths from './../../../routes/path'; // Ensure the path is correct

interface NavbarProps {
  onDrawerToggle: () => void;
}

const MainNavbar = ({ onDrawerToggle }: NavbarProps) => {
  const [open, setOpen] = useState<null | HTMLElement>(null);
  const [countdown, setCountdown] = useState(15 * 60); // 15 minutes countdown in seconds
  const navigate = useNavigate();
  const location = useLocation();

  // Extract the route name from the pathname
  const pathSegments = location.pathname
    .split('/')
    .filter((segment: string) => segment.trim() !== ''); // Explicitly typing 'segment' as string
  const routeName = pathSegments.length > 0 ? pathSegments.pop() : 'Overview';

  // Countdown timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    if (countdown <= 0) {
      clearInterval(timer);
      navigate(paths.login); // Redirect to login page when countdown reaches 0
    }

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [countdown, navigate]);

  // Convert countdown to MM:SS format
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleOpen = (event: MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: 'common.white' }}>
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: { xs: 0, lg: 2 },
          }}
        >
          <Typography
            sx={{
              display: { xs: 'none', md: 'block' },
              fontSize: { sm: 'h2.fontSize', xl: 'h1.fontSize' },
              fontWeight: 600,
              color: 'primary.darker',
              flex: 1,
              textAlign: { xs: 'center', md: 'left' },
              textTransform: 'capitalize',
            }}
          >
            {routeName}
          </Typography>

          {/* Status and Auto-Logout Countdown */}
          <Stack direction="row" alignItems="center" gap={2}>
            <Typography
              sx={{
                fontSize: 'h7.fontSize',
                color: 'primary.main',
                textAlign: 'center',
                fontWeight: 600,
              }}
            >
              Status: Dormant
            </Typography>

            <Typography
              sx={{
                fontSize: 'h7.fontSize',
                color: 'error.main',
                textAlign: 'center',
              }}
            >
              Auto logout in: {formatTime(countdown)}
            </Typography>
          </Stack>

          <Stack direction="row" gap={1} sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton onClick={onDrawerToggle} sx={{ display: { md: 'none' } }}>
              <IconifyIcon icon="mingcute:menu-line" color="primary.darker" width={25} />
            </IconButton>
          </Stack>

          <Stack direction="row" sx={{ alignItems: 'center', gap: { xs: 2.5, xl: 3.75 } }}>
            <Box sx={{ display: { xs: 'none', md: 'block', maxWidth: 260, alignItems: 'right' } }}>
              <SearchInput fullWidth={false} size={'medium'} />
            </Box>
            <ProfileDropdown />
          </Stack>
        </Toolbar>
        <Box sx={{ display: { xs: 'block', md: 'none' }, px: 3.15, mt: 5.5 }}>
          <SearchInput fullWidth={true} size={'small'} />
        </Box>
      </AppBar>
    </>
  );
};

export default MainNavbar;
