let min=1;
let max=10;

let correcr_ans=Math.floor(Math.random() * (max - min) + min);

for(var i=0;i<=3;i++){
    
    if(i==3){
        alert('You Lose!');
        break;
    }
    
    let input=prompt('Guess Any Number_Limit (1 to 10)');

    
    if(correcr_ans>input){
        alert('Correct answer is greater!');
    }else if(correcr_ans<input){
        alert('Correct answer is smaller!')
    }else if(correcr_ans=input){
        alert('You Win');
        break;
    } 
   
    
    
} 

