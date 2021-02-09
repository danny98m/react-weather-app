// formats time as HH:MM from a unix time
export function formatTimeString(time) {
  const dateTime = new Date(time * 1000);
  const dateTimeHours = dateTime.getHours();
  const dateTimeMinutes = dateTime.getMinutes();

  let dateTimeFormat = '';

  dateTimeFormat += `${dateTimeHours}:`;

  if (dateTimeMinutes < 10) {
    dateTimeFormat += `0${dateTimeMinutes}`;
  } else {
    dateTimeFormat += dateTimeMinutes;
  }

  return dateTimeFormat;
}