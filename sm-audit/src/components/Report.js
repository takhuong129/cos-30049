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
  TablePagination,
  Grid,
} from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';

export const Report = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleClick = (row) => {
    setSelectedRow(row);
    setShowPopup(true);
  };

  const handleClose = () => {
    setSelectedRow(null);
    setShowPopup(false);
  };

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

  function createData(id, date, filename, vulnerabilitiesData) {
    return { id, date, filename, vulnerabilitiesData };
  }

  const rows = [
    createData(1, '2023-11-11', 'example_file.sol', [
      {
        confidence: 'High',
        description: 'SQL Injection',
        impact: 'Critical',
        recommendation: 'Update database input validation',
        vulnerability_type:'das',
        vulnerability_code:[
          { code_desc: 'Code Description 1', location: 'Location 1' },
          { code_desc: 'Code Description 2', location: 'Location 2' },
        ],
      },
    ]),
    createData(2, '2023-11-12', 'a.sol', [
      {
        confidence: 'Medium',
        description: 'Cross-Site Scripting (XSS)',
        impact: 'High',
        recommendation: 'Implement proper input validation and output encoding',
        vulnerability_type:'das',
        vulnerability_code:[
          { code_desc: 'Code Description 1', location: 'Location 1' },
          { code_desc: 'Code Description 2', location: 'Location 2' },
        ],
      },
      // Add more vulnerabilities for 'a.sol' if needed
    ]),
    createData(3, '2023-11-12', 'b.sol', [
      {
        confidence: 'Low',
        description: 'Weak Password Policy',
        impact: 'Medium',
        recommendation: 'Enforce strong password policies',
        vulnerability_type:'das',
        vulnerability_code:[
          { code_desc: 'Code Description 1', location: 'Location 1' },
          { code_desc: 'Code Description 2', location: 'Location 2' },
        ],
      },
      {
        confidence: 'Medium',
        description: 'Cross-Site Scripting (XSS)',
        impact: 'High',
        recommendation: 'Implement proper input validation and output encoding',
        vulnerability_type:'avc',
        vulnerability_code: [
          { code_desc: '[HighRiskTransaction.owner](smart-contract/transaction.sol#L5) should be immutable', 
            location: 'Line 5' 
          },
          { code_desc: '[HighRiskTransaction.owner](smart-contract/transaction.sol#L5) should be immutable', 
            location: 'Line 5' 
          },
        ],
      }, 
      {
        confidence: 'Medium',
        description: 'Cross-Site Scripting (XSS)',
        impact: 'High',
        recommendation: 'Implement proper input validation and output encoding',
        vulnerability_type:'avc',
        vulnerability_code: [
          { code_desc: '[HighRiskTransaction.owner](smart-contract/transaction.sol#L5) should be immutable', 
            location: 'Line 5' 
          },
          { code_desc: '[HighRiskTransaction.owner](smart-contract/transaction.sol#L5) should be immutable', 
            location: 'Line 5' 
          },
        ],
      }
      // Add more vulnerabilities for 'b.sol' if needed
    ]),
  ];

  return (
    <Container>
      <div
        style={{
          padding: '2.5rem',
          borderRadius: '40px',
          width: '100%',
          margin: ' 10rem auto',
        }}
      >
        <Grid xs={12}>
          <h1 style={{ textAlign: 'center', marginBottom: '4rem' }}>Report History</h1>
        </Grid>
        <TableContainer>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="center">Date</StyledTableCell>
                <StyledTableCell align="center">Filename</StyledTableCell>
                <StyledTableCell align="center">Vulnerabilities</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.date}</StyledTableCell>
                  <StyledTableCell align="center">{row.filename}</StyledTableCell>
                  <StyledTableCell align="center">
                    <button onClick={() => handleClick(row)}>View Details</button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={5}
          page={0}
          onPageChange={() => {}}
          onRowsPerPageChange={() => {}}
        />

        {/* Custom Popup for showing details */}
        {showPopup && (
          <div
            style={{
            
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 999,
            }}
          >
            <div
              style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '40px',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
                border: '2px solid #023020',
                display: 'flex',
                flexDirection: 'column', 
                alignItems: 'center', 
              }}
            >
              {/* Render your custom popup content here */}
              {selectedRow && (
                <ul style={{ marginBottom: '1rem' }}>
                  {selectedRow.vulnerabilitiesData.map((vulnerability, index) => (
                    <li key={index} style={{ marginBottom: '2rem' }}>
                      <strong>Confidence:</strong> {vulnerability.confidence}<br />
                      <strong>Description:</strong> {vulnerability.description}<br />
                      <strong>Impact:</strong> {vulnerability.impact}<br />
                      <strong>Recommendation:</strong> {vulnerability.recommendation}<br />
                      <strong>vulnerability type:</strong> {vulnerability.vulnerability_type}<br />
                      <strong style={{color:'red'}}>Vulnerability Code:</strong><br />
                      {vulnerability.vulnerability_code.map((code, codeIndex) => (
                      <ul key={codeIndex}>
                        <strong>Code desc:</strong> {code.code_desc}<br />
                        <strong>Location:</strong> {code.location}<br />
                      </ul>
                    ))}
                    </li>
                  ))}
                </ul>
              )}

              {/* Add a button or any element to close the popup */}
              <button onClick={handleClose} style={{ background: '#023020', color: 'white', padding: '1rem 3rem', fontSize: '1.rem', marginTop: 'auto' ,borderRadius:'40px' }}>Close</button>
            </div>
          </div>
        )}

      </div>
    </Container>
  );
};
