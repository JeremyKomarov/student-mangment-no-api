import { useState } from "react";
import RegisteredStudentFilter from "./RegisteredStudentFilter";
import RegisteredStudentList from "./RegisteredStudentList";
import "./Registrations.css";
import RegisteredStudentChart from "./RegisteredStudentChart";

function Registrations(props) {
  const [filteredCourse, setFilteredCourse] = useState("fullstack");

  const filterChnageHandler = (selectedCourse) => {
    setFilteredCourse(selectedCourse);
  };

  const filteredRegisteredStudent = props.registeredStudents.filter(
    (student) => {
      return student.course === filteredCourse;
    },
  );

  return (
    <div className="registrations card">
      <RegisteredStudentChart
        registeredStudents={props.registeredStudents}
        courses={props.courses}
      />

      <RegisteredStudentFilter
        selected={filteredCourse}
        onFilterChnageHandler={filterChnageHandler}
      />
      <RegisteredStudentList
        registeredStudents={filteredRegisteredStudent}
        course={props.courses[filteredCourse]}
      />
    </div>
  );
}

export default Registrations;
