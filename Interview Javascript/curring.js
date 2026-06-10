// 1. Normal Function (Ek sath saare paise)
function normalSum(a, b, c) {
  return a + b + c;
}
console.log(normalSum(10, 20, 30)); // Output: 60

// 2. Curried Function (Instalment system - Closures ka use karke)
function curriedSum(a) {
  return function (b) {
    return function (c) {
      return a + b + c; // Aakhri function ke paas closures ki wajah se 'a' aur 'b' dono ka access hai
    };
  };
}

// Ise call kaise karenge?
console.log(curriedSum(10)(20)(30)); // Output: 60
