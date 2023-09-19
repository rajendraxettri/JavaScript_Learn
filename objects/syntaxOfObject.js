//Object in JS
const student1 = {
    Name : 'Rajendra Chimala',
    Course : 'BICTE',
    Semester : 'Second',
    Age : '19',
    Height : '5.6ft',
    DateOfBirth : '2061/08/11'
}
//rajendraChimala


let student2 = {
    Name : 'Binod bohara',
    Course : 'BICTE',
    Semester : 'Second',
    Age : '20',
    Height : '5.0ft',
    DateOfBirth : '2060/01.20'
}

student1.Age = '20';
// console.log(student1,student2);

// console.log(student1.Name, student2.Name, student1.Age,student2.Age);

console.log(student1['Name'])
console.log(student2['Name'])
console.log(student1.Age);
