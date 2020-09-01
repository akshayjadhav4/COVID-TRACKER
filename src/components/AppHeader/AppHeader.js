import React from "react";
import "./AppHeader.css";
import { FormControl, Select, MenuItem } from "@material-ui/core";

export default function AppHeader({ countries, country, onCountryChange }) {
  return (
    <div className="appHeader">
      <h1>COVID-19 TRACKER</h1>
      <FormControl className="app__dropdown">
        <Select variant="outlined" value={country} onChange={onCountryChange}>
          <MenuItem value="all">WorldWide</MenuItem>
          {countries?.map((country, index) => (
            <MenuItem value={country} key={index}>
              {country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
