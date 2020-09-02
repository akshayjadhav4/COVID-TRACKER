import React, { useState, useEffect } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import { Card, CardContent, Grid, CardHeader } from "@material-ui/core";
import { getAffectedCountries, getCountryData } from "./api";
import StatusPanal from "./components/StatusPanal/StatusPanal";
import StatTable from "./components/Table/StatTable";
import PieChart from "./components/PieChart/PieChart";
import LineGraph from "./components/LineGraph/LineGraph";
function App() {
  //state to store list of countries affected by the Coronavirus
  const [countries, setCountries] = useState([]);

  //state for dropdown select item
  const [country, setCountry] = useState("all");

  // state for storing coronavirus status
  const [countryInfo, setCountryInfo] = useState({});

  // getting list of countries affected by the Coronavirus.
  useEffect(() => {
    const getCountriesList = async () =>
      setCountries(await getAffectedCountries());
    getCountriesList();
  }, []);

  //getting worldwide status to show when first time app loads
  useEffect(() => {
    const getWorldwideStatus = async () =>
      setCountryInfo(await getCountryData("all"));
    getWorldwideStatus();
  }, []);

  // onChange for dropdown menu
  const onCountryChange = async (event) => {
    const country = event.target.value;
    const getCountryStatus = await getCountryData(country);
    setCountry(country);
    setCountryInfo(getCountryStatus);
  };

  return (
    <div className="app">
      <div className="app__header">
        {/* AppHeader component with props countries, country, onCountryChange */}
        <AppHeader
          countries={countries}
          country={country}
          onCountryChange={onCountryChange}
        />
      </div>

      <div className="app__statusPanal">
        {/* showing cases ,recoverd , deaths status  */}
        <StatusPanal countryInfo={countryInfo} />
      </div>

      <div className="app__middleSection">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={8}>
            <Card className="app__card">
              <CardContent>
                <LineGraph country={countryInfo.country} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Card className="app__card">
              <CardHeader title="Summary of Total Deaths,Active,Recovered" />
              <CardContent>
                <PieChart countryInfo={countryInfo} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>

      <div className="app__statsTable">
        <Card>
          <CardContent>
            <h1>Current status of all countries</h1>
            {/* showing stats for all counties in table form  */}
            <StatTable />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
