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

//Get a random character from each array
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

  //If condition evaluates as true, add symbols/special characters to the password characters array
  if (incSymbols) {
    characters = characters.concat(symbols);
  }
  //If condition evaluates as true, add numbers to the password characters array
  if (incNumbers) {
    characters = characters.concat(numbers);
  }
  //If condition evaluates as true, add uppercase letters to the password characters array
  if (incUppercase) {
    characters = characters.concat(uppercase);
  }
  //If condition evaluates as true, add lowercase letters to the password characters array
  if (incLowercase) {
    characters = characters.concat(lowercase);
  }

  //Use loop to select characters for password based on length 
  for (i = 0; i < length; i++) {
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
