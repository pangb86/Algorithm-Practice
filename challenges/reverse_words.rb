# Given a string, you need to reverse the order of characters in each
# word within a sentence while still preserving whitespace and initial
# word order.

def reverse_words(s)
  result = s.split(" ").map do |word|
    word.reverse
  end

  result.join(" ")
end
