import { DateTime } from 'luxon';

// Returns a formatted date pased on time information and a format specifier
const formatDate = (timestamp, timezone, format) => {
  const date = DateTime.fromSeconds(timestamp).setZone(timezone);

  if (format in date) {
    return date[format];
  }

  return date.toLocaleString(DateTime[format]);
};

export default formatDate;
