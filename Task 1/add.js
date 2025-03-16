const [num1, num2] = process.argv.slice(2).map(Number);

if (isNaN(num1) || isNaN(num2)) {
    console.log("Please provide two valid numbers.");
} else {
    console.log(`Sum: ${num1 + num2}`);
}
