
function sum(){
    let st = 0;
    for(let i=0; i< arguments.length; i++ ){
       st += arguments[i]; 
    }

    return st;
}

const ss = sum(1,2,3,4,5,6,7,8,9,10);

console.log(ss);