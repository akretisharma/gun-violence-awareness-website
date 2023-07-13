/* .js files add interaction to your website */

function showOverlay(){
  document.getElementById("overlay").style.display = "block";
}

window.addEventListener('load',showOverlay);

var proceed = document.getElementById("proceed");
proceed.addEventListener('click', closeOverlay)

function closeOverlay(){
  document.getElementById("overlay").style.display = "none";
}

/* fact generator */

var factList = [
  "More than 500 people die every day from gun violence",/*0*/
  "Each day 12 children die from gun violence in America",/*1*/
  "44% of all homicides globally involve gun violence",/*2*/
  "Guns are the leading cause of death among American children and teens",/*3*/
  "There were 1.4 million firearm-related deaths globally between 2012 and 2016",
"Approximately 20% of gun owners own 65% of the guns.", "Every day, 7 children are killed and 12 more are injured with a gun.", "The rate of gun-related crime in Canada has increased by 42% since 2013."];/*4*/


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
