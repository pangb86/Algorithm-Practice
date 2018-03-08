# Given a 32-bit signed integer, reverse digits of an integer.
# Return 0 if the reversed number is outside the 32-bit signed integer
# range.

def reverse(x)
    num_string = x.to_s

    if num_string[0] === "-"
        neg = true
        num_string = num_string[1..-1]
    end

    num_string = num_string.split("").reverse.join("")

    until num_string[0] != 0
        num_string = num_string[1..-1]
    end

    if neg == true
        num_string = "-" + num_string
    end

    if num_string.to_i < -2147483648 || num_string.to_i > 2147483647
        return 0
    else
        return num_string.to_i
    end
end
