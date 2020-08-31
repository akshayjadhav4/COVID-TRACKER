import React from "react";
import "./StatTable.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function StatTable({ countries }) {
  return (
    <div className="table">
      <TableContainer className="table__container">
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Country Name</TableCell>
              <TableCell align="right">Active</TableCell>
              <TableCell align="right">Critical</TableCell>
              <TableCell align="right">New</TableCell>
              <TableCell align="right">Recovered</TableCell>
              <TableCell align="right">Total Cases</TableCell>
              <TableCell align="right">Deaths</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {countries.map((country) => (
              <TableRow key={country.country}>
                <TableCell component="th" scope="row">
                  {country.country}
                </TableCell>

                <TableCell align="right">{country.cases?.active}</TableCell>
                <TableCell align="right">{country.cases?.critical}</TableCell>
                <TableCell align="right">{country.cases?.new}</TableCell>
                <TableCell align="right">{country.cases?.recovered}</TableCell>
                <TableCell align="right">{country.cases?.total}</TableCell>
                <TableCell align="right">{country.deaths?.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default StatTable;
