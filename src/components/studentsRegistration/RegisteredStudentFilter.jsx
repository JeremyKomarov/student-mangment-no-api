import "./RegisteredStudentFilter.css";

function RegisteredStudentFilter(props) {
  const dropdownChangeHandler = (event) => {
    props.onFilterChnageHandler(event.target.value);
  };

  return (
    <div className="registrations-filter">
      <div className="registrations-filter__control">
        <label>Filter by Course Name</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="fullstack">Fullstack Course</option>
          <option value="qa">QA Course</option>
          <option value="cyber">Cyber Course</option>
          <option value="product">Product Managment Course</option>
        </select>
      </div>
    </div>
  );
}

export default RegisteredStudentFilter;
