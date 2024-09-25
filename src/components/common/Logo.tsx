import { Typography, Box } from '@mui/material';
import Image from 'components/base/Image';
import { Fragment } from 'react/jsx-runtime';

const Logo = () => {
  return (
    <Fragment>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          gap: 1, // Space between the logo and text
        }}
      >
        <Image src="/src/assets/ameenLogo.png" alt="Logo" sx={{ width: 36 }} />
        <Typography variant="h2">AmeenBanks</Typography>
      </Box>
    </Fragment>
  );
};

export default Logo;
