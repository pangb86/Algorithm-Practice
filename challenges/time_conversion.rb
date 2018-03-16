# Given a time in -hour AM/PM format, convert it to military (24-hour)
# time.
#
# Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a
# 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on
# a 24-hour clock.

def timeConversion(s)
  timeArr = s.split(":");
  hours = timeArr[0];
  minutes = timeArr[1];
  seconds = timeArr[2][0...-2]
  am_or_pm = timeArr[2][-2..-1]

  if am_or_pm == "PM" && hours != "12"
    hours = (hours.to_i + 12).to_s
  elsif am_or_pm == "AM" && hours == "12"
    hours = "00"
  end

  hours + ":" + minutes + ":" + seconds
end
