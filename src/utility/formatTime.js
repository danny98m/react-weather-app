import { DateTime } from 'luxon';

// formats time as HH:MM from a unix time string
function formatTimeString(seconds, zone) {
  const time = DateTime.fromSeconds(seconds).setZone(zone);
  const localRepresentation = time.toLocaleString(DateTime.TIME_SIMPLE);
  return localRepresentation;
}

export default formatTimeString;
