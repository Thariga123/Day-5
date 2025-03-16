const args = process.argv.slice(2);

if (args.length !== 1) {
    console.log("Usage: node script.js <number>");
    process.exit(1);
}

const num = parseInt(args[0], 10);

if (isNaN(num)) {
    console.log("Please provide a valid integer.");
    process.exit(1);
}

console.log(`Multiplication table for ${num}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}