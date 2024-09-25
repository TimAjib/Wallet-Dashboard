import { Button, Grid, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setAuthToken } from 'helpers/auth';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false); // To handle modal for invalid credentials
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'camilopez3120@gmail.com' && password === 'camilo3120$') {
      setAuthToken('sample_token'); // Set token on successful login
      navigate('/'); // Navigate to dashboard
    } else {
      setOpen(true); // Open modal if credentials are incorrect
    }
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField fullWidth label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Grid>
      </Grid>
      <Button onClick={handleLogin} fullWidth variant="contained" color="primary">
        Login
      </Button>

      {/* Error dialog for incorrect credentials */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Error</DialogTitle>
        <DialogContent>
          Incorrect email or password. Please try again.
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default LoginForm;
