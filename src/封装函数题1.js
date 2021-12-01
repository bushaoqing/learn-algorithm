/* 
   实现curry函数，使得sum1Curry和sum2Curry的结果成立
   提示: fn函数的参数数量可以通过fn.length获取
*/

const curry = (fn) => {

    // 补充函数
    const len = fn.length
    let args = []

    const f = function () {
        if (args.length < len) {
            args = args.concat(...arguments)
            return f(...args)
        } else if (args.length === len) {
            console.log(fn.call(this, ...args)); // call\apply是立即执行函数
            return fn.bind(this, ...args) // bind是返回的函数，不会立即执行
        } else {
            throw TypeError('参数错误')
        }
    }

    return f

}

const sum1 = (a, b, c, d) => a + b + c + d;
const sum2 = (a, b) => a * b;

const sum1Curry = curry(sum1);
const sum2Curry = curry(sum2);
sum1Curry(1, 1, 1, 1) // 4
sum1Curry(1, 1)(1, 1) // 4
sum1Curry(1)(1, 1, 1) // 4

sum2Curry(1)(1)       // 1
sum2Curry(1, 1)       // 1 
// sum2Curry(1, 1, 3)       // 1 