Promise.reject(10)
    .then((r) => {
        console.log('0: ', r);
    })
    .catch((r) => {
        console.log('1: ', r);
    })
    .then((r) => {
        console.log('2: ', r);
        return Promise.reject(13)
    })
    .catch((r) => {
        console.log('3: ', r);
    })
    .then(() => {
        console.log('=======');
    })
    .finally(() => {
        console.log('finally');
    })