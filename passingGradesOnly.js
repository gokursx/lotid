const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

//Call back function
const passingGrades = grades.filter(function(grade) {
  return (grade >= 60);
});

console.log('Passing Grades List:', passingGrades); 
