// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name) {
    if (name === undefined || typeof name !== "string") {
        return "Hello, World!"
    }
    return `Hello, ${name}!`
}

function isFive(x) {
    return x === 5;

}