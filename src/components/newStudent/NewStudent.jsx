import "./NewStudent.css";
import StudentForm from "./StudentForm";

function NewStudent(props) {
  const saveRegisteredStudentDataHandler = (enteredRegisteredStudentData) => {
    console.log(
      "This is entered expanse data from <NewStudent>: " +
        JSON.stringify(enteredRegisteredStudentData),
    );
  };

  return (
    <div className="new-registration">
      <StudentForm
        courses={props.courses}
        onSaveRegisteredStudentDataHandler={saveRegisteredStudentDataHandler}
      />
    </div>
  );
}

export default NewStudent;
