export function convertTo24Hour(time) {
  let [timePart, modifier] = time.split(" ");
  let [hours, minutes] = timePart.split(":");

  hours = parseInt(hours, 10);

  if (modifier === "PM" && hours !== 12) {
    hours += 12;
  } else if (modifier === "AM" && hours === 12) {
    hours = 0;
  }

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");

  return `${hours}:${minutes}`;
}
