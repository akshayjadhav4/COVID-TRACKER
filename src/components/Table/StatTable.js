import React, { useState, useEffect } from "react";
import "./StatTable.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import numeral from "numeral";
import { sortTableData } from "../../utils/sortTableData";
import { getAllCountriesData } from "../../api";

function StatTable() {
  //state for storing table data
  const [tableData, setTableData] = useState([]);

  // Get the current status of all countries
  useEffect(() => {
    //sortTableData() function used to sort data
    const getCountriesStatus = async () =>
      setTableData(sortTableData(await getAllCountriesData()));
    getCountriesStatus();
  }, []);

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
            {tableData?.map((country) => (
              <TableRow key={country.country}>
                <TableCell component="th" scope="row">
                  {country.country}
                </TableCell>

                <TableCell align="right">
                  {numeral(country.cases?.active).format("0,0")}
                </TableCell>
                <TableCell align="right">
                  {numeral(country.cases?.critical).format("0,0")}
                </TableCell>
                <TableCell align="right">
                  +{numeral(country.cases?.new).format("0,0")}
                </TableCell>
                <TableCell align="right">
                  {numeral(country.cases?.recovered).format("0,0")}
                </TableCell>
                <TableCell align="right">
                  {numeral(country.cases?.total).format("0,0")}
                </TableCell>
                <TableCell align="right">
                  {numeral(country.deaths?.total).format("0,0")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default StatTable;
