var tmp = 'bar';
function foo() {
  console.log(tmp); // bar
  if (tmp) {
    // 在let命令声明变量tmp之前，都属于变量tmp的“死区”。
    // TDZ开始
    // tmp = 'abc'; // ReferenceError
    // console.log(tmp); // ReferenceError

    let tmp; // TDZ结束
    console.log(tmp); // undefined

    tmp = 123;
    console.log(tmp); // 123
  }
}
foo()
// 