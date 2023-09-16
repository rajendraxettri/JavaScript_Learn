
let myScore = [1,2,12,11,10,4,3,5,7,6,8,9]
//let myScore = ["9","7","6","1","3","5","4","2","8"];
let temp=0;

for(let i=0; i<myScore.length; i++){
    for(let j=i+1; j<=myScore.length; j++){
        if(myScore[i]>myScore[j]){
            temp=myScore[i];
            myScore[i]=myScore[j];
            myScore[j]=temp;
        }
    }
}

for(let i = 0 ; i< myScore.length; i++){

    console.log(myScore[i]);
}

