// # Review 4 - For loops

// NOTE! Pay close attention to creating code with good and consistent code style.

// Use the variable "i" for all your loops.That variable should * not * be accessible outside the loop.Always use a for loop.

// 1. Make a loop that prints the numbers from 0 to 10.
for (let i = 0; i <= 10; i++) {
    console.log("Q1 =", [i]);
}

console.log("==============================================");
// 2. Make a loop that prints the numbers from 10 to 20.
for (let i = 10; i <= 20; i++) {
    console.log("Q2 =", [i]);
}


console.log("===============================================");

// 3. Make a loop that prints the numbers from - 10 to 10.
for (let i = -10; i <= 10; i++) {
    console.log("Q3", [i]);
}



console.log("===================================================");




// 4. Make a loop that prints the numbers from 10 to - 10.


for (let i = 10; i >= -10; i--) {
    console.log("Q4 =", [i]);
}




// 5. Make a string.Then, make a loop that prints all the individual characters of that string.
console.log("Q-5 ==================================");

const str = "Hello World"
for (let i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
}



const string = "Hello hello";
const chars = [...string]
console.log(chars);

console.log("Q-6===========================================================");
// 6. Make an array with 5 items.Then, make a loop that prints all the individual items of that array.


const array = ["This", "is", "the", "coding", "world"]
for (let char of array) {
    console.log(array);
}

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}



console.log("Q-7 ============================================================");
// 7. Make an array with 6 items.Then, make a loop that prints every second item of that array.

const data = ["Dell", "Asus", "Macbook", "Sony", "IBM", "Lenovo"]
for (let i = 0; i < data.length; i += 2) {

    console.log(data[i]);
}

console.log("Q-8===========================================================");
// 8. Make an array with 6 items.Then, make a loop that prints every third item of that array.


const models = ["Dell", "Asus", "Macbook", "Sony", "IBM", "Lenovo"]
for (let i = 0; i < models.length; i += 3) {

    console.log(models[i]);
}

console.log("Q-9 ==============================================================");
// 9. Make an array with 10 items.Then, make a loop that prints every third item of that array starting from the 2nd.

const names = ["John", "Johny", "Jack", "James", "Jackson", "Jamil", "Jawad", "Jalil", "Jamila", "Javid"]
for (let i = 0; i < names.length; i += 3) {
    console.log(names[i]);
}



// 10. Make an array with 7 objects.Each objects should have a property called counter.Create a loop that prints only the counter value of each object.
const cars = [
    { counter: "one" },
    { counter: "two" },
    { counter: "three" },
    { counter: "four" },
    { counter: "five" },
    { counter: "six" },
    { counter: "seven" },
]
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i].counter);
}


console.log("Q-11========================================================");

// 11. Save a random whole number between 0 and 100 to a variable.Then print all numbers from 0 to 100 and as soon as you reach the random number you created, stop your loop.

const number = Math.floor(Math.random() * 100);

console.log(number);

for (let i = 0; i <= 100; i++) {
    console.log(i);
    if (number === i)
        break
}








