import { useState, useEffect } from 'react'
import { 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem,
  Box,
  Container,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Table,
  TableBody,  
 } from '@mui/material';

import { hackerrankAPI } from "../api/axios";


export default function HackerApi (){

const [selectedYear, setSelectedYear] = useState(2011);
const [data, setData] = useState();
const [loading, setLoading] = useState(true);
  

useEffect(() => {
  
  hackerrankAPI
    .get(`football_competitions?year=${selectedYear}`)
    .then((result) => setData(result.data))
    // .catch(error => console.error('Error fetching data:', error));

}, [selectedYear])

if (!data) {
  return <div>Loading...</div>;
}

console.log(data);
  return (
    <>
    <Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedYear}
          label="Age"
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          {[2011, 2012, 2013, 2014, 2015, 2016].map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>       
          ))}
        </Select>
          <Container>
            <TableContainer>
              <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Year</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Country</TableCell>
                  <TableCell>Winner</TableCell>
                  <TableCell>Runner Up</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {data.map((d, index) => (
                <TableRow
                key={index}>
                  <TableCell>{d.year}</TableCell>
                  <TableCell>{d.name}</TableCell>
                  <TableCell>{d.country}</TableCell>
                  <TableCell>{d.winner}</TableCell>
                  <TableCell>{d.runnerup}</TableCell>
                </TableRow>
              ))}
              </TableBody>
              </Table>
            </TableContainer>
          </Container>
      </FormControl>
    </Box>
    </>
  )

}
