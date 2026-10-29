import dateFormatting from "../../utils/dateUtils";
import "./CourseDate.css";

function CourseDate(props) {
  const formattedDate = dateFormatting(props.date);

  return (
    <div className="registration-date">
      <div>{formattedDate}</div>
    </div>
  );
}

export default CourseDate;
