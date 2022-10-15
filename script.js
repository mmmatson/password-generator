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
    
    //Loop prompt to enter different length if password entered is less than 8 or greater than 128.
    while (length <8 || length >128) {
    var length = prompt("Your password must be 8-128 characters. Please enter a different number.");
    }

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
