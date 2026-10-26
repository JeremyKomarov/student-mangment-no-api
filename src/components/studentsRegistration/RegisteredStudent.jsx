import CourseDate from "./CourseDate";
import "./RegisteredStudent.css";

function RegisteredStudent(props) {
  return (
    <div className="registration-student card">
      <CourseDate date={props.course.startDate} />
      <div className="registration-student__description">
        <h2>{props.registeredStudent.studentName}</h2>
        <div className="registration-student__course">
          {props.course.displayName}
        </div>
      </div>
    </div>
  );
}

export default RegisteredStudent;
