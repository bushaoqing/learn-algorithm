/* 题目
    输入: [1, 5, 4, '2', '3a', 'ab', {name: 'tmp'}, 4, 5, 5, 5]
    输出: [1, 2, 4, 5] // 只保留数字以及数字字符串，并且去重并排序
*/ 

var list = [1, 5, 4, '2', '3a', 'ab', {name: 'tmp'}, 4, 5, 5, 5]

function getNumer(arr) {
    let newArr = [...new Set(arr)]    
    let res = newArr.filter(i => typeof (+i) === 'number' && !isNaN(+i))
    res.sort((a,b) => a-b)
    return res
}

console.log(getNumer(list));