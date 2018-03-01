# Write a function, fibs(num) which returns the first n elements from
# the fibonnacci sequence, given n.

def fibs(num)
  return [] if num == 0
  return [0] if num == 1

  fibs = [0, 1]
  
  while fibs.count < num
    fibs << fibs[-1] + fibs[-2]
  end

  fibs
end
