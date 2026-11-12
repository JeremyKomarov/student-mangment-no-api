import { useState } from "react";
import "./StudentForm.css";
import { dateFormatting } from "../../utils/utils";
import Options from "../shared/Options";

function StudentForm(props) {
  const { onSaveRegisteredStudentDataHandler, onStopEditingHandler, courses } =
    props;

  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredCourseId, setEnteredCourseId] = useState("");
  const [enteredStartDate, setEnteredStartDate] = useState("");

  const resetForm = () => {
    setEnteredUserName("");
    setEnteredCourseId("");
    setEnteredStartDate("");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const splittedStudentName = enteredUserName.split(" ");

    const registeredStudentData = {
      courseId: enteredCourseId,
      firstName: splittedStudentName[0],
      lastName: splittedStudentName[1],
    };

    onSaveRegisteredStudentDataHandler(registeredStudentData);

    resetForm();
    onStopEditingHandler();
  };

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const courseIdChangeHandler = (event) => {
    const enteredCourseId = Number(event.target.value);

    const foundedCourse = courses.find((course) => {
      return course.id === enteredCourseId;
    });

    setEnteredCourseId(foundedCourse.id);

    const formattedDate = dateFormatting(foundedCourse.startDate);
    setEnteredStartDate(formattedDate);
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
            onChange={courseIdChangeHandler}
            value={enteredCourseId}
            required
          >
            <option value="" disabled>
              Please Choose A Course
            </option>
            <Options options={courses} />
          </select>
        </div>
        <div className="new-registration__control">
          <label>Course Start Date</label>
          <input type="date" value={enteredStartDate} disabled></input>
        </div>
        <div className="new-registration__actions">
          <button onClick={onStopEditingHandler} type="button">
            Cancel
          </button>
          <button type="submit">Register Student</button>
        </div>
      </div>
    </form>
  );
}

export default StudentForm;
