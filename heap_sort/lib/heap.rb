class BinaryMinHeap
  attr_reader :store, :prc

  def initialize(&prc)
    @store = []
    prc ||= Proc.new do |el1, el2|
      el1 <=> el2
    end
  end

  def count
    @store.length
  end

  def extract
    first_val = @store[0]
    @store[0] = @store[@store.length - 1]
    @store[@store.length - 1] = first_val
    @store.pop
    BinaryMinHeap.heapify_down(@store, 0)
    first_val
  end

  def peek
    @store[0]
  end

  def push(val)
    @store.push(val)
    last_idx = @store.length - 1
    BinaryMinHeap.heapify_up(@store, last_idx)
  end

  public
  def self.child_indices(len, parent_index)
    child_arr = []

    if (2 * parent_index + 1) < len
      child_arr.push(2 * parent_index + 1)
    end
    if (2 * parent_index + 2) < len
      child_arr.push(2 * parent_index + 2)
    end

    child_arr
  end

  def self.parent_index(child_index)
    if child_index == 0
      raise "root has no parent"
    end
    (child_index - 1) / 2
  end

  def self.heapify_down(array, parent_idx, len = array.length, &prc)
    prc = prc || Proc.new { |x, y| x <=> y }
    child_indices = self.child_indices(len, parent_idx)
    parent_val = array[parent_idx]

    if child_indices == []
      return array
    end

    if child_indices.length == 1
      child_val = array[child_indices[0]]
      child_idx = child_indices[0]
    elsif child_indices.length == 2
      left_child = array[child_indices[0]]
      right_child = array[child_indices[1]]
      if prc.call(left_child, right_child) < 1
        child_val = left_child
        child_idx = child_indices[0]
      else
        child_val = right_child
        child_idx = child_indices[1]
      end
    end

    if prc.call(parent_val, child_val) == 1
      array[child_idx] = parent_val
      array[parent_idx] = child_val
      parent_idx = child_idx
      self.heapify_down(array, parent_idx, len, &prc)
    else
      return array
    end
  end

  def self.heapify_up(array, child_idx, len = array.length, &prc)
    prc = prc || Proc.new { |x, y| x <=> y }

    if child_idx == 0
      return array
    end

    child_val = array[child_idx]
    parent_idx = self.parent_index(child_idx)
    parent_val = array[parent_idx]

    if prc.call(parent_val, child_val) == 1
      array[child_idx] = parent_val
      array[parent_idx] = child_val
      child_idx = parent_idx
      self.heapify_up(array, child_idx, len, &prc)
    else
      return array
    end
  end
end
