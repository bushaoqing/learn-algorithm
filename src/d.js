/* 
   实现curry函数，使得sum1Curry和sum2Curry的结果成立
   提示: fn函数的参数数量可以通过fn.length获取
*/

const curry = (fn) => {
    const len = fn.length
    let args = []

    const f = function () {
        if (args.length < len) {
            args = args.concat(...arguments)
            return f(...args)
        } else {
            // console.log('-------args: ', args);
            console.log(fn(...args));
        }
    }

    return f

}

const sum1 = (a, b, c, d) => a + b + c + d;
const sum2 = (a, b) => a * b;

const sum1Curry = curry(sum1);
const sum2Curry = curry(sum2);
// sum1Curry(1, 1, 1, 1) // 4
sum1Curry(1, 1)(1, 1) // 4
// sum1Curry(1)(1, 1, 1) // 4

// sum2Curry(1)(1)       // 1
// sum2Curry(1, 1)       // 1 