let arr = [1,2,3,4,5];

let a;
do{
a = prompt("Enter a number : ");

a = Number.parseInt(a);

arr.push(a);
}while(a!=0);

console.log(arr);
