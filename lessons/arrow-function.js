function func01 ( name , age) {
  return `My name is ${name } , ${age} years old`
}
console.log(func01 ('John',01 ))

// Case 2 : the function assign to variable

var func02 = function( name, age ) {
  return `My name is ${name } , ${age} years old`
}
console.log(func02 ('John',02 ))

// Case 3 : arrow function has 2 params
var func03 = (name, age) => {
  return `My name is ${name } , ${age} years old`
}
console.log(func03 ('John',03 ))

// Case 4 : only one statement

var func04 = (name, age) => `My name is ${name } , ${age} years old`
console.log(func04 ('John',04 ))

// Case 5 : only one statement AND one params

var func05 = x => `My name is ${x } , i have 0 year old`
console.log(func05 ('John'))

// Case 6 : no params
var func06 = () => `My name is XXX and no XXX year old. because Im hard code`
console.log(func06 ())

let courses = ["Adroid", "Java", "PHP"];

console.log(
  courses.map(course => {
    return course.toUpperCase();
  })
)

let courses2 = [1,0,6,4,5];

courses2.sort(
  (x,y) => x > y ? true : false
)
console.log(courses2)