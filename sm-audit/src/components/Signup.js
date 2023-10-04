import React from 'react';
import { 
  Grid,
  TextField,
  Button, 
  Container
} from '@mui/material';

export const Signup = () => {
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
        <h1>Sign Up</h1>
          <Grid item xs={12}>
            <TextField label="Username"></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" type={'password'}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email" type={'email'}></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button style={{ background: '#023020', color: 'white' }}> Sign Up </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};
