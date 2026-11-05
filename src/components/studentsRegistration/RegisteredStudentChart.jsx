import React from "react";
import Chart from "../chart/Chart";

function RegisteredStudentChart(props) {
  const chartCourseDataPoints = [];

  for (const course in props.courses) {
    const courseToPush = {
      ...props.courses[course],
      displayName: props.courses[course].displayName.replace(" Course", ""),
      value: 0,
    };

    chartCourseDataPoints.push(courseToPush);
  }

  for (const chartCourseDataPoint of chartCourseDataPoints) {
    const courseRegisteredStudents = props.registeredStudents.filter(
      (student) => {
        return student.course === chartCourseDataPoint.name;
      },
    );

    chartCourseDataPoint.value = courseRegisteredStudents.length;
  }

  return <Chart dataPoints={chartCourseDataPoints} />;
}

export default RegisteredStudentChart;
