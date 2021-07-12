const class07Students = [];

function addStudentToClass(studentName) {
    if (studentName === " ") {
        console.log("Name is empty. So you can not add the class.");
        return;}

    if (studentName === "queen") {
        class07Students.push(studentName);}

    if (class07Students.length == 6) {
        console.log("You can not add " +studentName+ ". Only 6 students can add to class07");} 
        
    else if (class07Students.includes(studentName)) {
        console.log(`${studentName} is already in the class.`);} 
        
    else {
        class07Students.push(studentName);
        console.log(class07Students);
    }
}

function getNumberOfStudents() {
    let totalNumberOfStudents = class07Students.length;
    return totalNumberOfStudents;}

addStudentToClass("Gokan");
addStudentToClass("student1");
addStudentToClass("student1");
addStudentToClass("student2");
addStudentToClass("student3");
addStudentToClass("");
addStudentToClass("queen");
addStudentToClass("student4");
addStudentToClass("student5");
addStudentToClass("student6");
addStudentToClass("student1");

console.log(class07Students); 

console.log("Total number of students =  " + getNumberOfStudents());