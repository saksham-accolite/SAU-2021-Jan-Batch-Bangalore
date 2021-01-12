function checkSameDigit(num) {
    let digit = num%10;
    while(num!=0) {
        if(num%10 !== digit) {
            return false;
        }
        num = Math.floor(num/10);
    }
    return true;
}

console.log(checkSameDigit(10));
console.log(checkSameDigit(11111));
