import React, { useState, useEffect } from "react";
import "./LineGraph.css";
import { Line } from "react-chartjs-2";
import { getAllCountriesHistoricalData } from "../../api";
import numeral from "numeral";
import CircularProgress from "@material-ui/core/CircularProgress";

//Options for line graph
const options = {
  legend: {
    display: true,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRation: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return `${data.datasets[tooltipItem.datasetIndex].label} ${numeral(
          tooltipItem.value
        ).format("+0,0")}`;
      },
    },
  },
  scales: {
    xAxes: [{}],
    yAxes: [
      {
        gridLines: {
          display: true,
        },
        ticks: {
          callback: function (value, index, values) {
            return numeral(value).format("0.00a");
          },
        },
      },
    ],
  },
};

function LineGraph({ country }) {
  const [lineGraphData, setLineGraphData] = useState([]);

  //dataset for total cases
  const totalCasesDataset = lineGraphData.map((data) => data.cases.total);

  // dataset for recovered
  const totalRecoverdDataset = lineGraphData.map(
    (data) => data.cases.recovered
  );

  // dataset for deaths
  const totalDeathsDataset = lineGraphData.map((data) => data.deaths.total);

  //getting all historical data for graph
  useEffect(() => {
    const data = async () => {
      setLineGraphData(await getAllCountriesHistoricalData(country));
    };
    data();
  }, [country]);

  const data = {
    labels: lineGraphData.map((data) => data.day),
    datasets: [
      {
        label: "Total Cases",
        borderColor: "#25CCF7",
        data: totalCasesDataset,
      },
      {
        label: "Total Recoverd",
        borderColor: "#45CE30",
        data: totalRecoverdDataset,
      },
      {
        label: "Total Deaths",
        borderColor: "#FF4848",
        data: totalDeathsDataset,
      },
    ],
  };

  return (
    <div className="lineGraph">
      {lineGraphData?.length > 0 ? (
        <Line data={data} options={options} />
      ) : (
        <div className="lineGraph__loader">
          <CircularProgress />
          <span>Preparing Graph...</span>
        </div>
      )}
    </div>
  );
}

export default LineGraph;
