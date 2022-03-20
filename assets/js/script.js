// Assignment code here

var charSelections = ""
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz" ;
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
var specialChar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~" ;
var YES = "YES"
var NO = "NO"


var generatePassword = function () {


  var numChars = prompt ("Length of password (8-128 characters?)")
  if ( numChars < 8 || numChars > 128) {
    alert ("Please select a valid number of characters, 8-128"); 
    var numChars = prompt ("Length of password (8-128 characters?)")
  }

  console.log(numChars);

  var lowerCase = confirm ("Would you like to include lower case characters? Click ok to include / Cancel to exclude.")

  console.log(lowerCase);

  var upperCase = confirm ("Would you like to include upper case characters? Click ok to include / Cancel to exclude.")

  console.log(upperCase);

  var specialChar = confirm ("Would you like to include special characters? Click ok to include / Cancel to exclude.")


  console.log(specialChar);

if (lowerCase == true ) {
  charSelections = charSelections + lowercaseChar 
};

if (upperCase == true ) {
  charSelections = charSelections + uppercaseChar
};

if (specialChar == true ) {
  charSelections = charSelections + specialChar
};


console.log(charSelections);

for (var i = 0 ; i < numChars ; i++) {

}


return "temporary-string"

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




