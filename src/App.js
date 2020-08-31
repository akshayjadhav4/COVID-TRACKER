import React, { useState, useEffect } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
function App() {
  //state to store list of countries affected by the Coronavirus
  const [countries, setCountries] = useState([]);
  //state for dropdown select item
  const [country, setCountry] = useState("worldWide");

  useEffect(() => {
    // getting list of countries affected by the Coronavirus.
    const getAffectedCountries = async () => {
      await fetch("https://covid-193.p.rapidapi.com/countries", {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-193.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        },
      })
        .then((response) => response.json())
        .then((data) => setCountries(data.response))
        .catch((err) => {
          console.log(err);
        });
    };
    getAffectedCountries();
  }, []);

  // onChange for dropdown menu
  const onCountryChange = async (event) => {
    const country = event.target.value;
    setCountry(country);
  };

  return (
    <div className="app">
      {/* AppHeader component with props countries, country, onCountryChange */}
      <AppHeader
        countries={countries}
        country={country}
        onCountryChange={onCountryChange}
      />
    </div>
  );
}

export default App;
