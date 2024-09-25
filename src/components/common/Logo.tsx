import { Typography, Box } from '@mui/material';
import Image from 'components/base/Image';
import { Fragment } from 'react/jsx-runtime';
import logo from './../../../public/sekerLogo.svg';

const Logo = () => {
  return (
    <Fragment>
      <Box
        sx={{
          display: 'flex',
          mt: 3,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          gap: 1,
        }}
      >
        <Image src={logo} alt="Logo" sx={{ width: 180 }} />
        <Typography variant="h2"></Typography>
      </Box>
    </Fragment>
  );
};

export default Logo;