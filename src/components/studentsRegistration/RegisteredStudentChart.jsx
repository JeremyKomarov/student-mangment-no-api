import React from "react";
import Chart from "../chart/Chart";

function RegisteredStudentChart({ registeredStudents, courses }) {
  const chartCourseDataPoints = [];

  for (const course in courses) {
    const courseToPush = {
      ...courses[course],
      displayName: courses[course].displayName.replace(" Course", ""),
      value: 0,
    };

    chartCourseDataPoints.push(courseToPush);
  }

  for (const chartCourseDataPoint of chartCourseDataPoints) {
    const courseRegisteredStudents = registeredStudents.filter((student) => {
      return student.courseId === chartCourseDataPoint.id;
    });

    chartCourseDataPoint.value = courseRegisteredStudents.length;
  }

  return <Chart dataPoints={chartCourseDataPoints} />;
}

export default RegisteredStudentChart;
