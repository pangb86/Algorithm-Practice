function leapYearRange(startYear, endYear) {
  let result = [];

  for (let i = startYear; i <= endYear; i++) {
    if (testLeapYear(i)) {
      result.push(i);
    }
  }
  return result;
}

function testLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
    return year;
  } else {
    return false;
  }
}
