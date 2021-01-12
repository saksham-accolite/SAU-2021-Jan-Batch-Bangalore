function primeFactors(num) {
    function isPrime(num) {
      for (let i = 2; i*i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
      }
      return true;
    }
    const res = [];
    for (let i = 2; i <= num; i++)
    {
      if(isPrime(i) && num % i === 0) 
      {
        res.push(i);
        while(num%i==0) {
            num /= i;
        }
      }
    }
    return res;
  }

  console.log(prime_factors(230));
  console.log(prime_factors(430));

  
  