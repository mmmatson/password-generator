// Define character type variables
var symbols = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~/";
var numbers = "1234567890";
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    // Generate password button executes prompt about password length
    var length = prompt("How many characters do you want in your password?");
    
    //Loop prompt to enter different length if response entered is less than 8 or greater than 128.
    while (length <8 || length >128) {
    var length = prompt("Your password must be 8-128 characters. Please enter a different number.");
    }
    
    //If password length entered between 8 and 128, confirm password criteria
    if (length >=8 && length <=128) {
    var incSymbols = confirm("Do you want symbols in your password?");
    var incNumbers = confirm("Do you want numbers in your password?");
    var lowercase = confirm("Do you want lowercase letters in your password?");
    var uppercase = confirm("Do you want uppercase letters in your password?");
    }

    //Loop to confirm password criteria if no character types selected
    while (!incSymbols && !incNumbers && !lowercase && !uppercase) {
    var incSymbols = confirm("You must confirm at least one character type. Do you want symbols in your password?");
    var incNumbers = confirm("You must confirm at least one character type. Do you want numbers in your password?");
    var lowercase = confirm("You must confirm at least one character type. Do you want lowercase letters in your password?");
    var uppercase = confirm("You must confirm at least one character type. Do you want uppercase letters in your password?");
    }

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
