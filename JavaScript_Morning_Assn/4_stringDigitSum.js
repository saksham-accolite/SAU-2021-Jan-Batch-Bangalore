function stringDigitSum(input) {
    let sum = 0;
  
    for (let i = 0; i < input.length; i++) {
      if (/[0-9]/.test(input[i])) {
        sum += parseInt(input[i]);
      }
    }
        return sum;
    }
  
  console.log(stringDigitSum("snj93b3hb3b3jk"));
  console.log(stringDigitSum("jksd2348njknj082hhjij2933hb3"));