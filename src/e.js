let input = [1,[2,3,[4],[5,[6,7]]]]
// let ouput = [1,2,3,4,5]
function myFlat(arr = []) {
    // return arr.reduce((prev, i) => {
    //     if (Array.isArray(i)) {
    //         prev = prev.concat(myFlat(i))
    //     } else {
    //         prev.push(i)
    //     }
    //     return prev
    // }, [])

    return arr.reduce((prev, i) => prev.concat(Array.isArray(i) ? myFlat(i) : i), [])
}

console.log(myFlat(input));