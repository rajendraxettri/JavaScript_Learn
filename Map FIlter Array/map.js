let arr = [23,45,34]

let a = arr.map((value, index)=>{
    console.log(value, index)
    return value+3;
})

console.log(a);
//By me
let data = [1,2,3,4,5,6,7,8,9,10];

let ndata = data.map((value, index)=>{
    return value+index;
})

console.log(ndata);