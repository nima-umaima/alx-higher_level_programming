#!/usr/bin/node
const a = parseInt(process.argv[2], 10);
const b = parseInt(process.argv[3], 10);
function add (z, b) {
    return (a + b);
}
console.log(add(a, b));
