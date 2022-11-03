"use strict";
function combine(input1, input2, resultType) {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultType === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    //   if (resultType === "as-number") {
    //     return +result;
    //   } else {
    //     return result.toString();
    //   }
    return result;
}
const combinedAges = combine(30, 26, "as-number");
const combinedStringAges = combine("30", "26", "as-number");
const combinedNames = combine("Alex", "Giv", "as-text");
console.log(combinedAges);
console.log(combinedStringAges);
console.log(combinedNames);
