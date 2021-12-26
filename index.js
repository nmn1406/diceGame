// adding click event listener to play button
document.querySelector('button').addEventListener('click' , function(){
  // setting random numbers between 1 to 6 to 2 variables
  var randomNumber1 = Math.floor(Math.random()*6)+1;
  var randomNumber2 = Math.floor(Math.random()*6)+1;
  //getting h1 DOM to print result
  const gameResult = document.querySelector('h1');
  //getting DOM of both images or dice
  const player1Dice = document.querySelector('.img1');
  const player2Dice = document.querySelector('.img2');
  //initialising two variables with value to the both images sources
  var player1DiceSrc = "images/Dice"+randomNumber1+".png";
  var player2DiceSrc = "images/Dice"+randomNumber2+".png";
  //setting both images src in the HTML
  player1Dice.setAttribute('src' , player1DiceSrc);
  player2Dice.setAttribute('src' , player2DiceSrc);
  //checking which player wins
  if(randomNumber1>randomNumber2){
    gameResult.textContent = "Player 1 Wins!";
  }
  else if (randomNumber1<randomNumber2) {
    gameResult.textContent = "Player 2 Wins!";
  }
  else{
    gameResult.textContent = "Draw!";
  }
});
