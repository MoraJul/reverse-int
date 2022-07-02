module.exports = function reverse (n) {
  let result = ""
let num = Math.abs(n)
let str = String(num)

  for (i = str.length - 1; i >= 0; i--) {
    result = `${result}${str[i]}`;
}
return result;
  }
