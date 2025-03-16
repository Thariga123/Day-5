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

if (num % 2 === 0) {
    console.log(`${num} is even.`);
} else {
    console.log(`${num} is odd.`);
}
