/* 题目
   实现curry函数，使得sum1Curry和sum2Curry的结果成立
   提示: fn函数的参数数量可以通过fn.length获取
*/

const curry = (fn) => {
    // let len = fn.length
    // fn = function () {
    //     let args = [...arguments]
    //     if (args.length < len) {
    //         return function () {
    //             let ags = [...arguments]
    //             console.log(ags.concat(args).reduce((prev, i) => prev + i, 0));
    //         }
    //     } else if(args.length === len) {
    //         console.log(args.reduce((prev, i) => prev + i, 0));
    //     } else {
    //         throw Error('参数错误')
    //     }
    // }

    // return fn
}

const sum1 = (a, b, c, d) => a + b + c + d;
const sum2 = (a, b) => a + b;

const sum1Curry = curry(sum1);
const sum2Curry = curry(sum2);
sum1Curry(1, 1, 1, 1) // 4
sum1Curry(1, 1)(1, 1) // 4
sum1Curry(1)(1, 1, 1) // 4

sum2Curry(1)(1)       // 2
sum2Curry(1, 1)       // 2 