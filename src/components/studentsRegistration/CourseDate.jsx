import { dateFormatting } from "../../utils/utils";
import "./CourseDate.css";

function CourseDate(props) {
  const { date } = props;

  const formattedDate = dateFormatting(date);

  return (
    <div className="registration-date">
      <div>{formattedDate}</div>
    </div>
  );
}

export default CourseDate;
