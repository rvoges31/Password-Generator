
// Define baseline variables
var len = 8;
var minUpper = 1;
var minLower = 1;
var minNumber = 0;
var minSpecial = 0;


// password generating function
function randomPassword(len, minUpper, minLower, minNumber, minSpecial) {
  var len = parseInt(prompt("Enter length from 8 to 128 characters."));
  while (len <8 ) {
    alert("Please enter a value above 8.");
    var len = parseInt(prompt("Enter length from 8 to 128 characters.")); // Returns user must input correct value
  }
  while (len > 128) {
    alert("Please enter a value less than 128.");
    var len = parseInt(prompt("Enter length from 8 to 128 characters.")); // Returns user must input correct value
  }
  var minUpper = parseInt(prompt("Enter minimum number of Uppercase letters."));
  while (Number.isInteger(minUpper) === false) {
    alert("Please enter an integer value");
    var minUpper = parseInt(prompt("Enter minimum number of Uppercase letters.")); // Returns user must enter correct value
  }
  var minLower = parseInt(prompt("Enter minimum number of lowercase letters."));
  while (Number.isInteger(minLower) === false) {
    alert("Please enter an integer value");
    var minLower = parseInt(prompt("Enter minimum number of lowercase letters.")); // Returns user must enter correct value
  }
  var minNumber = parseInt(prompt("Enter minimum number of numbers."));
  while (Number.isInteger(minNumber) === false) {
    alert("Please enter an integer value");
    var minNumber = parseInt(prompt("Enter minimum number of numbers.")); // Returns user must enter correct value
  }
  var minSpecial = parseInt(prompt("Enter minimum number of special characters."));
  while (Number.isInteger(minSpecial) === false) {
    alert("Please enter an integer value");
    var minSpecial = parseInt(prompt("Enter minimum number of special character.")); // Returns user must enter correct value
  }
  let chars = String.fromCharCode(...Array(127).keys()).slice(33),//Full character set including specials
      A2Z = String.fromCharCode(...Array(91).keys()).slice(65),//A to Z uppercase
      a2z = String.fromCharCode(...Array(123).keys()).slice(97),//a to z lower case
      zero2nine = String.fromCharCode(...Array(58).keys()).slice(48),//0 to 9
      specials = chars.replace(/\w/g, ''); // Special characters only

  if (minSpecial < 1) {chars = zero2nine + A2Z + a2z;} // re-wrties chars to not inlcude specials

  if (minNumber < 1) {chars = chars.replace(zero2nine, '');} // re-writes chars to not inlucde numbers

  let minRequired = minSpecial + minUpper + minLower + minNumber; //specifies minimum required variable to ensure the legnthe isnt shorter than len
  
  let rs = [].concat(
      Array.from({length: minSpecial ? minSpecial : 0}, () => specials[Math.floor(Math.random() * specials.length)]), // creates array of special charachters to inlcude
      Array.from({length: minUpper ? minUpper : 0}, () => A2Z[Math.floor(Math.random() * A2Z.length)]), // creates array of uppercase characters to include
      Array.from({length: minLower ? minLower : 0}, () => a2z[Math.floor(Math.random() * a2z.length)]), // creats array of lowercase characters to include
      Array.from({length: minNumber ? minNumber : 0}, () => zero2nine[Math.floor(Math.random() * zero2nine.length)]), // creates array of numbers to include
      Array.from({length: Math.max(len, minRequired) - (minRequired ? minRequired : 0)}, () => chars[Math.floor(Math.random() * chars.length)]), // creates array of *ALL characters to fill in remaining length
  );

  rsMixed = rs.sort(() => Math.random() > Math.random()).join(''); // joins the array and randomises input then returns the result to the 
  alert("Generated Password: " + rsMixed); // alert to display code on screen
}



