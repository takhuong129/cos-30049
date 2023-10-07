/*
Ta Thanh Khuong: 103526664
Do Long Duy: 103802474
*/
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { 
  Grid,
  TextField,
  Button, 
  Container,
  InputAdornment, 
  IconButton
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export const Login = ({ setLoggedIn, setUserData }) => {
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

      const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };


  const navigate = useNavigate();
    const handleLogin = () => {
      const usernameInput = document.getElementById('username').value;
      const passwordInput = document.getElementById('password').value;

      const findUser = localStorage.getItem(usernameInput);

      
      if(usernameInput === '' || passwordInput === '') {
        //Input is empty
        setError('Username and password cannot be empty');
      }
      else if (!findUser) {
        // Authentication fail
        setError('Username does not exist');
      }
      else {
        if (JSON.parse(findUser).password !== passwordInput )
          setError('Wrong password');
        else {

        const storedUserData = JSON.parse(findUser);
        storedUserData.username =usernameInput;
          // Authentication successful
          setLoggedIn(true);
          setUserData(storedUserData);
          console.log(storedUserData);
          navigate('/');
        }
        
      }

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
            <TextField id="username" label="Username"></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField id='password' label="Password" type={showPassword ? 'text' : 'password'} 
            InputProps={{
              endAdornment: (
                <InputAdornment style={{marginLeft:'-1.7rem'}}>
                  <IconButton onClick={handleTogglePasswordVisibility} edge={'end'} >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}/>
          </Grid>
          {error && (
            <Grid item xs={12}>
              <p style={{ color: 'red' }}>{error}</p>
            </Grid>
          )}
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
