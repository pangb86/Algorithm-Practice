require_relative "heap"

class Array
  def heap_sort!
    prc = Proc.new { |x, y| y <=> x }

    self.each_with_index do |val, idx|
      BinaryMinHeap.heapify_up(self, idx, self.length, &prc)
    end

    self.each_with_index do |val, idx|
      first_val = self[0]
      self[0] = self[self.length - 1 - idx]
      self[self.length - 1 - idx] = first_val
      BinaryMinHeap.heapify_down(self, 0, self.length - 1 - idx, &prc)
    end
  end
end
