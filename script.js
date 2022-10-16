// Define character type arrays
var symbols = [' ', '"', '!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', ']', '[', '^', '_', '`', '{', '|', '}', '~', '/'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Declare global variables called in multiple functions
var length;
var incSymbols;
var incNumbers;
var incLowercase;
var incUppercase;

//Declare variables to get a random character from each array
var randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
var randomUppercase = uppercase[Math.floor(Math.random() * uppercase.length)];
var randomLowercase = lowercase[Math.floor(Math.random() * lowercase.length)];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Generate password button executes prompt about password length
  length = prompt("How many characters do you want in your password?");

  //Loop prompt to enter different length if response entered is less than 8 or greater than 128.
  while (length < 8 || length > 128) {
    length = prompt("Your password must be 8-128 characters. Please enter a different number.");
  }

  //If password length entered between 8 and 128, confirm password criteria
  if (length >= 8 && length <= 128) {
    incSymbols = confirm("Do you want symbols in your password?");
    incNumbers = confirm("Do you want numbers in your password?");
    incLowercase = confirm("Do you want lowercase letters in your password?");
    incUppercase = confirm("Do you want uppercase letters in your password?");
  }

  //Loop to confirm password criteria if no character types selected
  while (!incSymbols && !incNumbers && !incLowercase && !incUppercase) {
    incSymbols = confirm("You must confirm at least one character type. Do you want symbols in your password?");
    incNumbers = confirm("You must confirm at least one character type. Do you want numbers in your password?");
    incLowercase = confirm("You must confirm at least one character type. Do you want lowercase letters in your password?");
    incUppercase = confirm("You must confirm at least one character type. Do you want uppercase letters in your password?");
  }

  //Call generate password function
  generatePassword();
}

//Declare generate password function
function generatePassword() {
  //Declare array as empty
  var characters = [];
  //Declare random password variable as empty
  var randomPassword = "";
  //Declare count included variable to track number of true conditions and subtract from length in for loop
  var countInc = 0;

  //If condition evaluates as true
  if (incSymbols) {
    //Add symbols to characters array
    characters = characters.concat(symbols);
    //Add random symbol to password (for edge cases where symbol not selected as random character)
    randomPassword += randomSymbol;
    //Account for random symbol added to password (will subtract from length in for loop)
    countInc += 1;
  }

  //If condition evaluates as true
  if (incNumbers) {
    //Add numbers to characters array
    characters = characters.concat(numbers);
    //Add random number to password (for edge cases where number not selected as random character)
    randomPassword += randomNumber;
    //Account for random number added to password (will subtract from length in for loop)
    countInc += 1;
  }

  //If condition evaluates as true
  if (incUppercase) {
    //Add uppercase letters to characters array
    characters = characters.concat(uppercase);
    //Add random uppercase letter to password (for edge cases where uppercase letter not selected as random character)
    randomPassword += randomUppercase;
    //Account for random uppercase letter added to password (will subtract from length in for loop)
    countInc += 1;
  }

  //If condition evaluates as true
  if (incLowercase) {
    //Add lowercase letters to characters array
    characters = characters.concat(lowercase);
    //Add random lowercase letter to password (for edge cases where lowercase letter not selected as random character)
    randomPassword += randomLowercase;
    //Account for random lowercase letter added to password (will subtract from length in for loop)
    countInc += 1;
  }

  //Use loop to select characters for password based on length minus number of random symbols, numbers, uppercase, and lowercase characters already added
  for (i = 0; i < length - countInc; i++) {
    //Select random characters from characters variable
    var randomCharacter = characters[Math.floor(Math.random() * characters.length)];
    //Generate random password from random characters
    randomPassword += randomCharacter;
  }

  var passwordText = document.querySelector("#password");
  passwordText.value = randomPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
