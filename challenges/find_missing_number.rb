# Assume an array of non-negative integers. A second array is formed by
# shuffling the elements of the first array and deleting a random element.
# Given these two arrays, find which element is missing in the second
# array. Do this in linear time with constant memory use.

def find_missing_number(array1, array2)
  array1.reduce(:+) - array2.reduce(:+)
end
