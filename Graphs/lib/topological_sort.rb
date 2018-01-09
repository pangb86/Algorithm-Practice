require_relative 'graph'

# Implementing topological sort using both Khan's and Tarian's algorithms

def topological_sort(vertices)
  list = []
  sorted = []
  count_set = {}

  vertices.each do |vertex|
    count_set[vertex] = vertex.in_edges.count
    list << vertex if vertex.in_edges.empty?
  end

  until list.empty?
    vertex = list.shift
    sorted << vertex

    vertex.out_edges.each do |edge|
      to = edge.to_vertex
      count_set[to] -= 1
      list << to if count_set[to] == 0
    end
  end

  if sorted.length == vertices.length
    sorted
  else
    []
  end
end
