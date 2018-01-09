require 'binary_search_tree'

def kth_largest(tree_node, k)
  bst = BinarySearchTree.new()
  sorted_arr = bst.in_order_traversal(tree_node).reverse
  kth_largest_val = sorted_arr[k -1]
  bst.find(kth_largest_val, tree_node)
end
