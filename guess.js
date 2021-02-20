var ans=4;

var stringques=prompt("Guess the number!");
var ques=Number(stringques);

if(Number(ques)>ans){
    alert("Too high. Try again.");
}
else if(Number(ques)===ans){
    alert("You guessed it!");
}
else{
    alert("Too low. Try again.");
}