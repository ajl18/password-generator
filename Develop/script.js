// Assignment code here

var lowercaseChar = "abcdefghijklmnopqrstuvwxyz" ;
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
var specialChar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~" ;


var generatePassword = function () {


  numChars = prompt ("Length of password (8-128 characters?)")
  if ( numChars < 8 || numChars > 128) {
    alert ("Please select a valid number of characters, 8-128")
  }


}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Initialize variables

var numChars = numChars ()

