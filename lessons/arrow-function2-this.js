
var student = {
  name: 'Tu',
  courses: ['Adroid', 'IOS'],
  getInfo: function(){
    this.courses.forEach(function(course){
      return 'Name student is ' + this.name + 'have joined ' + course;
    })
  }
}

console.log('---Name: undefined---');

var tu = student;
console.log('---tu.getInfo()---');

console.log(tu.getInfo())

console.log('---tu2 with .bind()---');

name = 'Window name';
var student3 = {
  name: 'Tu3',
  courses: ['Adroid', 'IOS'],
  getInfo: function(){
    this.courses.forEach(function(course){ // <== This function create local scope.
      console.log( 'Name student is ' + this.name + ' have joined ' + course);
    }.bind(this))
  },
  getName: function() {
    console.log(this.name+ ' is student')
  }
}
console.log('--Show Window name function when assigned to new variable tu3');
var tu3 = student3.getName;
console.log(tu3())
console.log('--Fixed it by using bind');
var tu4 = student3.getName.bind(student3);
console.log(tu4());

console.log('--Use arrow funtion');

studentName = 'Window name';
var student4 = {
  studentName: 'Tu3',
  courses: ['Adroid', 'IOS'],
  getInfo: function(){
    this.courses.forEach( course => { // <== This function create local scope.
      console.log( 'Name student is ' + this.studentName + ' have joined ' + course);
    })
  },
  getName: () => {
    console.log( this.studentName+ ' is student')
  }
}
var tu5 = student4.getInfo();
var tu6 =  student4.getName;
tu6()