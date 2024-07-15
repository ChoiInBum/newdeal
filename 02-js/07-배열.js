// length
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.length); // 5

// at(index)
console.log(arr[0]); // 1
console.log(arr.at(0)); // 1

console.log(arr[arr.length - 1]); // 5
console.log(arr.at(-1)); // 5

// concat()
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(arr1.concat(arr2)); // [1, 2, 3, 4, 5, 6]

const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5, 6]

// every()
const a = arr.every(item => item > 0);
console.log(a);

// filter()
const b = arr.filter((item) => item > 2); // 2보다 큰 값만 필터링
console.log(b);

// 7세 이하 필터링
const users = [
    {name: '김겨울', age: 30},
    {name: '이봄', age: 7},
    {name: '박여름', age: 25},
];

const summer = users.find(item => item.name === '김여름');

const child = users.filter(user => user.age <= 7);
console.log(child);

// find()
const c = arr.find(item => item > 2);
console.log(c); //3
