import { Box, Container, Grid, Link, Stack, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

/* ----------------  Links Data  ------------------------------ */
const data = [
  { href: '#!', title: 'Themewagon', key: 'team' },
  { href: '#!', title: 'About Us', key: 'about' },
  { href: '#!', title: 'Blog ', key: 'blog' },
  { href: '#!', title: 'License ', key: 'license' },
];
/* ------------------------------------------------------------ */
const Footer = () => {
  return (
    <>
      <Box component="section" textAlign="center">
        <Container maxWidth="xl" disableGutters>
          <Box pb={2.5}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item xs={12} lg="auto">
                <Stack
                  alignItems="center"
                  sx={{
                    flexDirection: {
                      xs: 'column',
                      lg: 'row',
                    },
                    gap: 1,
                  }}
                >
                  <Typography
                    fontWeight="regular"
                    sx={{ fontSize: { xs: 'caption.fontSize', md: 'body2.fontSize' } }}
                  >
                    &copy; {new Date().getFullYear()}, Your Company Inc.
                  </Typography>

                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
