import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuiTable;

const tableData = [
  {
    id: 1,
    first_name: "Rosalinde",
    last_name: "Chatwood",
    email: "rchatwood0@canalblog.com",
    gender: "Bigender",
    ip_address: "230.68.47.229",
  },
  {
    id: 2,
    first_name: "Sibylla",
    last_name: "Pearde",
    email: "spearde1@netvibes.com",
    gender: "Female",
    ip_address: "148.228.240.241",
  },
  {
    id: 3,
    first_name: "Richard",
    last_name: "Wills",
    email: "rwills2@cnet.com",
    gender: "Male",
    ip_address: "5.28.102.56",
  },
  {
    id: 4,
    first_name: "Lonee",
    last_name: "Revett",
    email: "lrevett3@studiopress.com",
    gender: "Female",
    ip_address: "132.175.243.221",
  },
  {
    id: 5,
    first_name: "Riva",
    last_name: "Fairbrother",
    email: "rfairbrother4@blogspot.com",
    gender: "Female",
    ip_address: "26.97.237.244",
  },
  {
    id: 6,
    first_name: "Lindon",
    last_name: "Kennan",
    email: "lkennan5@jimdo.com",
    gender: "Male",
    ip_address: "32.34.80.220",
  },
  {
    id: 7,
    first_name: "June",
    last_name: "Hutchison",
    email: "jhutchison6@tinyurl.com",
    gender: "Female",
    ip_address: "56.146.80.125",
  },
  {
    id: 8,
    first_name: "Manuel",
    last_name: "Rustan",
    email: "mrustan7@opensource.org",
    gender: "Male",
    ip_address: "202.177.161.29",
  },
  {
    id: 9,
    first_name: "Gisele",
    last_name: "Crocombe",
    email: "gcrocombe8@tripod.com",
    gender: "Agender",
    ip_address: "238.100.79.143",
  },
  {
    id: 10,
    first_name: "Stevy",
    last_name: "Thick",
    email: "sthick9@dyndns.org",
    gender: "Male",
    ip_address: "86.227.86.215",
  },
];
