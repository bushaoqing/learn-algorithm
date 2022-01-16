/**
 * 递归+存储式实现斐波拉契函数
 */

var obj = {
    1: 1,
    2: 1
};

function F(n) {

    // 方法一：
    // if (n === 2 || n === 1) {
    //     return 1;
    // }
    // return F(n-1) + F(n-2);

    // 方法二：
    // 先判断存储下的obj中是否已经含有第n项，有直接取，不用再递归
    if (obj[n]) {
        return obj[n];
    }
    
    // 没有就递归+存储下来
    obj[n] = F(n-1) + F(n-2);
    return obj[n];
}

console.time('time1');
console.log(F(10));
console.timeEnd('time1'); // time1: 6.419ms

console.time('time2');
console.log(F(8));
console.timeEnd('time2'); // time2: 0.446ms