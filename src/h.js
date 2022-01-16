var a = 0
var b = () => {
  var temp = a;  // temp = 0, a = 0
  Promise.resolve(10)
    .then((r) => {
      a = temp + r; // a = 10
    })
    .then(() => {
      console.log('2', a) // a = 10
    })
}
b()
// a++
// console.log('1', a)

// '1' 1
// '2' 10