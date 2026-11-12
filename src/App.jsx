import { useEffect, useState } from "react";
import NewStudent from "./components/newStudent/NewStudent";
import Registrations from "./components/studentsRegistration/Registrations";
import { getAllCourses, getAllStudents, createStudent } from "./services/api";
import {
  normalizeCourseName,
  normalizeCourseDate,
  normalizeStudentFullName,
} from "./utils/utils";

function App() {
  const [registeredStudents, setRegisteredStudents] = useState([]);
  const [availableCourses, setAvailableCourses] = useState([]);

  const addStudentHandler = (registeredStudent) => {
    console.log(registeredStudent);

    createStudent(registeredStudent).then(() => {
      getAllStudents().then((res) => {
        const students = res.data.map((student) => {
          return {
            ...student,
            studentName: normalizeStudentFullName(
              student.firstName,
              student.lastName,
            ),
          };
        });

        setRegisteredStudents(students);
      });
    });
  };

  useEffect(() => {
    getAllCourses().then((res) => {
      const courses = res.data.map((course) => {
        return {
          ...course,
          displayName: normalizeCourseName(course.name),
          startDate: normalizeCourseDate(course.startDate),
        };
      });

      getAllStudents().then((res) => {
        const students = res.data.map((student) => {
          return {
            ...student,
            studentName: normalizeStudentFullName(
              student.firstName,
              student.lastName,
            ),
          };
        });

        setAvailableCourses(courses);
        setRegisteredStudents(students);
      });
    });
  }, []);

  return (
    <div>
      {availableCourses.length === 0 ? (
        "Loading......"
      ) : (
        <>
          <NewStudent
            onAddStudentHandler={addStudentHandler}
            courses={availableCourses}
          />
          <Registrations
            registeredStudents={registeredStudents}
            courses={availableCourses}
          />
        </>
      )}
    </div>
  );
}

export default App;
