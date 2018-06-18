def bubble_sort(arr)
  swapped = true;

  while swapped
    swapped = false
    (arr.length - 2).times do |idx|
      if arr[idx] > arr[idx + 1]
        arr[idx], arr[idx + 1] = arr[idx + 1], arr[idx]
        swapped = true
      end
    end
  end

  arr
end
# O(n^2) time complexity
# O(1) space complexity
