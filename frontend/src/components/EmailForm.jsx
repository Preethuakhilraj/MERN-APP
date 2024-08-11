import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Typography, Button, TextField } from '@mui/material';

const EmailForm = ({ setFormType }) => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/send-otp', { email });
      setFormType('OTPForm'); // Ensure the form type is set
      navigate('/otpform'); // Navigate to OTP form
    } catch (error) {
      console.error('Error sending OTP', error);
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 3,
        boxShadow: 1,
        borderRadius: 2,
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        width: '100%',
        maxWidth: '400px',
      }}
    >
        <Typography variant="h5" gutterBottom>
          Enter Your Email
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Send OTP
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default EmailForm;
