# Given an Array of tuples, where tuple[0] represents a package id,
# and tuple[1] represents its dependency, determine the order in which
# the packages should be installed. Only packages that have dependencies
# will be listed, but all packages from 1..max_id exist.

# N.B. this is how `npm` works.

# Import any files you need to

require_relative 'graph'
require_relative 'topological_sort'

def install_order(arr)
  vertices = []
  max_id = 0

  arr.each do |pair|
    max_id = pair[0] if pair[0] > max_id
    max_id = pair[1] if pair[1] > max_id
  end

  (1..max_id).each do |package_id|
    vertex = Vertex.new(package_id)
    vertices.push(vertex)
  end

  arr.each do |tuple|
    to_vertex = vertices[tuple[0] - 1]
    from_vertex = vertices[tuple[1] - 1]
    Edge.new(from_vertex, to_vertex)
  end

  topological_sort(vertices).map(&:value)
end
