//let sumOfNumbers = [15, 25, 75, 32, 28, 12, 56, 41, 26, 88];
//let averageArray = 0;
//for(let i = 0; i < sumOfNumbers.length; i++)
//{
    
//averageArray += sumOfNumbers[i] /sumOfNumbers.length

//console.log(averageArray);
//}


//compare the top lines to the array. when you want to store more than one data point
//each array has an index which indicates the position in the array. Student 1 is at index 0, student 2 is at index 1 student 3 is at index 3.
let student1 = "Student 1"; 
let student2 = "Student 2";
let student3 = "Student 3";
let students = ["Student 1", "Student 2", "Student 3", "Student 4"];
let st = students.join('-');
console.log(st);
//console.log(student1);//prints student 1
//accessing each element in the array. each element is assigned an index value.
for(let i=0;i<students.length;i++){
console.log(students[i]);//prints student 2
}
console.log("reverse list");
for(let i=students.length; i>=0; i--){
    console.log(students[i]);
}