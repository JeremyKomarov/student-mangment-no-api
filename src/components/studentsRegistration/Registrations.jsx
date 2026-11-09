import { useState } from "react";
import RegisteredStudentFilter from "./RegisteredStudentFilter";
import RegisteredStudentList from "./RegisteredStudentList";
import "./Registrations.css";
import RegisteredStudentChart from "./RegisteredStudentChart";

function Registrations({ registeredStudents, courses }) {
  const [filteredCourse, setFilteredCourse] = useState(courses[0]);

  const filterChnageHandler = (selectedCourseId) => {
    const castedSelectedCourseId = Number(selectedCourseId);

    const foundedCourse = courses.find((course) => {
      return (course.id = castedSelectedCourseId);
    });

    setFilteredCourse(foundedCourse);
  };

  const filteredRegisteredStudent = registeredStudents.filter((student) => {
    return student.courseId === filteredCourse.id;
  });

  return (
    <div className="registrations card">
      <RegisteredStudentChart
        registeredStudents={registeredStudents}
        courses={courses}
      />

      <RegisteredStudentFilter
        selected={filteredCourse}
        onFilterChnageHandler={filterChnageHandler}
        courses={courses}
      />
      <RegisteredStudentList
        registeredStudents={filteredRegisteredStudent}
        course={filteredCourse}
      />
    </div>
  );
}

export default Registrations;
