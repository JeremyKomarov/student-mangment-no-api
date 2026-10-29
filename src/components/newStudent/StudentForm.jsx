import { useState } from "react";
import "./StudentForm.css";

function StudentForm() {
  const [enteredUserName, setEnteredUserName] = useState("");

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
    console.log("This student name is changed: " + enteredUserName);
  };

  return (
    <form>
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
          <select className="course-selection" defaultValue={""} required>
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
          <input type="date"></input>
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
