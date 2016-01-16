//Test input:
//dontStopPopping([1, 2, 3, 4, 5, 6])

function dontStopPopping(array) {
  //write code here that removes each element from the array using array.pop
  //hint: use a for loop! i.e. for(var i = 0; ...)

  //this check will tell you if you've done it right!
  if (array.length == 0)
    alert("Yup you got it");
  else
    alert("Nah try again :( ");
}

//Test input:
//pushMeToTheLimit(5);

function pushMeToTheLimit(arrayMax) {
  var array = [];

  //write code here that pushes sequential numbers to an empty array until the length of the array hits the max
  //hint: another for loop!

  //this check will tell you if you've done it right!

  if (array.length == arrayMax)
    alert("yay");
  else
    alert("merp");
}

//Test input:
//findMe(["hi","bye", "ok", "w/e"], "w/e")

function findMe(array, searchWord) {
  var indexOfWord;

  //write code here that finds the index of the searchWord and sets it to variable indexOfWord

  //this check will tell you if you've done it right!
  if (array[indexOfWord] == searchWord)
    alert("found u")
  else
    alert(":( nope")
}

