function changeCase(input) {
    let str = "";
    let len = input.length;
    for(let i = 0; i < len; i++) {
        if (/[A-Z]/.test(input[i])) {
            str += input[i].toLowerCase();
        }
        else {
            str += input[i].toUpperCase();
        }
    }
    return str;
}

console.log(changeCase("SaKsHaM"));