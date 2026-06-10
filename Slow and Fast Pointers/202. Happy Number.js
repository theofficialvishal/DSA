function happyNumber(n) {
  function square(n) {
    let sum = 0
    while (n > 0) {
      let digit = n % 10
      n = Math.floor(n / 10)
      sum =  sum + digit*digit
    }
    return sum
  }

  let slow = n
  let fast = n
  while (fast !== 1) {
    slow = square(slow)
    fast = square(fast)
    fast = square(fast)
    if (slow === fast && slow !==1) {
      return false
    }
  }
  return true
}

let n = 4;
console.log(happyNumber(n));
