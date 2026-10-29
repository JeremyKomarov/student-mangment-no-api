function dateFormatting(date) {
  const year = date.toLocaleDateString("default", { year: "numeric" });
  const month = date.toLocaleDateString("default", { month: "2-digit" });
  const day = date.toLocaleDateString("default", { day: "2-digit" });

  const formattedDate = year + "-" + month + "-" + day;
  return formattedDate;
}

export default dateFormatting;
