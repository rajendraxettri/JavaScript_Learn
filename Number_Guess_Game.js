
val=0;

    function getRandomArbitrary(min, max) {
  return Math.random() * (10 - 1) + 1;
  
}
let num ;
  num = getRandomArbitrary();
  
  num = Number.parseInt(num);
console.log(num)


while(val!=12){



let getNum = prompt("Enter a number [1-10] : ");

getNum = Number.parseInt(getNum);


if(getNum == num){
    console.log("You Win Game !");
    
    
}else if(getNum < num){
    console.log("Your Input number is Less then Luckey number !");
}
else if(getNum > num){
    console.log("Your Input number is Grater then luckey Number !");
    
}
val=val+1;
}