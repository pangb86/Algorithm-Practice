# Write a function, longest_common_substring(str1, str2) that takes two
# strings and returns the longest common substring. A substring is
# defined as any consecutive slice of letters from another string.

def make_matrix(a, b)
  matrix = Array.new(a.length + 1) { Array.new(b.length + 1, 0) }

  a.chars.each_with_index do |el1, idx1|
    b.chars.each_with_index do |el2, idx2|
      if el1 == el2
        matrix[idx1 + 1][idx2 + 1] = matrix[idx1][idx2] + 1
      else
        matrix[idx1 + 1][idx2 + 1] = 0
      end
    end
  end

  matrix
end

def longest_common_substring(a, b)
  matrix = make_matrix(a, b)
  longest = ""

  matrix.each_with_index do |row, idx1|
    row.each_with_index do |current, idx2|
      if current > longest.length
        longest = b[idx2 - current..idx2]
      end
    end
  end

  longest
end
# O(m*n) time complexity where m and n are the lengths of the input strings
# O(m*n) space complexity
