// Define character type arrays
var symbols = [' ','"','!','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@',']','[','^','_','`','{','|','}','~','/',];
var numbers = ['0','1','2','3','4','5','6','7','8','9',];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];

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
    var incLowercase = confirm("Do you want lowercase letters in your password?");
    var incUppercase = confirm("Do you want uppercase letters in your password?");
    }

    //Loop to confirm password criteria if no character types selected
    while (!incSymbols && !incNumbers && !lowercase && !uppercase) {
    var incSymbols = confirm("You must confirm at least one character type. Do you want symbols in your password?");
    var incNumbers = confirm("You must confirm at least one character type. Do you want numbers in your password?");
    var incLowercase = confirm("You must confirm at least one character type. Do you want lowercase letters in your password?");
    var incUppercase = confirm("You must confirm at least one character type. Do you want uppercase letters in your password?");
    }

    //Declare generate password function
      function generatePassword () {
        //Declare variable as empty
        var characters = "";

        //If condition evaluates as true, include symbols/special characters in password characters
        if (incSymbols) {
          characters += symbols;
        }
        //If condition evaluates as true, include numbers in password characters
        if (incNumbers) {
          characters += numbers;
        }
        //If condition evaluates as true, include uppercase letters in password characters
        if (incUppercase) {
          characters += uppercase;
        }
        //If condition evaluates as true, include lowercase letters in password characters
        if (incLowercase) {
          characters += lowercase;
        }    
 
        //Check/test that character variable is being created correctly based on conditions
        console.log(characters);
      }

      var password = generatePassword();
        var passwordText = document.querySelector("#password");

      passwordText.value = password;
    }
  
    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
