// Assignment code here
var lowercaseChar = "abcdefdhijklmnopqrstuvwxyz"
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var numberChar = "1234567890"
var passwordLength
var uppercaseCheck
var character = lowercaseChar;
console.log(character)

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function detLength(){
  passwordLength = prompt("Please enter a password length between 8 an 128 characters.");
  if (isNaN(passwordLength)) {
    alert("Please enter a number value between 8 and 128.");
    detLength();
  } else if (passwordLength<8 || passwordLength>128) {
    alert("Please enter a number value between 8 and 128.");
    detLength();
  } else {
    alert("How many numbers would you like to add?");
  }
}

detLength()

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(detLength)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
