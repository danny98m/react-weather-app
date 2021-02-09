import { DateTime } from 'luxon';

// Returns a formatted date pased on time information and a format specifier
export const formatDate = (timestamp, timezone, format) => {
  const date = DateTime.fromSeconds(timestamp).setZone(timezone);
  
  if (format in date) {
    return date[format];
  } else {
    return date.toLocaleString(DateTime[format]);
  }
}