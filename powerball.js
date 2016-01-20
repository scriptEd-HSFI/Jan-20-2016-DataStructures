 function randomNumber () {
	var largestNum = 69; 
	return Math.ceil(Math.random()*largestNum); 
}

function generatePowerBallNumbers() {
  var arrayOfPowerBallNumbers = [];
  var maxNumbers = 6; //this is the maximum number of powerball numbers you can have

  //write code here that fills arrayOfPowerBallNumbers with 6 random numbers! We already gave you a randomNumber function.
  //hint: use a for loop that checks against the variable maxNumbers


  //this will check if it works!
  if (arrayOfPowerBallNumbers.length == maxNumbers) 
    alert("woot got the numbers");
  else
    alert("try again");

  return arrayOfPowerBallNumbers;
}

//Test input: didIWin([6,7,8,34,123,3])
//You can also use generatePowerBallNumbers to get your array of power ball choices!
function didIWin(myPowerBallChoices) {
  var winningPowerballNumbers = generatePowerBallNumbers();
  var isMatching = false;
  
  //Array.sort() sorts the numbers in ascending order!
  winningPowerballNumbers.sort(); 
  myPowerBallChoices.sort();

  //Write code here that checks to see if the numbers in the arrays match!
  //There are MANY ways to do this. Try to come up with a few strategies in groups of 2, write them down on pen and paper, and we will regroup and discuss.

  if (isMatching)
    alert("OMG YOU WON!!");
  else
    alert(":( sorry. Here are the winning numbers " + winningPowerballNumbers );

  return isMatching;
}
