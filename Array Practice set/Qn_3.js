let arr = [1,2,3,4,10,20,30,21,35,100];

let narr = arr.filter((a)=>{
    return a%10 == 0;
})

console.log(narr);