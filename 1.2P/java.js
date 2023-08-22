//String methods
const string = "Hello, world!";
let stringLength = string.length;
let upperString = string.toUpperCase();
let lowerString = string.toLowerCase();
let trimString = string.trim();
let sliceString = string.slice(7);

//Number methods
const number = 123.456;
let fixedNumber = number.toFixed(2);
let stringNumber = number.toString();
let exponentialNumber = number.toExponential(3);
let parsedInt = parseInt("89");
let parsedFloated = parseFloat("Currency: 90.99");

//Array methods
const states = ["VIC", "NSW", "QLD", "TAS", "WA", "SA"];
let statesLength = states.length;
let stringStates = states.toString();
states.pop();
states.push("SA");
let state = states.shift()

//Date methods
const date = new Date();
let stringDate = date.toDateString();
let fullYearDate = date.getFullYear();
let dayDate = date.getDay();
let hoursDate = date.getHours();
let monthDate = date.getMonth();

//Function methods
function multiply(no1,  no2)
{
    return no1 * no2;
}

function arrayToList(array)
{
    let listText = "<ul>";
    //const arrayLength = array.length;

    /*for (let i = 0; i < arrayLength; i++)
    {
        listText += "<li>" + array[i] + "</li>";
    }*/
    array.forEach(element => {
        listText += "<li>" + element + "</li>"
    });
    listText += "</ul>";

    document.getElementById("list").innerHTML = listText;

}

const states2 = ["VIC", "NSW", "QLD", "TAS", "WA", "SA"];
arrayToList(states2);