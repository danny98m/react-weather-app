// Parses through google maps reverse geocoding api
// result data to return specified and formatted location information
const getLocaleInfo = (address, level, length) => {
  // grab location information from api data based on level of administration
  const locationObj = address.filter((component) => component.types[0] === level)[0];

  // return abbreviation or full
  return (
    length === 'short'
      ? locationObj.short_name
      : locationObj.long_name
  );
};

export default getLocaleInfo;
