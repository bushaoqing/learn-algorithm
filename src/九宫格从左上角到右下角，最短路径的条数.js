/**
 * 九宫格从左上角到右下角，最短路径的条数
 */
function f(m, n) {

  if (m === 0 && n === 0) {
    return 0
  } else if (m === 0 || n === 0) {
    return 1
  }

  return f(m-1, n) + f(m, n-1)
}

console.log('方法共有：', f(2, 2));

let res = []
function f1(m, n) {
  res.push(`${m}-${n}`)

  if (m === 0 && n === 0) {
    return 0
  } else if (m === 0 || n === 0) {
    return 1
  }

  return f1(m-1, n) + f1(m, n-1)
}

f1(2, 2)
console.log('线路：', res);