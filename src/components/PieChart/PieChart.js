import React from "react";
import { Pie } from "react-chartjs-2";
function PieChart({ countryInfo }) {
  return (
    <div className="pieChart">
      <Pie
        data={{
          labels: ["cases", "deaths", "Recovered"],
          datasets: [
            {
              data: [
                countryInfo.cases?.total,
                countryInfo.deaths?.total,
                countryInfo.cases?.recovered,
              ],
              backgroundColor: ["#25CCF7", "#FF4848", "#45CE30"],
            },
          ],
        }}
        height={300}
        options={{
          responsive: false,
        }}
      />
    </div>
  );
}

export default PieChart;
