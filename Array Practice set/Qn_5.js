let arr = [1,2,3,4,5,100];

let narr = arr.reduce((a,a1)=>{
    return a*a1;
})

console.log("The Factorial of Array is : "+narr);