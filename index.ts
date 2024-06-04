/* 4.Exploring Objects with for...in Loop
Objective: Practice working with objects in TypeScript and iterating over their properties using
a for...in loop.
Instructions:
1. Create a simple object with three items:
o Define an object called myObject with three properties: item1, item2, and item3,
each with corresponding string values.

2. Use a for...in loop to get properties' names and values from the object:
o Iterate through the properties of myObject using a for...in loop.
o Inside the loop, print each property's name and its corresponding value to the
console.*/
let myobject={
    item1:"watches",
    item2:"smartphone",
    item3:"laptops"

}
for(let x in myobject){
    console.log(`${x}:${myobject[x]}`)
};
/*1. Creating a Lesson Plan(Using for loop )
Objective: Create a list of lesson objects in TypeScript with alternating statuses to indicate
whether each lesson is running this year.
Steps to Follow:
1. Create a blank array: Start by setting up an empty array named myWork that will hold
objects.
2. Use a loop to create lessons: Write a for loop that runs from 1 to 10. In each iteration:
o Create an object representing a lesson.
o Each lesson should have a name property, which is a string like "Lesson 1",
"Lesson 2", etc.
o Each lesson should also have a status property, which alternates between true
and false. This means "Lesson 1" will have status: true, "Lesson 2" will have
status: false, and so on.

3. Add the lesson to the array: Push each lesson object into the myWork array.
4. Print the result: Finally, log the myWork array to the console to see the list of lessons.
Hints:
• Use a ternary operator to set the status property based on whether the lesson number is
odd or even.
• The modulo operator % can help determine if a number is even or odd.*/
let myWork:{name:string,status:boolean}[]=[];
for(let i=1;i<=10;i++){
    let lesson={
        name:`lesson${i}`,
        status:i%2===1? true:false,
    }
    if(i%2===1){
        console.log("This lesson is odd")
    }
    else{  console.log("This lesson is even")}
    myWork.push(lesson);
};
console.log(myWork);
/*3. Counter Incrementer (Using do while loop )
Objective: Create a program that increments a counter by a specified step value using a
do...while loop and prints the counter value to the console until it reaches or exceeds 100.
Steps to Follow:
1. Set the starting counter to 0: Create a variable counter and initialize it to 0.
2. Create a variable, step, to increase your counter by: Define a variable step to hold
the value by which the counter will be incremented.
3. Add a do...while loop: In the loop, print the counter to the console and increment it by
the step amount each iteration.
4. Continue to loop until the counter is equal to or more than 100: The loop should run
as long as the counter is less than 100.*/
let counter=0;
let step=5;
do{
    console.log(`countervalue:${counter}`);
    counter += step;
} while(counter <= 100);
console.log("counter has been completed");
/*5.Exploring Arrays with Loops(Using loop )
Objective: Practice working with arrays in TypeScript and using for loops and for...of loops
to iterate through array elements.
Instructions:
1. Create an empty array:
o Define an empty array called myArray.
2. Run a loop 10 times, adding a new incrementing value to the array:
o Use a for loop to iterate 10 times.

o In each iteration, add a new incrementing value (starting from 1) to the myArray.
3. Log the array into the console:
o After populating the array, log the myArray into the console.

4. Use the for loop to iterate through the array:
o Use a for loop to iterate through the array elements.
o Adjust the number of iterations based on the number of values in the array.
o Output each array element along with its index into the console.
Use the for...of loop to output the value into the console from the array:
o Use a for...of loop to iterate through the array elements.
o Output each array element directly into the console.*/
let myArray:number[]=[];
for(let i=1;i<=10;i++){
    myArray.push(i);
}
console.log("my array",myArray);
for(let j=0;j<myArray.length;j++){
    console.log(`element${j}: ${myArray[j]}`)
}
for (let value of myArray){
    console.log(`${value}`)
};