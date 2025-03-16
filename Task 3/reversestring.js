const args = process.argv.slice(2);

if (args.length !== 1) {
    console.log("Usage: node script.js <string>");
    process.exit(1);
}

const inputString = args[0];
const reversedString = inputString.split('').reverse().join('');

console.log(`Reversed string: ${reversedString}`);