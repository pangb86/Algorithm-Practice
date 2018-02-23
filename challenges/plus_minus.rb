# Given an array of integers, calculate which fraction of its elements
# are positive, which fraction of its elements are negative, and which
# fraction of its elements are zeroes, respectively. Print the decimal
# value of each fraction on a new line.

def plusMinus(arr)
  neg = 0
  pos = 0
  zero = 0
  arr.each do |el|
    if el > 0
      pos += 1
    elsif el < 0
      neg += 1
    elsif el == 0
      zero += 1
    end
  end

  p pos / arr.length.to_f
  p neg / arr.length.to_f
  p zero / arr.length.to_f
end
