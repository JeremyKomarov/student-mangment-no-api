import { useEffect, useState } from "react";
import NewStudent from "./components/newStudent/NewStudent";
import Registrations from "./components/studentsRegistration/Registrations";
import { createStudent, getAllCourses, getAllStudents } from "./services/api";
import {
  normalizeCourseDate,
  normalizeCourseName,
  normalizeStudentFullName,
} from "./utils/utils";

function App() {
  const [registeredStudents, setRegisteredStudents] = useState([]);
  const [availableCoruses, setAvailableCoruses] = useState([]);

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

        setAvailableCoruses(courses);
        setRegisteredStudents(students);
      });
    });
  }, []);

  const addStudentHandler = (student) => {
    const splittedStudentName = student.studentName.split(" ");
    const studentToCreate = {
      firstName: splittedStudentName[0],
      lastName: splittedStudentName[1],
      courseId: student.courseId,
    };

    createStudent(studentToCreate).then((res) => {
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

  return (
    <div>
      {availableCoruses.length === 0 ? (
        "Loading...."
      ) : (
        <>
          <NewStudent
            onAddStudentHandler={addStudentHandler}
            courses={availableCoruses}
          />
          <Registrations
            registeredStudents={registeredStudents}
            courses={availableCoruses}
          />
        </>
      )}
    </div>
  );
}

export default App;
