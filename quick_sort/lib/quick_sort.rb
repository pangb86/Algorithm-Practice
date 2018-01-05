class QuickSort
  # Quick sort has average case time complexity O(nlogn), but worst
  # case O(n**2).

  # Not in-place. Uses O(n) memory.

  def self.sort1(array)
    return array if array.length <= 1

    pivot_idx = rand(array.length)
    pivot = array[pivot_idx]
    right = []
    left = []

    array.each_with_index do |el, idx|
      if idx != pivot_idx
        if array[idx] >= pivot
          right.push(array[idx])
        else
          left.push(array[idx])
        end
      end
    end

    return self.sort1(left).push(pivot).concat(self.sort1(right))
  end

  # In-place.
  def self.sort2!(array, start = 0, length = array.length, &prc)
    prc ||= Proc.new{|x, y| x <=> y}
    return array if length <= 1

    barrier = self.partition(array, start, length, &prc)

    self.sort2!(array, start, barrier - start, &prc)
    self.sort2!(array, barrier + 1, length - barrier - 1, &prc)
  end

  def self.partition(array, start, length, &prc)
    prc ||= Proc.new{|x, y| x <=> y}
    pivot = array[start]
    barrier = start

    (start + 1...start + length).each do |idx|
      if prc.call(pivot, array[idx]) == 1
        barrier += 1
        array[barrier], array[idx] = array[idx], array[barrier]
      end
    end

    array[start], array[barrier] = array[barrier], array[start]

    barrier
  end
end
