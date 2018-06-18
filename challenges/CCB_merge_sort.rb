def merge_sort(arr)
  return arr if arr.length == 1

  midpoint = arr.length / 2
  sorted_left = merge_sort(arr.take(midpoint))
  sorted_right = merge_sort(arr.drop(midpoint))

  merge(sorted_left, sorted_right)
end

def merge(left, right)
  merged = []

  until left.empty? || right.empty?
    if left.first <= right.first
      merged.push(left.shift)
    else
      merged.push(right.shift)
    end
  end

  merged.concat(left)
  merged.concat(right)
  merged
end
# O(nlog(n)) time complexity
# O(n) space complexity
