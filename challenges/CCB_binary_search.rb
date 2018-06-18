def binary_search(arr, target)
  return nil if arr.empty?

  midpoint = arr.length / 2

  if target == arr[midpoint]
    midpoint
  elsif target < arr[midpoint]
    binary_search(arr.take(midpoint), target)
  else
    sub_index = binary_search(arr.drop(midpoint + 1), target)
    sub_index == nil ? nil : midpoint + 1 + sub_index
  end
end
# O(log(n)) time complexity
# O(1) space complexity
