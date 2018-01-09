# There are many ways to implement these methods, feel free to add arguments
# to methods as you see fit, or to create helper methods.

class BinarySearchTree
  attr_accessor :root

  def initialize
    @root = nil
  end

  def insert(value)
    if @root == nil
      @root = BSTNode.new(value)
    else
      @root.insert(value)
    end
  end

  def find(value, tree_node = @root)
    return nil if tree_node.nil?

    if value < tree_node.value
      find(value, tree_node.left )
    elsif value > tree_node.value
      find(value, tree_node.right )
    else
      return tree_node
    end
  end

  # def delete(value)
  #   node = find(value)
  #
  #   if node == @root
  #     @root = nil
  #     return
  #   end
  #
  #   if node
  #     parent = node.parent
  #     left = node.left
  #     right = node.right
  #
  #     if left.nil? && right.nil?
  #       parent.right = nil if parent.value < value
  #       parent.left = nil if parent.value >= value
  #
  #     elsif left.nil? ^ right.nil?
  #       if parent.left == node
  #         if left
  #           parent.left = left
  #           left.parent = parent
  #         else
  #           parent.left = right
  #           right.parent = parent
  #         end
  #       else
  #         if left
  #           parent.right = left
  #           left.parent = parent
  #         else
  #           parent.right = right
  #           right.parent = parent
  #         end
  #       end
  #
  #     else
  #       max_node = maximum(left)
  #
  #       if max_node.left
  #         max_node.parent.right = max_node.left
  #         max_node.left.parent = max_node.parent
  #       end
  #
  #       if parent.left = node
  #         parent.left = max_node
  #         max_node.parent = parent
  #         max_node.left = left
  #         max_node.right = right
  #       else
  #         parent.right = max_node
  #         max_node.parent = parent
  #         max_node.left = left
  #         max_node.right = right
  #       end
  #     end
  #   end
  # end

  def delete(val)
    node = find(val)

    if node == @root
      @root = nil
      return
    end

    parent = find_parent(@root, node)
    left = node.left
    right = node.right

    if left.nil? && right.nil?
      parent.right = nil if parent.value < val
      parent.left = nil if parent.value >= val
    elsif left.nil? ^ right.nil?
      if parent.left == node
        if left
          parent.left = left
          left.parent = parent
        else
          parent.left = right
          right.parent = parent
        end
      else
        if left
          parent.right = left
          left.parent = parent
        else
          parent.right = right
          right.parent = parent
        end
      end
    else
      max_node = maximum(left)
      max_node_parent = find_parent(@root, max_node)
      max_node_left_parent = find_parent(@root, max_node.left)

      if max_node.left
        max_node_parent.right = max_node.left
        max_node_left_parent = max_node_parent
      end

      if parent.left = node
        parent.left = max_node
        max_node_parent = parent
        max_node.left = left
        max_node.right = right
      else
        parent.right = max_node
        max_node_parent = parent
        max_node.left = left
        max_node.right = right
      end
    end
  end

  # helper method for #delete:
  def maximum(tree_node = @root)
    if tree_node.right == nil
      return tree_node
    else
      maximum(tree_node.right)
    end
  end

  def depth(tree_node = @root)
    if tree_node == nil
      return -1
    end

    left_depth = depth(tree_node.left)
    right_depth = depth(tree_node.right)

    if left_depth > right_depth
      return left_depth + 1
    else
      return right_depth + 1
    end
  end

  def is_balanced?(tree_node = @root)
    check_height(tree_node) == -1 ? false : true
  end

  def in_order_traversal(tree_node = @root, arr = [])
    if tree_node.left
      in_order_traversal(tree_node.left, arr)
    end

    arr.push(tree_node.value)

    if tree_node.right
      in_order_traversal(tree_node.right, arr)
    end

    arr
  end

  def post_order_traversal(tree_node = @root, arr = [])
    if tree_node.left
      post_order_traversal(tree_node.left)
    end
    if tree_node.right
      post_order_traversal(tree_node.right)
    end

    arr.push(tree_node.value)
  end

  private
  # optional helper methods go here:

  def check_height(node)
    return 0 if node.nil?

    leftHeight = check_height(node.left)
    return -1 if leftHeight == -1

    rightHeight = check_height(node.right)
    return -1 if rightHeight == -1

    diff = leftHeight - rightHeight

    if diff.abs > 1
      -1
    else
      [leftHeight, rightHeight].max + 1
    end
  end

  def find_parent(tree_node = @root, node)
    if node == @root
      return nil
    end

    if tree_node.left == node || tree_node.right == node
      return tree_node
    elsif node.value > tree_node.right.value
      find_parent(tree_node.right, node)
    else
      find_parent(tree_node.left, node)
    end
  end
end
