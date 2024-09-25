const number = 35;
// string,number,boolean

if (typeof number === 'number') {
    console.log('value is a number')
}
else {
    console.log('is not a number')
}

const numbers = [1, 2, 3, 4, 4, 5];
console.log(typeof numbers)
const students = { name: 'seber', job: 'junior programmer' };
console.log(typeof students)

// Array chake
console.log(Array.isArray(numbers));
console.log(Array.isArray(students));