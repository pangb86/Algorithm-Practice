# HackerLand University has the following grading policy:
#
# Every student receives a grade in the inclusive range from 0 to 100.
# Any grade less than 40 is a failing grade.
# Sam is a professor at the university and likes to round each student's
# grade according to these rules:
#
# If the difference between the grade and the next multiple of 5 is less
# than 3, round grade up to the next multiple of 5.
# If the value of grade is less than 38, no rounding occurs as the result
# will still be a failing grade.
# For example, 84 will be rounded to 85 but 29 will not be rounded
# because the rounding would result in a number that is less than 40.
#
# Given the initial value of grade for each of Sam's  students, write
# code to automate the rounding process. Complete the function solve that
# takes an integer array of all grades, and return an integer array
# consisting of the rounded grades. For each grade, round it according to
# the rules above and print the result on a new line.

def solve(grades)
  result = []

  grades.each do |grade|
    if grade < 38 || grade % 5 <= 2
      result.push(grade)
    else
      result.push(grade + (5 - grade % 5))
    end
  end

  return result
end
