/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    // initialize variables
    let c = "", sum = 0, digitA = 0, digitB = 0, remainder = 0;

    // loop until both strings are empty
    while (a.length > 0 || b.length > 0 || remainder > 0) {

        // if string a is not empty
        // then remove the last character in the string
        if (a.length !== 0) {
            digitA = Number(a[a.length - 1]);
            a = a.substring(0, a.length - 1);
        }

        // if string b is not empty
        // then remove the last character in the string
        if (b.length !== 0) {
            digitB = Number(b[b.length - 1]);
            b = b.substring(0, b.length - 1);
        }

        // find the sum of the numbers from string a, string b and the remainder
        sum = digitA + digitB + remainder;

        // reset digit a, digit b, and the remainder
        digitA = 0;
        digitB = 0;
        remainder = 0;

        // if the sum is 0
        // then insert a "0" in front of string c
        if (sum === 0) {
            c = "0" + c;
        }

        // else if the sum is 1
        // then insert a "1" in front of string c
        else if (sum === 1) {
            c = "1" + c;
        }

        // else if the sum is 2
        // then insert a "0" in front of string c and increment the remainder by 1
        else if (sum === 2) {
            c = "0" + c;
            remainder = 1;
        }

        // else if the sum is 3
        // then insert a "1" in front of string c and increment the remainder by 1
        else if (sum === 3) {
            c = "1" + c;
            remainder = 1;
        }
    }

    // return the new string
    return c;
};