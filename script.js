var wrapperEle = document.body.querySelector(".wrapper");
var grades, text;
grades = [
  {
    name:"example",
    grade:100
  },
  
]
function writeGrades(value) {
  var grade = JSON.stringify(value)
  var gradeEle = document.createElement("p")
  gradeEle.innerHTML=grade
  wrapperEle.appendChild(gradeEle)
}
function makeGrades() {
  wrapperEle.innerHTML="";
  grades.forEach(writeGrades);
  var addButton = document.createElement("button")
  addButton.setAttribute("class", "add")
  addButton.innerHTML="Add Grades"
  wrapperEle.appendChild(addButton)
  document.body.querySelector(".add").addEventListener("click", function(){
  makeAdd()
})
}
function makeAdd() {
  wrapperEle.innerHTML=""
  var defineEle = document.createElement("h2")
  var studentEle = document.createElement("input")
  var stugrade = document.createElement("input")
  var submitEle = document.createElement("button")
  defineEle.innerHTML="First box is Student name, second box is student grade."
  studentEle.innerHTML="Student Name"
  studentEle.setAttribute("id", "name")
  stugrade.innerHTML="Student Grade"
  stugrade.setAttribute("id", "grade")
  submitEle.innerHTML="Submit"
  submitEle.setAttribute("id", "submit")
  wrapperEle.appendChild(defineEle)
  wrapperEle.appendChild(studentEle)
  wrapperEle.appendChild(stugrade)
  wrapperEle.appendChild(submitEle)
  document.body.querySelector("#submit").addEventListener("click", function(){
  addGrade()
  makeGrades()
})
  // grades.push({name:student, grade:stugrade})
  // grades.forEach(writeGrades);
}
function addGrade(){
  var student = document.body.querySelector("#name").value
  var studentGrade = parseInt(document.body.querySelector("#grade").value)
  var stuparse = parseInt(student)
  if (studentGrade > 100 || studentGrade < 0 || isNaN(studentGrade) == true || isNaN(stuparse) != true ) {
    prompt("Name must be a string of letters, and grade must be between 0 and 100")
  } else {
  grades.push({name:student, grade:studentGrade})
  grades.forEach(writeGrades);
  }
}
function login(){
  var username = document.body.querySelector("#user").value
  var password = document.body.querySelector("#pass").value
  if (username == "cool" && password == "password") {
    makeGrades()
  } else if (username != "cool") {
  var responseEle = document.createElement("h3")
  responseEle.innerHTML="Username was incorrect"
    wrapperEle.appendChild(responseEle)
  } else {
    var responseEle = document.createElement("h3")
    responseEle.innerHTML="Password was incorrect"
    wrapperEle.appendChild(responseEle)
  }
  
}

document.body.querySelector("#login").addEventListener("click", function(){
  login();
})
// document.body.querySelector(".add").addEventListener("click", function(){
//   makeAdd()
// })