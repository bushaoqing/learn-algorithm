function f1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('f1 success')
        }, 1000);
    })
}

function f2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('f2 success')
        }, 1500);
    })
}

function f3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('f3 error')
            // resolve('f3 success')
        }, 500);
    })
}

Promise.race([f1(), f2(), f3()]).then((r) => {
    console.log('race: ', r);
    // console.log('r1: ', r[0]);
    // console.log('r2: ', r[1]);
    // console.log('r3: ', r[2]);
}).catch((err) => {
    console.log('err: ', err);
})

// f2().then(r => console.log(r))