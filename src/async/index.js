
const doSomethingAsync = (time) => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Do something async'),time)
        : reject( new Error('Test Error'))
    });
}

const doSomething = async (number) => {
    const something = await doSomethingAsync(number);
    console.log(something);
}

console.log('Before');
doSomething(3000);
console.log('After');

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync(4000);
        console.log(something);
    } catch (error) {
        console.error(error);
    }
}

console.log('Before1');
anotherFunction();
console.log('After1');
