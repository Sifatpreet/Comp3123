"use strict";
const capitalized = function (sentence){
    let str = sentence.split(" ");
    for (let i=0; i<str.length;i++){
        str[i]= str[i][0].toUpperCase()+str[i].substring(1);

    }
    return str.join(" ");
    
}
console.log(capitalized("the quick brown fox")); 

const max = function (n1, n2, n3) {

    let max_no = 0;

    if (n1 > n2) {
        max_no = n1;
    }
    else {
        max_no = n2;
    }
    if (n3 > max_no) {
        max_no = n3;
    }
    return max_no;
}

console.log(max(1,0,1));
console.log(max(0,-10,-20));
console.log(max(1000,510,440));
