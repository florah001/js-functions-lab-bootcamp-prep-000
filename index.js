// write your code below!
function happyHolidays(string) {
  return ("Happy holidays!")
}
function happyHolidaysTo(name) {
  return ("Happy holidays, you!")
  console.log("Happy holidays, '${name}")
}
function happyHolidayTo(holiday, name) {
  return ("Happy Independence Day, you!")
  console.log()
}
function holidayCountdown(holiday, days) {
  return ("It's ${days} days until${holiday}!")
}

  1) functions happyHolidayTo(holiday, name) returns "Happy ${holiday}, ${name}!":

      Error: Expected 'Happy ${holiday}, ${name}!' to equal 'Happy IndependenceDay, you!'
      + expected - actual

      -Happy ${holiday}, ${name}!
      +Happy Independence Day, you!