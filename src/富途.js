function F() {}
function O() {}


O.prototype = new F();
var obj = new O();

console.log(obj instanceof O); 
console.log(obj instanceof F); 
console.log(obj.__proto__ === O.prototype); 
console.log(obj.__proto__.__proto__ === F.prototype);

true
true
true
true


function F() {}
function O() {}


var obj = new O();
O.prototype = new F(); // 改变了内存指向

console.log(obj instanceof O); 
console.log(obj instanceof F); 
console.log(obj.__proto__ === O.prototype); 
console.log(obj.__proto__.__proto__ === F.prototype);

false
false
false
false

// 防抖函数
function debounce(fun, t, bool = false) {
    let timer = null
    return function () {
        if (timer === null && bool) {
            fun.call(this, ...arguments)
            timer = ''
        } else {
            if (timer) clearTimerout(timer)
            timer = setTimerout(() => {
                fun.call(this, ...arguments)
            }, t)
        }
    }
}

// 200 304
// let input = [1,[2,3,[4],[5]]]
// let ouput = [1,2,3,4,5]
function myFlat(input = []) {
    let res = []
    function f (arr) {
        if (Array.isArray(arr)) {
            arr.forEach(i => f(i))
        } else {
            res.push(arr)
        }
    }
    f(input)
    return res
}

let input = [1,[2,3,[4],[5]]]
// let ouput = [1,2,3,4,5]
function myFlat(arr = []) {
    return arr.reduce((prev, i) => {
        if (Array.isArray(i)) {
            prev = prev.concat(myFlat(i))
        } else {
            prev.push(i)
        }
        return prev
    }, [])
}

console.log(myFlat(input));


let input = [1,[2,3,[4],[5]]]

function myFlat(arr) {
    if (!Array.isArray(arr)) return '请输入数组'
    // return arr.flat(Infinity)
    return arr.reduce((prev, i) => prev.concat(Array.isArray(i) ? myFlat(i) : i), [])
}

console.log(myFlat(input));