# Given five positive integers, find the minimum and maximum
# values that can be calculated by summing exactly four of the five
# integers. Then print the respective minimum and maximum values as
# a single line of two space-separated long integers.

def miniMaxSum(arr)
  arr = arr.sort
  a = arr[1..-1].reduce(:+)
  b = arr[0..-2].reduce(:+)
  print b
  print " "
  print a
end
