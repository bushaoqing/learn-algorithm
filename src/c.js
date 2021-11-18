/*
输入: [1, [2, [3, 4], 5], 6]
输出: 1,2,3,4,5,6,
*/ 

const aaa = [1, [2, [3, 4], 5], 6]

function f(arr) {
    let res = []
    const f1 = function (list) {
        for(var i =0;i<list.length;i++) {
            const el = list[i]
            if (Array.isArray(el)) {
                f1(el)
            } else {
                res.push(el)
            }
        }
    }
    f1(arr)
    return res.join(',')
}

console.log(f(aaa));