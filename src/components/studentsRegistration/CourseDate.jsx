import "./CourseDate.css";

function CourseDate(props) {
  const month = props.date.toLocaleDateString("en-US", { month: "2-digit" });
  const day = props.date.toLocaleDateString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="registration-date">
      <div>
        {day} / {month} / {year}
      </div>
    </div>
  );
}

export default CourseDate;
