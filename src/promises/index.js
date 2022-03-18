const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve('yupiii!');
        } else {
            reject('nooooo');
        }
    });
}

somethingWillHappen()
.then (response => console.log(response))
.catch(err => console.error(err))

somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true){
            setTimeout(() =>{
                resolve('True');
            },200)
        }else {
            const err = new Error('Whoops!')
            reject(err)
        }
    })
}
somethingWillHappen2()
.then(response => console.log(response))
.catch(err => console.error(err))

Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => console.log('array of results: ',response))
.catch(err => console.error(err));
