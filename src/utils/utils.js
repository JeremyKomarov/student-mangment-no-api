function dateFormatting(date) {
  const year = date.toLocaleDateString("default", { year: "numeric" });
  const month = date.toLocaleDateString("default", { month: "2-digit" });
  const day = date.toLocaleDateString("default", { day: "2-digit" });

  const formattedDate = year + "-" + month + "-" + day;
  return formattedDate;
}

function normalizeCourseName(courseName = "") {
  const splittedCourseName = courseName.split(" ");

  const newSplittedCourseNameArray = splittedCourseName.map((name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  });

  return newSplittedCourseNameArray.join(" ") + " Course";
}

function normalizeCourseDate(date = "") {
  const splittedDate = date.split("-");
  const foramttedDate = new Date(
    Number(splittedDate[0]),
    Number(splittedDate[1] - 1),
    Number(splittedDate[2]),
  );

  return foramttedDate;
}

function normalizeStudentFullName(firstName = "", lastName = "") {
  return firstName + " " + lastName;
}

export {
  dateFormatting,
  normalizeCourseName,
  normalizeCourseDate,
  normalizeStudentFullName,
};
