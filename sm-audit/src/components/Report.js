/*
Ta Thanh Khuong: 103526664
*/
import React, { useState } from 'react';
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
} from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';

export const Report = () => {

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#3F6255',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(id,filename, category, description, severity, recommendation) {
    return { id, filename, category, description, severity, recommendation };
  }
  const rows = [
    createData(
      1,
      'funding-contract.sol', 
      'Reentrancy Attack', 
      'This vulnerability allows an attacker to repeatedly call a vulnerable contract before it finishes processing, potentially draining its funds.', 
      'High', 
      'Implement proper access control and use the "checks-effects-interactions" pattern to minimize reentrancy risk.'),
    createData(
      2,
      'token_contract.sol', 
      'Integer Overflow/Underflow', 
      'This vulnerability arises in the token contract due to improper validation of user inputs, allowing attackers to create an overflow or underflow of token balances.', 
      'High', 
      'Use SafeMath library or similar methods to prevent integer overflow and underflow vulnerabilities in the contract.'),
    createData(
      3,
      'admin_control.sol', 
      'Access Control Issues', 
      'This vulnerability occurs in the admin_control contract, where insufficient access control mechanisms allow unauthorized users to gain administrative privileges.', 
      'Medium', 
      'Implement role-based access control (RBAC) to restrict administrative functions to authorized users only'),
    createData(
      4,
      'auction_contract.sol', 
      'Uninitialized State Variables', 
      'This vulnerability arises in the auction contract when certain state variables are not initialized, leading to unexpected behaviors during auctions.', 
      'Low', 
      'Ensure that all state variables are properly initialized during contract deployment or auction initialization.'),
    createData(
      5,
      'lottery_contract.sol', 
      'Timestamp Dependence', 
      'This vulnerability exists in the lottery contract, which relies on block timestamps for determining winners, making it susceptible to manipulation by miners.', 
      'Medium', 
      'Use external time oracles to fetch timestamps instead of relying solely on block timestamps.'),
  ];
  return (
    <Container>
    <div style={{ 
      padding: '2.5rem',  
      borderRadius: '40px',
      width: '100%', 
      margin: ' 10rem auto',
    }}>
      <Grid xs={12}><h1 style={{textAlign:'center', marginBottom:'4rem'}}>Report History</h1></Grid>
       <TableContainer>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="center">Filename</StyledTableCell>
            <StyledTableCell align="center">Category</StyledTableCell>
            <StyledTableCell align="center">Severity</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
            <StyledTableCell align="center">Recommendation</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
                <StyledTableCell align="center">{row.filename}</StyledTableCell>
                <StyledTableCell align="center">{row.category}</StyledTableCell>
                <StyledTableCell align="center">{row.severity}</StyledTableCell>
                <StyledTableCell align="center">{row.description}</StyledTableCell>
                <StyledTableCell align="center">{row.recommendation}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  </Container>
  );
};
