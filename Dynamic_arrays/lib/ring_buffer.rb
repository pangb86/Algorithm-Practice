require_relative "static_array"

class RingBuffer
  attr_reader :length

  def initialize
    @capacity = 8
    @length = 0
    @start_idx = 0
    @store = StaticArray.new(@capacity)
  end

  # O(1)
  def [](index)
    if index + 1 <= length
      @store[(@start_idx + index) % @capacity]
    else
      raise "index out of bounds"
    end
  end

  # O(1)
  def []=(index, val)
    @store[(@start_idx + index) % @capacity] = val
  end

  # O(1)
  def pop
    if length == 0
      raise "index out of bounds"
    else
      popped = @store[(@start_idx + @length - 1) % @capacity]
      @length -= 1
      return popped
    end
  end

  # O(1) ammortized
  def push(val)
    if @length == @capacity
      resize!
    end
    @store[(@start_idx + @length) % @capacity] = val
    @length += 1
  end

  # O(1)
  def shift
    if @length == 0
      raise "index out of bounds"
    else
      popped = @store[@start_idx]
      @length -= 1
      @start_idx += 1
      return popped
    end
  end

  # O(1) ammortized
  def unshift(val)
    if @length == @capacity
      resize!
    end
    @store[(@start_idx - 1) % @capacity] = val
    @start_idx = (@start_idx - 1) % @capacity
    @length += 1
  end

  protected
  attr_accessor :capacity, :start_idx, :store
  attr_writer :length

  def check_index(index)
  end

  def resize!
    @capacity = @capacity * 2
    oldArr = @store
    @store = StaticArray.new(@capacity)
    i = 0
    while i < @length do
      @store[i] = oldArr[i]
      i += 1
    end
  end
end
