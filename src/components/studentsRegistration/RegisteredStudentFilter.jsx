import Options from "../shared/Options";
import "./RegisteredStudentFilter.css";

function RegisteredStudentFilter({ selected, onFilterChnageHandler, courses }) {
  const dropdownChangeHandler = (event) => {
    onFilterChnageHandler(event.target.value);
  };

  return (
    <div className="registrations-filter">
      <div className="registrations-filter__control">
        <label>Filter by Course Name</label>
        <select value={selected} onChange={dropdownChangeHandler}>
          <Options options={courses} />
        </select>
      </div>
    </div>
  );
}

export default RegisteredStudentFilter;
