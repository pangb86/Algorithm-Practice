// Given a 32-bit signed integer, reverse digits of an integer.
// Return 0 if the reversed number is outside the 32-bit signed integer
// range.

var reverse = function(x) {
    // convert number to string
    let num_str = x.toString();
    let pos_str = "";
    let neg = false;
    // check if the number is negative
    if (num_str[0] === "-") {
        neg = true;
        // if it's negative, remove the minus sign
        pos_str = num_str.substr(1);
    } else {
        pos_str = num_str;
    }

    // split the string and reverse it
    let rev_pos_arr = pos_str.split("").reverse();
    let last_zero = 0;

    // find the last position of any starting zeroes
    for (let i = 0; i < rev_pos_arr.length; i++) {
        if (rev_pos_arr[i] !== 0) {
            break;
        } else {
            last_zero = i;
        }
    }

    // slice off the beginning zeroes
    let rev_pos_str = rev_pos_arr.join("").substr(last_zero);
    let final_num = 0;

    // convert the string back to an integer
    // add the minus sign back if it was a negative number
    if (neg === true) {
        final_num = parseInt("-" + rev_pos_str);
    } else {
        final_num = parseInt(rev_pos_str);
    }

    // return 0 if it is outside the 32-bit signed integer range
    if (final_num < -2147483648 || final_num > 2147483647) {
      return 0;
    } else {
      return final_num;
    }
};
