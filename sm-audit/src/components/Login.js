import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { 
  Grid,
  TextField,
  Button, 
  Container
} from '@mui/material';

export const Login = ({ setLoggedIn }) => {
  const navigate = useNavigate();
    const handleLogin = () => {
      // Perform your login logic here
      // For simplicity, we'll just set isLoggedIn to true immediately
      // Then navigate to the homepage
      setLoggedIn(true);
      navigate('/')

  };
  return (
    <Container>
      <div style={{ 
        padding: '2.5rem', 
        marginTop: '20rem', 
        background: '#9AACA6',
        borderRadius: '40px',
        width: '50%', // Adjust the width as needed
        margin: ' 20rem auto', // Center the div horizontally
      }}>
        <Grid
          container
          spacing={3}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
        >
        <h1>Login</h1>
          <Grid item xs={12}>
            <TextField label="Username"></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" type={'password'}></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button
            onClick={handleLogin}
            style={{ background: '#023020', color: 'white' }}> Login </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};
