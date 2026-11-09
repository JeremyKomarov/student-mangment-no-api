import "./RegisteredStudentList.css";
import RegisteredStudent from "./RegisteredStudent";

function RegisteredStudentList({ registeredStudents, course }) {
  if (registeredStudents.length === 0) {
    return (
      <h2 className="registrations-list__fallback">No Students Registered</h2>
    );
  }

  return (
    <ul className="registrations-list">
      {registeredStudents.map((student) => {
        return (
          <RegisteredStudent
            key={student.id}
            registeredStudent={student}
            course={course}
          />
        );
      })}
    </ul>
  );
}

export default RegisteredStudentList;
