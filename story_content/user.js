function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5imevkNqRW2":
        Script1();
        break;
      case "6nNDHefv4C0":
        Script2();
        break;
      case "5kaGgrXErtL":
        Script3();
        break;
  }
}

function Script1()
{
  // Getting the player
const player = GetPlayer();


// Begin checks
function update() {

// Declare variables
const farmVal = player.GetVar("Farming");
const drinkingVal = player.GetVar("Drinking");
const stockVal = player.GetVar("Livestock");
const spent = player.GetVar("Spent");
const budget = 100;

// Calculate the total amount spent
const spentSoFar = (+drinkingVal + +stockVal);
const newSpend = (+spentSoFar + +farmVal);

// If the user goes over budget
if(newSpend > 100) {
// Display a message with how much they went over
const exceededAmount = (newSpend - budget);
const message = `You have exceeded the water budget by ${exceededAmount}`;
alert(message);
// Set the input back to the original value
player.SetVar("Farming", 0);
const updateFarm = player.GetVar("Farming")
player.SetVar("Total", (100 - (+updateFarm + +drinkingVal + +stockVal)))
player.SetVar("Spent", (+updateFarm + +drinkingVal + +stockVal))
} else {
player.SetVar("Total", (100 - +newSpend))
player.SetVar("Spent", +newSpend)
}}
update();
}

function Script2()
{
  // Getting the player
const player = GetPlayer();


// Begin checks
function update() {

// Declare variables
const farmVal = player.GetVar("Farming");
const drinkingVal = player.GetVar("Drinking");
const stockVal = player.GetVar("Livestock");
const spent = player.GetVar("Spent");
const budget = 100;

// Calculate the total amount spent
const spentSoFar = (+drinkingVal + +stockVal);
const newSpend = (+spentSoFar + +farmVal);

// If the user goes over budget
if(newSpend > 100) {
// Display a message with how much they went over
const exceededAmount = (newSpend - budget);
const message = `You have exceeded the water budget by ${exceededAmount}`;
alert(message);
// Set the input back to the original value
player.SetVar("Drinking", 0);
const updateDrinks = player.GetVar("Drinking")
player.SetVar("Total", (100 - (+farmVal + +updateDrinks + +stockVal)))
player.SetVar("Spent", (+farmVal + +updateDrinks + +stockVal))

} else {
player.SetVar("Total", (100 - +newSpend))
player.SetVar("Spent", +newSpend)
}}
update();
}

function Script3()
{
  // Getting the player
const player = GetPlayer();


// Begin checks
function update() {

// Declare variables
const farmVal = player.GetVar("Farming");
const drinkingVal = player.GetVar("Drinking");
const stockVal = player.GetVar("Livestock");
const spent = player.GetVar("Spent");
const budget = 100;

// Calculate the total amount spent
const spentSoFar = (+drinkingVal + +stockVal);
const newSpend = (+spentSoFar + +farmVal);

// If the user goes over budget
if(newSpend > 100) {
// Display a message with how much they went over
const exceededAmount = (newSpend - budget);
const message = `You have exceeded the water budget by ${exceededAmount}`;
alert(message);
// Set the input back to the original value
player.SetVar("Livestock", 0);
const updateStock = player.GetVar("Livestock")
player.SetVar("Total", (100 - (+farmVal + +drinkingVal + +updateStock)))
player.SetVar("Spent", (+farmVal + +drinkingVal + +updateStock))
} else {
player.SetVar("Total", (100 - +newSpend))
player.SetVar("Spent", +newSpend)
}}
update();
}

