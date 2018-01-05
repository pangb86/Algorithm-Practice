require_relative 'heap'

def k_largest_elements(array, k)
  prc = Proc.new { |x, y| y <=> x }
  result = []

  make_max_heap(array, &prc)

  k.times do
    result.push(array[0])
    array = array[1..-1]
    make_max_heap(array, &prc)
  end

  result
end

def make_max_heap(array, &prc)
  array.each_with_index do |val, idx|
    BinaryMinHeap.heapify_up(array, idx, array.length, &prc)
  end
end
