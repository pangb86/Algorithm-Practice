// Given a time in -hour AM/PM format, convert it to military (24-hour)
// time.
//
// Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a
// 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on
// a 24-hour clock.

function convertTime(str) {
  // split input at the colons
  let timeArr = str.split(":");
  // get the hours, minutes, seconds, and AM/PM
  let hours = timeArr[0];
  let minutes = timeArr[1];
  let seconds = timeArr[2].substr(0,2);
  let amOrPm = timeArr[2].substr(2);
  // apply change to hours if necessary
  if (amOrPm === "PM" && hours !== "12") {
    hours = parseInt(hours) + 12;
  } else if (amOrPm === "AM" && hours === "12") {
    hours = "00";
  }
  // return combined result
  return `${hours}:${minutes}:${seconds}`;
}
