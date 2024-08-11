import { Container, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

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
        backgroundImage: 'url(/path/to/your/background-image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        maxWidth: '400px',
      }}
    >
        <Typography variant="h4" gutterBottom>
          Welcome to the Home Page
        </Typography>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={() => navigate('/')}
        >
         Back to Email erification
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
