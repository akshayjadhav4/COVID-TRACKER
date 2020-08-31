// getting list of countries affected by the Coronavirus.
export const getAffectedCountries = () => {
  return fetch("https://covid-193.p.rapidapi.com/countries", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
      "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    },
  })
    .then((response) => response.json())
    .then((data) => data.response)
    .catch((err) => {
      console.log(err);
    });
};

// get current status of the spread of the coronavirus
export const getCountryData = (country) => {
  const countryUrl = `https://covid-193.p.rapidapi.com/statistics?country=${country}`;
  return fetch(countryUrl, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
      "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    },
  })
    .then((response) => response.json())
    .then((data) => data.response[0])
    .catch((err) => {
      console.log(err);
    });
};

// Get the current status of all countries
export const getAllCountriesData = () => {
  return fetch("https://covid-193.p.rapidapi.com/statistics", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
      "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    },
  })
    .then((response) => response.json())
    .then((data) => data.response)
    .catch((err) => {
      console.log(err);
    });
};
