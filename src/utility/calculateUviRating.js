// returns UV Index rating based on the UV Index number
export function calculateUvi (num) {
  const roundedNum = Math.round(num);
  if (roundedNum >= 11) {
    return "Extreme"
  } else if (roundedNum > 7 && roundedNum <= 10) {
    return "Very High"
  } else if (roundedNum > 5 && roundedNum <= 7) {
    return "High"
  } else if (roundedNum > 2 && roundedNum <= 5) {
    return "Moderate"
  } else if (roundedNum <= 2) {
    return "Low"
  }
}