// Assignment code here
var lowercaseChar = "abcdefdhijklmnopqrstuvwxyz"
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var numberChar = "1234567890"
var passwordLength
var uppercaseCheck
var specialCharCheck
var numberCheck
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
    alert("Thank you!");
  }
}

function detUppercase() {
  uppercaseCheck = prompt("Would you like an uppercase character in the password? (Yes or No)");
  if (uppercaseCheck === "YES" || uppercaseCheck === "yes" || uppercaseCheck === "Yes") {
    uppercaseCheck = true;
    return uppercaseCheck;
  } else if (uppercaseCheck === "NO" || uppercaseCheck === "no" || uppercaseCheck === "No") {
  uppercaseCheck = false;
  return uppercaseCheck;
  } else {
  alert("Please respond with Yes or No.");
  detUppercase();
  }
  return uppercaseCheck
}

function detSpecialCharCheck() {
  specialCharCheck = prompt("Would you like special characters in this password? (Yes or No");
  if (specialCharCheck === "YES" || specialCharCheck === "yes" || specialCharCheck === "Yes") {
    specialCharCheck = true;
    return specialCharCheck;
  } else if (specialCharCheck === "NO" || specialCharCheck === "no" || specialCharCheck === "No") {
    specialCharCheck = false;
    return specialCharCheck;
  } else {
  alert("Please respond with Yes or No.");
  detSpecialCharCheck();
  }
  return specialCharCheck
}

function detNumberCheck() {
  numberCheck = prompt("Would you like numbers in this password? (Yes or No)");
  if (numberCheck === "YES" || numberCheck === "yes" || numberCheck === "Yes") {
    numberCheck = true;
    return numberCheck;
  } else if (numberCheck === "NO" || numberCheck === "no" || numberCheck === "No") {
    numberCheck = false;
    return numberCheck;
  } else {
    alert("Please respond with Yes or No.");
  detNumberCheck();
  }
  return numberCheck
}

function generatePassword() {
  detLength();
  console.log(detLength);
  detUppercase();
  console.log(detUppercase);
  detSpecialCharCheck();
  console.log(detSpecialCharCheck);
  detNumberCheck();
  console.log(detNumberCheck);
  if (numberCheck && uppercaseCheck && specialCharCheck) {
    character += numberChar + uppercaseChar + specialChar;
  } else if (numberCheck && uppercaseCheck) {
    character += numberChar + uppercaseChar;
  } else if (numberCheck && specialCharCheck) {
    character += numberChar + specialChar;
  } else if (uppercaseCheck && specialCharCheck) {
    character += uppercaseChar && specialChar;
  } else if (numberCheck) {
    character += numberChar;
  } else if (uppercaseCheck) {
    character += uppercaseChar;
  } else if (specialCharCheck) {
    character += specialChar;
  }
  console.log(character)
  for(var i = 0; i < passwordLength; i++) {
    password += character.charAt(Math.floor(Math.random() * character.length))
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(detLength)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
