import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const { dataPoints } = props;

  const dataPointsValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.id}
            value={dataPoint.value}
            maxValue={totalMax}
            label={dataPoint.displayName}
          />
        );
      })}
    </div>
  );
}

export default Chart;
