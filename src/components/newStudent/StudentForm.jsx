import { useState } from "react";
import "./StudentForm.css";
import dateFormatting from "../../utils/dateUtils";

function StudentForm(props) {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredCourseName, setEnteredCourseName] = useState("");
  const [enteredStartDate, setEnteredStartDate] = useState("");

  const resetForm = () => {
    setEnteredUserName("");
    setEnteredCourseName("");
    setEnteredStartDate("");
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const registeredStudentData = {
      studentName: enteredUserName,
      course: enteredCourseName,
      date: enteredStartDate,
    };

    props.onSaveRegisteredStudentDataHandler(registeredStudentData);

    resetForm();
  };

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const courseNameChangeHandler = (event) => {
    const enteredCourse = event.target.value;
    setEnteredCourseName(enteredCourse);
    setEnteredStartDate(dateFormatting(props.courses[enteredCourse].startDate));
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-registration__controls">
        <div className="new-registration__control">
          <label>Student Name</label>
          <input
            type="text"
            value={enteredUserName}
            onChange={userNameChangeHandler}
            required
          ></input>
        </div>
        <div className="new-registration__control">
          <label>Course Name</label>
          <select
            className="course-selection"
            onChange={courseNameChangeHandler}
            value={enteredCourseName}
            required
          >
            <option value="" disabled>
              Please Choose A Course
            </option>
            <option value="fullstack">Fullstack Course</option>
            <option value="qa">QA Course</option>
            <option value="cyber">Cyber Course</option>
            <option value="product">Product Management Course</option>
          </select>
        </div>
        <div className="new-registration__control">
          <label>Course Start Date</label>
          <input type="date" value={enteredStartDate} disabled></input>
        </div>
        <div className="new-registration__actions">
          <button type="button">Cancel</button>
          <button type="submit">Register Student</button>
        </div>
      </div>
    </form>
  );
}

export default StudentForm;
