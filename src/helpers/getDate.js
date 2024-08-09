export function getDate(dateString) {
  const date = new Date(dateString);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = date.getUTCDate();
  const month = months[date.getUTCMonth()].slice(0, 3);

  const formattedDate = `${String(day).padStart(2, "0")} ${month}`;
  return formattedDate;
}
