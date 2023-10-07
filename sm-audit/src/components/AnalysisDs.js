/*
Ta Thanh Khuong: 103526664
*/
import React from 'react';
import {useNavigate } from 'react-router-dom'
import {
  Container,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
  Button,
} from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'white',
    color: theme.palette.common.black,
    fontSize: '1.5rem',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '1.5rem',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.white,
  },
}));

function createData(category, description, severity, recommendation) {
  return { category, description, severity, recommendation };
}
const rows = [
  createData(
    'Reentrancy Attack',
    'This vulnerability allows an attacker to repeatedly call a vulnerable contract before it finishes processing, potentially draining its funds.',
    'High',
    'Implement proper access control and use the "checks-effects-interactions" pattern to minimize reentrancy risk.'
  ),
];

export const AnalysisDs = () => {
  const navigate = useNavigate()
  const navigateHR = () =>{
    navigate('/report-history')
  }
  return (
    <Container>
     <h1 style={{textAlign:'center', color:'#023020'}}>Audit Report</h1>
      <Grid container justifyContent="center" style={{ 
        padding:'2rem 0'  
        }}>
        <TableContainer style={{ width: '80%' }}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center" style={{fontWeight:'700'}}>Category</StyledTableCell>
                <StyledTableCell align="center" style={{fontWeight:'700'}}>Severity</StyledTableCell>
                <StyledTableCell align="center" style={{fontWeight:'700'}}>Description</StyledTableCell>
                <StyledTableCell align="center" style={{fontWeight:'700'}}>Recommendation</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.category}>
                  <StyledTableCell component="th" scope="row">
                    {row.category}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.severity}</StyledTableCell>
                  <StyledTableCell align="center">{row.description}</StyledTableCell>
                  <StyledTableCell align="center">{row.recommendation}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid container justifyContent="center" style={{ marginTop: '2rem'}}>
          <Button style={{ background: '#023020', color: 'white', padding:'1rem 3rem', fontSize:'1.rem'}} onClick={navigateHR}>Save & Exit</Button>
        </Grid>
      </Grid>  
    </Container>
  );
};
