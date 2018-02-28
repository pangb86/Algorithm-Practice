# Given a 32-bit signed integer, reverse digits of an integer.

def reverse(x)
    num_string = x.to_s
    if num_string[0] == "-"
        neg = true
        num_string = num_string[1..-1]
    end
    num_string = num_string.split("").reverse().join("")
    until num_string[0] != 0
        num_string = num_string[1..-1]
    end
    if neg == true
        num_string = "-" + num_string
    end
    num_string.to_i
end
