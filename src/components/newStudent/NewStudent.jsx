import { useState } from "react";
import "./NewStudent.css";
import StudentForm from "./StudentForm";

function NewStudent(props) {
  const [isEditing, setIsEditing] = useState(false);

  const saveRegisteredStudentDataHandler = (enteredRegisteredStudentData) => {
    const registeredStudentData = {
      ...enteredRegisteredStudentData,
      id: Math.random().toString(),
    };

    props.onAddStudentHandler(registeredStudentData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-registration">
      {!isEditing && (
        <button onClick={startEditingHandler}>Register Student</button>
      )}
      {isEditing && (
        <StudentForm
          onStopEditingHandler={stopEditingHandler}
          courses={props.courses}
          onSaveRegisteredStudentDataHandler={saveRegisteredStudentDataHandler}
        />
      )}
    </div>
  );
}

export default NewStudent;
