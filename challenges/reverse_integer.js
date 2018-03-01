// Given a 32-bit signed integer, reverse digits of an integer.
// Return 0 if the reversed number is outside the 32-bit signed integer
// range.

var reverse = function(x) {
    let num_str = x.toString();
    let pos_str = "";
    let neg = false;

    if (num_str[0] == "-") {
        neg = true;
        pos_str = num_str.substr(1);
    } else {
        pos_str = num_str;
    }

    let rev_pos_arr = pos_str.split("").reverse();
    let last_zero = 0;

    for (let i = 0; i < rev_pos_arr.length; i++) {
        if (rev_pos_arr[i] != 0) {
            break;
        } else {
            last_zero = i;
        }
    }

    let rev_pos_str = rev_pos_arr.join("").substr(last_zero);
    let final_num = 0;

    if (neg == true) {
        final_num = parseInt("-" + rev_pos_str);
    } else {
        final_num = parseInt(rev_pos_str);
    }

    if (final_num < -2147483648 || final_num > 2147483647) {
      return 0;
    } else {
      return final_num;
    }
};
