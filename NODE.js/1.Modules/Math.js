exports.add = (a, b) => a + b;
exports.sub = (a, b) => a - b;
exports.mul = (a, b) => a * b;
exports.div = (a, b) => a / b;
exports.mod = (a, b) => a % b;

exports.pow = (a, b) => {
  for (let i = 1; i < b; i++) a *= a;

  return a;
};
// module.exports = { add, sub, mul, div, mod  };
