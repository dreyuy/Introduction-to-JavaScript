/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
const votingAge = 25;
if(votingAge > 18) {
    console.log('votingAge'); 
}




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
var drinkingAge = 22
if(drinkingAge > 21) {
    console.log("legalDrinker");
} else{
    console.log("illegalDrinker")
}


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
var number = "1999"
if (number === "1999"){
    Number(1999)
}
console.log(number);




//Task d: Write a function to multiply a*b 
function multiply(a,b){
    console.log(a * b);
    return a * b;
}

console.log(multiply (4,5))




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function multiply (dogAge, myAge){
    return dogAge * myAge;
}

console.log(multiply(7,22))


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function dogFeeder(weight, age){
    if (age >=1 && weight <= 5){
        console.log(weight*.05);
}
    else if (age >=1 && weight >=6 && weight <=10){
        console.log(weight*.04);
}
    else if (age >=1 && weight >=11 && weight <=15){
        console.log(weight*.03);
}
    else if (age >=1 && weight >15){
        console.log(weight*.02);
}
    else if (age <1 && age >=2 && age <4){
        console.log(weight*.10)
}
    else if (age <1 && age >=4 && age <7){
        console.log(weight*.5)
}
    else if (age <1 && age >=7 && age <=12){
        console.log(weight*.4)
}
}

console.log(dogFeeder(15, 1))

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
  
var rockPS = Math.floor(Math.random(Math.round()) * 3);
    if (rockPS === 0){
      console.log("Rock");
}
    if (rockPS === 1){
    console.log("Paper");
}
    if (rockPS === 2){
    console.log("Scissors");
}

function rockGame (player, game){
    if (game="Rock"  && (player="Rock")){
        console.log("Draw");
    }
    else if (game= "Rock" && (player="Paper")){
        console.log("Win");
    } 
    else if (game= "Rock" && (player="Scissors")){
        console.log("Loss");
    }
    else if (game= "Paper" && (player="Rock")){
        console.log("Loss");
    }
    else if (game= "Paper" && (player="Paper")){
        console.log("Draw");
    }
    else if (game= "Paper" && (player="Scissors")){
        console.log("Win");
    }
    else if (game= "Scissors" && (player="Rock")){
        console.log("Win");
    }
    else if (game= "Scissors" && (player="Paper")){
        console.log("Loss");
    }
    else if (game= "Scissors" && (player="Scissors")){
        console.log("Draw");
    }
}

console.log(rockGame("Paper",rockPS))

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
 var miles = .621371
function mConverter (miles, kilometers){
    return miles * kilometers
}

console.log(mConverter (miles, 25))



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
var centimeters = 762
function fConverter (feet, centimeters){
    return feet * centimeters
}

console.log(fConverter(63, centimeters))


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
var part1 = "bottles of soda on the wall"
var part2 = "bottles of soda, take one down pass it around" 
var part3 = "bottles of soda on the wall"

const annoyingSong = startingNum => {
    for (let i = startingNum; i > -1; i--){
        console.log((i, part1, i, part2, i, part3))
    }
}


annoyingSong(20)


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

var gradeRandomizer = Math.floor(Math.random(Math.round()) * 101)
    
if (gradeRandomizer >=90){
    console.log("A");
}   else if (gradeRandomizer >= 80 && gradeRandomizer <90){
    console.log("B");
}   else if (gradeRandomizer >= 70 && gradeRandomizer <80){
    console.log("C");
}   else if (gradeRandomizer >= 60 && gradeRandomizer <70){
    console.log("D");
}   else {
    console.log("F");
}

console.log(gradeRandomizer)

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





