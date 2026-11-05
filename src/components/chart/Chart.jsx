import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
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
