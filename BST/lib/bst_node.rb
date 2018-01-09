class BSTNode
  attr_reader :value
  attr_accessor :parent, :left, :right

  def initialize(value, parent = nil)
    @value = value
    @parent = parent
    @left = nil
    @right = nil
  end

  def insert(val)
    if val < @value
      @left.nil? ? @left = BSTNode.new(val) : @left.insert(val)
    elsif val > @value
      @right.nil? ? @right = BSTNode.new(val) : @right.insert(val)
    end
  end
end
