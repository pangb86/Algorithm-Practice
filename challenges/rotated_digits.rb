# X is a good number if after rotating each digit individually by 180 
# degrees, we get a valid number that is different from X. A number is
# valid if each digit remains a digit after rotation. 0, 1, and 8 rotate
# to themselves; 2 and 5 rotate to each other; 6 and 9 rotate to each
# other, and the rest of the numbers do not rotate to any other number.
#
# Now given a positive number N, how many numbers X from 1 to N are good?

def rotated_digits(n)
    valid = 0
    (1..n).each do |num|
        valid += 1 if rotate_number(num)
    end
    valid
end

def rotate_number(num)
    new_num_str = ""
    num_string = num.to_s
    return false if num_string.include?("3") || num_string.include?("4") || num_string.include?("7")
    num_string.each_char do |digit|
        if digit == "1" || digit == "0" || digit == "8"
            new_num_str.concat(digit)
        elsif digit == "2"
            new_num_str.concat("5")
        elsif digit == "5"
            new_num_str.concat("2")
        elsif digit == "6"
            new_num_str.concat("9")
        elsif digit == "9"
            new_num_str.concat("6")
        end
    end

    return false if new_num_str == num_string
    true
end
