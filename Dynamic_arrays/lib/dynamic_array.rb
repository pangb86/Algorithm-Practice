require_relative "static_array"

class DynamicArray
  attr_reader :length

  def initialize
    @length = 0
    @capacity = 8
    @store = StaticArray.new(@capacity)
  end

  # O(1)
  def [](index)
    if index + 1 <= length
      @store[index]
    else
      raise "index out of bounds"
    end
  end

  # O(1)
  def []=(index, value)
    if @store[index] == nil
      @length += 1
    end
    @store[index] = value
  end

  # O(1)
  def pop
    if length == 0
      raise "index out of bounds"
    else
      popped = @store[length - 1]
      @length -= 1
      return popped
    end
  end

  # O(1) ammortized; O(n) worst case. Variable because of the possible
  # resize.
  def push(val)
    if length == capacity
      resize!
    end
    @store[length] = val
    @length += 1
  end

  # O(n): has to shift over all the elements.
  def shift
    if @length == 0
      raise "index out of bounds"
    end
    oldArr = @store
    @store = StaticArray.new(@capacity)
    i = 1
    while i < @length
      @store[i - 1] = oldArr[i]
      i += 1
    end
    @length -= 1
  end

  # O(n): has to shift over all the elements.
  def unshift(val)
    oldArr = @store
    if length == capacity
      @capacity = @capacity * 2
      @store = StaticArray.new(@capacity)
    else
      @store = StaticArray.new(@capacity)
    end
    @store[0] = val
    i = 0
    while i < @length
      @store[i + 1] = oldArr[i]
      i += 1
    end
    @length += 1
  end

  protected
  attr_accessor :capacity, :store
  attr_writer :length

  def check_index(index)
  end

  # O(n): has to copy over all the elements to the new store.
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
