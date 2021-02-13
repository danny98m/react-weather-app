// returns UV Index rating based on the UV Index number
function calculateUvi(num) {
  const roundedNum = Math.round(num);
  if (roundedNum >= 11) {
    return 'Extreme';
  }
  if (roundedNum > 7 && roundedNum <= 10) {
    return 'Very High';
  }
  if (roundedNum > 5 && roundedNum <= 7) {
    return 'High';
  }
  if (roundedNum > 2 && roundedNum <= 5) {
    return 'Moderate';
  }
  if (roundedNum <= 2) {
    return 'Low';
  }

  // default
  return 'Low';
}

export default calculateUvi;
