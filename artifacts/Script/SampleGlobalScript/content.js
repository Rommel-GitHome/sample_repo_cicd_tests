function foo() {
    return 'bar';
}
 
const test = Math.floor(Math.random() * 2) + 1;
 
if (test === 1) {
    throw Error('Testing error');
}
 
complete({
    foo,
});