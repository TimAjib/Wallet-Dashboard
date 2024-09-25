import { Typography, Box } from '@mui/material';
import Image from 'components/base/Image';
import { Fragment } from 'react/jsx-runtime';
import logo from './../../../public/ameenLogo.png';

const Logo = () => {
  return (
    <Fragment>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          gap: 1,
        }}
      >
        <Image src={logo} alt="Logo" sx={{ width: 36 }} />
        <Typography variant="h2">AmeenBanks</Typography>
      </Box>
    </Fragment>
  );
};

export default Logo;