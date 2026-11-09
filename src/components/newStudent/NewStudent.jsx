import { useState } from "react";
import "./NewStudent.css";
import StudentForm from "./StudentForm";

function NewStudent({ courses, onAddStudentHandler }) {
  const [isEditing, setIsEditing] = useState(false);

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
          courses={courses}
          onSaveRegisteredStudentDataHandler={onAddStudentHandler}
        />
      )}
    </div>
  );
}

export default NewStudent;
