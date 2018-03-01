// Given a 32-bit signed integer, reverse digits of an integer.

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
    if (neg == true) {
        return parseInt("-" + rev_pos_str);
    } else {
        return parseInt(rev_pos_str);
    }
};
