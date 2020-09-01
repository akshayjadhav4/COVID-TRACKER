import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { getAllCountriesHistoricalData } from "../../api";
import numeral from "numeral";
import CircularProgress from "@material-ui/core/CircularProgress";
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
        return numeral(tooltipItem.value).format("+0,0");
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

  useEffect(() => {
    const data = async () => {
      setLineGraphData(await getAllCountriesHistoricalData(country));
    };
    data();
  }, [country]);

  const data = {
    labels: lineGraphData.slice(0, 120).map((data) => data.day),
    datasets: [
      {
        label: "Total Cases",
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: lineGraphData.slice(0, 120).map((data) => data.cases.total),
      },
    ],
  };

  return (
    <div className="lineGraph">
      {lineGraphData?.length > 0 ? (
        <Line data={data} options={options} />
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}

export default LineGraph;
