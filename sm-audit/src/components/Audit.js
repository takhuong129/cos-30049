import React, { useState } from 'react';
import { 
    Container,
    Grid,
    Box,
} from '@mui/material';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';

export const Audit = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <Container style={{ marginTop: '15rem' }}>
     <h1 style={{display:'flex',justifyContent:'center'}}>Upload your smart contract here</h1>
      <Box
        style={{
          padding: '2.5rem',
          width: '60%', // Adjust the width as needed
          margin: '0 auto', // Center the div horizontally
          border: '2px dashed black',
        }}
      >
        <Grid
          container
          spacing={3}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
        >
          <Grid item xs={12}>
            <CloudUploadOutlinedIcon sx={{ fontSize: 60 }} />
          </Grid>
          <Grid item xs={12}>
            <h2>Upload your smart contract file (.sol)</h2>
          </Grid>
          <Grid item xs={12}>
            <input
              type="file"
              accept=".sol"
              onChange={handleFileChange}
              style={{ display: 'none' }}
              id="fileInput"
            />
            <label htmlFor="fileInput">
              <div
                style={{
                  border: '1px solid #ccc',
                  borderRadius:'10px',
                  padding: '1rem 2rem',
                  fontWeight:'600',
                  cursor: 'pointer',
                  color:'white',
                  backgroundColor: '#023020',
                }}
              >
                {selectedFile ? selectedFile.name : 'Select File'}
              </div>
            </label>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
