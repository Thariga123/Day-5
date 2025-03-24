function filterByAge(users, ageLimit) {
    return users.filter(user => user.age > ageLimit);
}

const users = [
    { name: "Ravi", age: 30 },
    { name: "Suthan", age: 22 },
    { name: "Chitra", age: 27 },
    { name: "Thariga", age: 19 }
];

const filteredUsers = filterByAge(users, 20);
console.log(filteredUsers);