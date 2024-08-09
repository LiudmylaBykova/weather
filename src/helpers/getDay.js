export function getDay(dateString) {
  const customDaysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const today = new Date();
  const targetDate = new Date(dateString);

  today.setHours(0, 0, 0, 0);
  targetDate.setHours(0, 0, 0, 0);

  const differenceInTime = targetDate.getTime() - today.getTime();
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

  if (differenceInDays === 0) {
    return "Today";
  } else if (differenceInDays === 1) {
    return "Tomorrow";
  } else {
    return customDaysOfWeek[targetDate.getDay()].slice(0, 3);
  }
}
