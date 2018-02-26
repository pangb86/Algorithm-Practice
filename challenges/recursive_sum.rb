# Write a function that takes an array of integers and returns their sum.
# Use recursion.

def sum_rec(arr)
  return 0 if arr.empty?
  arr[0] + sum_rec(arr.drop(1))
end
