function fibonacci(num) {
// your code here
	function fibonacci(num) {
    if (num === 1) {
        return 0;
    } else if (num === 2) {
        return 1;
    } else {
        let prev1 = 0;
        let prev2 = 1;
        let fib = 0;
        for (let i = 3; i <= num; i++) {
            fib = prev1 + prev2;
            prev1 = prev2;
            prev2 = fib;
        }
        return fib;
    }

}

module.exports = fibonacci;
