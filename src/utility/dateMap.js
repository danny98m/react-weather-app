// returns the full name for the day of the week 
export const mapToDay = num => {
  switch (num) {
    case 0:
      return 'Sunday'
    case 1: 
      return 'Monday'
    case 2:
      return 'Tuesday'
    case 3: 
      return 'Wednesday'
    case 4: 
      return 'Thursday'
    case 5: 
      return 'Friday'
    case 6:
      return 'Saturday' 
  
    default:
      return 'Error'
  }
}

// returns the full name for the month of the year
export const mapToMonth = num => {
  switch(num) {
    case 0: 
      return 'January'
    case 1:
      return 'February'
    case 2: 
      return 'March'
    case 3: 
      return 'April'
    case 4: 
      return 'May'
    case 5: 
      return 'June'
    case 6: 
      return 'July'
    case 7:
      return 'August'
    case 8:
      return 'September'
    case 9:
      return 'October'
    case 10: 
      return 'November'
    case 11:
      return 'December'  
    default:
      return 'Error'
  }
}